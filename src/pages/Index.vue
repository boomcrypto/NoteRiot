<template>
  <q-page>
    <Container>
      <FilterBar class="q-mr-auto q-ml-auto q-mt-md" />

      <div class="q-mt-sm">
        <div v-if="notes.length">
          <div v-if="filterNotes.length">
            <div class="row q-col-gutter-md items-start">
              <Note
                :data="note"
                v-for="note in filterNotes"
                :class="
                  mode === 'list' || mode === 'condensed_list'
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
    <q-page-sticky
      class="override-bottom-space"
      position="bottom-right"
      style="z-index: -10"
    >
      <img src="/images/bottom-right.svg" />
    </q-page-sticky>
    <q-page-sticky
      position="bottom-right"
      :offset="[50, 60]"
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
    <q-page-sticky
      position="bottom-right"
      :offset="[10, -35]"
      v-else
      style="z-index: 2010"
    >
      <q-btn
        round
        size="24px"
        fab
        icon="add"
        color="accent"
        @click="handleAddNote"
        padding="25px"
        style="box-shadow: 0 0 8px gray"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import EmptyFilter from "../components/EmptyFilter.vue";
import NoNotes from "../components/NoNotes.vue";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

export default {
  name: "PageHome",
  components: {
    Note: () => import("components/Note.vue"),
    Container: () => import("components/Container.vue"),
    EmptyFilter,
    NoNotes,
    FilterBar: () => import("components/FilterBar.vue"),
  },
  data() {
    return {
      showEditor: false,
      newNote: null,
    };
  },
  computed: {
    ...mapGetters("app", ["filterNotes", "tags", "colors"]),
    ...mapState("app", ["notes", "mode"]),
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
