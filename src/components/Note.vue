<template>
  <div>
    <q-card
      class="boom-card"
      :class="`bg-${data.color}-4`"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      @click="handleEditNote"
      style="
        border: 1px solid #d8d8d8;
        height: 310px;
        border-radius: 8px;
        overflow: hidden;
      "
      :key="data.id"
    >
      <q-item>
        <q-item-section>
          <q-item-label class="note-title">{{ displayTitle }}</q-item-label>
          <q-item-label class="timestamp">{{ lastModified }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <NoteActions
            v-if="buttonBarVisibility"
            :note="data"
            style="margin-top: -8px; margin-right: -16px"
          />
        </q-item-section>
      </q-item>
      <q-card-section style="overflow: hidden">
        <viewer :initialValue="data.text" :key="data.modified" />
      </q-card-section>
      <q-card-section class="attachment-previews" v-if="data.attachments">
        <div
          class="media-thumb-unique"
          v-for="(attachment, index) in data.attachments"
          :key="`${data.id}-${index}`"
          :style="`backgroundImage: url('${attachment.url}')`"
        ></div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="showTagManager">
      <SelectTag :note="this.data" @update-note="handleUpdates" />
    </q-dialog>
    <q-dialog v-model="showColorManager">
      <SelectColor :note="this.data" @update-note="handleUpdates" />
    </q-dialog>
    <q-dialog
      v-model="showEditor"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <Editor
          :data="this.data"
          @update-note="handleUpdates"
          @closeEditor="handleCloseEditor"
        />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import * as timeago from "timeago.js";
import Note from "src/models/Note";
import { Viewer } from "@toast-ui/vue-editor";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

export default {
  name: "Note",
  components: {
    // ListTags: () => import("components/ListTags"),
    // TagManager: () => import("components/TagManager"),
    // ButtonBar: () => import("components/ButtonBar.vue"),
    SelectColor: () => import("components/SelectColor"),
    SelectTag: () => import("components/SelectTag"),
    Editor: () => import("components/Editor.vue"),
    NoteActions: () => import("components/NoteActions.vue"),
    Viewer,
  },
  props: {
    data: {
      type: Object,
      default: () => new Note(),
    },
  },
  data() {
    return {
      showColor: false,
      buttonBarVisibility: false,
      newTagLabel: "",
      colorVal: "",
      hideNewTagInput: true,
      note: this.data,
      // isPinned: this.data.isPinned,
      fave: this.data.fave,
      edit: false,
      color: this.data.color,
      status: null,
      displayComponent: null,
      showTagManager: false,
      showColorManager: false,
      showEditor: false,
      currentTags: this.data.tags,
      content: this.data.text,
      contentKey: this.data.modified,
    };
  },
  computed: {
    ...mapGetters("app", ["tags"]),
    ...mapState("app", ["noteColors"]),
    displayTitle() {
      const titleLength = this.data.title.length;
      if (titleLength > 18) {
        return `${this.data.title.substring(0, 15)}...`;
      } else if (titleLength === 0) {
        return "Untitled";
      } else {
        return this.data.title;
      }
    },
    tagMenuLabel() {
      if (this.data.tags.length) {
        return "Tags";
      } else {
        return "Add Tags";
      }
    },
    lastModified() {
      return timeago.format(this.data.modified);
    },
  },
  methods: {
    ...mapActions("app", ["updateNote"]),

    async handleUpdates(updates) {
      const notestatus = await this.updateNote(updates);
      this.note = Object.assign({}, this.note, updates);
      this.contentKey = `${this.note.id}-${this.note.modified}`;
      console.log("note status after update", notestatus);
    },
    handleMouseOver() {
      this.buttonBarVisibility = true;
    },
    handleMouseLeave() {
      this.buttonBarVisibility = false;
    },
    handleEditNote() {
      // this.component = "Editor";
      this.showEditor = true;
      // this.displayComponent = null;
    },
    handleShareNote() {
      this.$root.$emit("userShare", this.data.id);
    },
    handleArchive() {
      let update = Object.assign({}, this.note);
      update.trash = !update.trash;
      let payload = {
        id: this.note.id,
        updates: update,
      };
      this.updateNote(payload);
    },
    handleCloseEditor() {
      this.showEditor = false;
    },
    handleUnDelete() {
      this.payload = {
        id: this.id,
        updates: { isArchived: false },
      };
      this.updateNote(this.payload);
    },
    // async handlePin() {
    //   this.isPinned = !this.isPinned;
    //   let update = Object.assign({}, this.data);
    //   update.isPinned = this.isPinned;
    //   let payload = {
    //     id: this.note.id,
    //     updates: update,
    //   };
    //   this.updateNote(payload);
    // },
    handleFave() {
      this.fave = !this.data.fave;
      const update = {
        fave: this.fave,
      };

      const payload = {
        id: this.data.id,
        updates: update,
      };
      this.updateNote(payload);
    },
    handleOpenTagEditor() {
      this.component = "SelectTag";
      this.showDialog = true;
      this.displayComponent = null;
    },
    handleSelectColor() {
      this.component = "SelectColor";
      this.showDialog = true;
      this.displayComponent = null;
    },
  },
};
</script>

<style scoped>
.timestamp {
  font-family: "IBM Plex Sans";
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
}
.media-thumb-unique {
  width: 64px;
  height: 64px;
  margin-right: 8px;
  background-position: 50% 50%;
  background-size: cover;
}
.attachment-previews {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 8px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
/* .boom-card:hover,
.boom-card:focus-within {
  transition: all 0.2s ease-in-out;
  transform: scale(105%);
} */
</style>
