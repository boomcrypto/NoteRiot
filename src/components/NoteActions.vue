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
      <q-menu
        v-model="showMenu"
        @before-show="showState"
        @input="showState"
        @before-hide="showState"
        @hide="showState"
      >
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
    </q-btn>
    <q-dialog v-model="showUserSearch">
      <user-search :note="note"></user-search>
    </q-dialog>
    <q-dialog v-model="showTagEditor">
      <tag-editor :note="note" :id="note.id"></tag-editor>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions({
      updateNote: "notes/updateNote",
    }),
    handleMenuButton() {
      this.showMenu = !this.showMenu;
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
      const payload = {
        id: this.note.id,
        updates: { fave: !this.note.fave },
      };
      this.$emit("update-note", payload);
    },
    handleUnDelete() {
      const payload = {
        id: this.note.id,
        updates: { trash: false },
      };
      this.$emit("update-note", payload);
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
