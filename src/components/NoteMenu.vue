<template>
  <div>
    <q-menu persistent anchor="bottom left" self="top right">
      <div class="effin-border">
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup @click.stop="downloadNote(note)">
            <q-item-section>Download</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="handleOpenTagEditor">
            <q-item-section>Tags</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="handleShareNote">
            <q-item-section>Share</q-item-section>
          </q-item>
          <q-separator />
          <q-item
            clickable
            v-close-popup
            @click.stop="handleDelete"
            v-if="!note.isArchived"
          >
            <q-item-section>Archive</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click.stop="handleUnDelete" v-else>
            <q-item-section>Restore</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-menu>
    <q-dialog v-model="showUserSearch">
      <user-search :note="note"></user-search>
    </q-dialog>
    <q-dialog v-model="showTagEditor">
      <tag-editor :note="note" :id="id"></tag-editor>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import exportData from "src/helpers/exportData";
import UserSearch from "components/UserSearch";
import TagEditor from "components/TagEditor";

export default {
  name: "NoteMenu",
  props: ["note", "id"],
  mixins: [exportData],
  components: {
    UserSearch,
    TagEditor,
  },
  data() {
    return {
      showUserSearch: false,
      showTagEditor: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions({
      updateNote: "notes/updateNote",
    }),
    handleOpenTagEditor() {
      this.showTagEditor = true;
    },
    handleShareNote() {
      this.showUserSearch = true;
    },
    handleDelete() {
      this.payload = {
        id: this.id,
        updates: { isArchived: true },
      };
      this.updateNote(this.payload);
    },
    handleUnDelete() {
      this.payload = {
        id: this.id,
        updates: { isArchived: false },
      };
      this.updateNote(this.payload);
    },
  },
};
</script>

<style></style>
