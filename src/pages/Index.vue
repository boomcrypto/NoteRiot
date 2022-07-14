<template>
  <q-page>
    <Container>
      <div v-if="notes.length">
        <div v-if="filterNotes.length">
          <div class="row q-col-gutter-md items-start">
            <Note
              :data="note"
              v-for="note in filterNotes"
              class="col-xs-12 col-sm-4 col-md-3 col-lg-2"
              :key="note.id"
            />
          </div>
        </div>
        <div v-else>
          <EmptyFilter />
        </div>
      </div>
      <div v-else>
        <NoNotes />
      </div>
    </Container>
    <q-page-sticky
      position="bottom-right"
      :offset="[50, 50]"
      v-if="$q.screen.gt.xs"
    >
      <q-btn
        round
        size="48px"
        fab
        icon="add"
        color="accent"
        @click="handleAddNote"
        padding="30px"
      />
    </q-page-sticky>
    <q-page-sticky position="bottom" :offset="[10, -10]" v-else>
      <q-btn
        round
        size="24px"
        fab
        icon="add"
        color="accent"
        @click="handleAddNote"
        padding="30px"
      />
    </q-page-sticky>
    <q-dialog
      v-model="showEditor"
      maximized
      :class="$q.dark.isActive ? 'toastui-editor-dark' : ''"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <editor
        :data="newNote"
        @closeEditor="handleCloseEditor"
        @update-note="handleUpdates"
      />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import EmptyFilter from "../components/EmptyFilter.vue";
import NoNotes from "../components/NoNotes.vue";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

export default {
  name: "PageIndex",
  components: {
    Note: () => import("components/Note.vue"),
    Container: () => import("components/Container.vue"),
    EmptyFilter,
    NoNotes,
    Editor: () => import("components/Editor.vue"),
  },
  data() {
    return {
      showEditor: false,
      newNote: null,
    };
  },
  computed: {
    ...mapGetters("app", ["filterNotes"]),
    ...mapState("app", ["notes"]),
  },
  methods: {
    ...mapActions("app", [
      "addNote",
      "updateNote",
      "deleteNote",
      "setLabelFilter",
    ]),
    async handleAddNote() {
      this.setLabelFilter = "";
      this.newNote = await this.addNote();
      this.showEditor = true;
      // const newNote = await this.addNote();
      // this.$router.push({
      //   name: "Edit",
      //   params: { id: "new" },
      // });
    },
    handleCloseEditor() {
      this.showEditor = false;
      this.newNote = null;
    },
    async handleUpdates(updates) {
      const notestatus = await this.updateNote(updates);
      console.log("note status after update", notestatus);
    },
  },
};
</script>
<style scoped></style>
