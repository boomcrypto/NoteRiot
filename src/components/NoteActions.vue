<template>
  <div class="grid-icons">
    <q-btn unelevated round @click.stop="handleFave">
      <img
        :src="
          note.fave ? '/images/favorited.svg' : '/images/favorite-available.svg'
        "
      />
    </q-btn>
    <q-btn unelevated round @click.stop="handleMenuButton">
      <img src="/images/more.svg" />
      <q-menu>
        <div class="effin-border">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click.stop="handleDownloadNote">
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
              v-if="!note.trash"
            >
              <q-item-section>Archive</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click.stop="handleUnDelete" v-else>
              <q-item-section>Restore</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-menu>
    </q-btn>
    <q-dialog v-model="showUserSearch">
      <user-search :note="note"></user-search>
    </q-dialog>
    <q-dialog v-model="showTagEditor">
      <TagEditor
        :note="note"
        :id="note.id"
        @update="handleUpdates"
        @close="showTagEditor = false"
      />
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { downloadNote } from "src/helpers/notes";
export default {
  components: {
    UserSearch: () => import("components/UserSearch.vue"),
    TagEditor: () => import("components/TagEditor.vue"),
  },
  props: ["note"],
  data() {
    return {
      buttonBarVisibility: "none",
      payload: {},
      showTagEditor: false,
      showUserSearch: false,
      showMenu: false,
    };
  },
  methods: {
    ...mapActions("app", ["updateNote"]),
    handleDownloadNote() {
      downloadNote(this.note);
    },
    handleMenuButton() {
      this.showMenu = !this.showMenu;
    },

    handleUpdates(val) {
      if (typeof val === "object") {
        this.payload = val;
      } else {
        this.payload = {};
        console.log("error return type to NoteActions update function: ", val);
      }
      this.showTagEditor = false;
      this.showUserSearch = false;
      this.showMenu = false;
      this.$emit("update-note", val);
    },
    showState(evt) {
      console.log("event: ", evt);
      console.log("buttonBarVisibility", this.buttonBarVisibility);
      console.log("showMenu", this.showMenu);
      console.log("showTagEditor", this.showTagEditor);
      console.log("showUserSearch", this.showUserSearch);
      console.log("payload", this.payload);
    },
    handleFave() {
      this.$emit("update-note", {
        fave: !this.note.fave,
      });
    },
    handleDelete() {
      this.$emit("update-note", { trash: true });
    },
    handleUnDelete() {
      this.$emit("update-note", { trash: false });
    },
    handleOpenTagEditor() {
      this.showTagEditor = true;
      this.showMenu = false;
    },
    handleShareNote() {
      this.showUserSearch = true;
    },
  },
};
</script>

<style></style>
