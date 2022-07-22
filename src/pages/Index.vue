<template>
  <q-page>
    <Container>
      <div class="q-mt-sm">
        <div v-if="notes.length">
          <div v-if="filterNotes.length">
            <div class="row q-col-gutter-md items-start">
              <Note
                :data="note"
                v-for="note in filterNotes"
                :class="
                  mode === 'list'
                    ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12'
                    : 'col-xs-12 col-sm-4 col-md-3 col-lg-2'
                "
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
      </div>
    </Container>
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
    // FilterBar: () => import("components/FilterBar.vue"),
  },
  data() {
    return {
      showEditor: false,
      newNote: null,
    };
  },
  computed: {
    ...mapGetters("app", ["filterNotes", "tags", "colors"]),
    ...mapState("app", ["notes", "showFilterBar", "mode"]),
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
  },
};
</script>
<style scoped></style>
