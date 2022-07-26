<template>
  <div>
    <q-card
      v-if="mode === 'grid'"
      class="q-pa-none boom-card"
      :class="
        data.hasOwnProperty('updates') && data.updates.color!='none'?`bg-${data.updates.color}-2`:'' + ($q.dark.isActive ? ' boom-card-dark' : '')
      "
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      @click="handleEditNote"
      style="height: 310px; overflow: hidden"
      :style="
        buttonBarVisibility
          ? 'cursor: pointer'
          : '' + ($q.dark.isActive ? 'color: white' : '')
      "
      :key="data.id"
    >
      <NoteActions
        class="grid-icons absolute-top-right"
        :note="data"
        style="z-index: 99"
        :style="buttonBarVisibility ? 'display: flex' : 'display: none'"
      />
      <q-img
        v-if="hasImage"
        :src="data.attachments[0].url"
        :ratio="16 / 9"
        spinner-color="accent"
        spinner-size="48px"
      />
      <q-card-section>
        <q-item-label class="note-title text-no-wrap">{{
          displayTitle
        }}</q-item-label>
        <q-item-label class="timestamp">{{ lastModified }}</q-item-label>
        <div :class="$q.dark.isActive ? 'toastui-editor-contents-dark' : ''">
          <viewer
            :initialValue="data.text"
            :key="data.modified"
            class="full-width"
          />
        </div>
      </q-card-section>
    </q-card>
    <q-card
      v-else
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      :class="
        `bg-${data.color}-2` + ($q.dark.isActive ? ' boom-card-dark' : '')
      "
      class="boom-card-list"
      @click="handleEditNote"
      :key="data.id"
    >
      <q-card-section class="q-pa-none">
        <q-item class="col-xs-12 col-sm-12 col-md-12 col-lg-12 full-width">
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium text-body1">{{
                displayTitle
              }}</span>
            </q-item-label>
            <div
              :class="$q.dark.isActive ? 'toastui-editor-contents-dark' : ''"
              :style="{'max-height': $q.screen.gt.sm?'140px':'70px','overflow': 'hidden'}"
            >
              <viewer :initialValue="data.text" :key="data.modified" />
            </div>
            <q-item-label caption lines="1">
              <div class="timestamp">
                <span class="q-mt-xs">{{ lastModified }}</span>
                <q-chip
                  clickable
                  dense
                  square
                  text-color="white"
                  class="solo-tag"
                  @click="$emit('selected', tag)"
                  v-for="(tag, index) in data.tags"
                  :key="`${tag}-${index}`"
                >
                  <template #default>
                    <div class="solo-tag-text">
                      {{ tag }}
                    </div>
                  </template>
                </q-chip>
              </div>
            </q-item-label>
          </q-item-section>

          <q-item-section
            v-if="data.attachments.length"
            :class="$q.screen.gt.sm ? 'col-2' : 'col-4'"
            style="margin-right: -20px"
          >
            <q-img
              :src="data.attachments[0].url"
              spinner-color="accent"
              :style="{'height': $q.screen.gt.sm?'140px':'70px','border-radius': '8px'}"
              spinner-size="48px"
            />
          </q-item-section>
        </q-item>

        <q-card-actions
          v-if="buttonBarVisibility"
          style="opacity: 0.8"
          class="q-pt-none bg-white absolute-bottom"
          vertical
          align="center"
        >
          <div class="row text-center q-mt-md">
            <q-btn dense round flat @click.stop="handleFave()">
              <q-icon>
                <img
                  :src="
                    fave
                      ? '/images/favorited.svg'
                      : '/images/favorite-available.svg'
                  "
                />
              </q-icon>
              <q-tooltip
                anchor="bottom middle"
                self="bottom middle"
                :offset="[10, 30]"
              >
                Toggle Favorite
              </q-tooltip>
            </q-btn>
            <q-btn dense round flat @click.stop="showTagManager = true">
              <q-icon>
                <img src="/images/label.svg" />
              </q-icon>
              <q-tooltip
                anchor="bottom middle"
                self="bottom middle"
                :offset="[10, 30]"
              >
                Manage tags
              </q-tooltip>
            </q-btn>
            <q-btn dense round flat @click.stop="downloadNote()">
              <q-icon>
                <img src="/images/download.svg" />
              </q-icon>
              <q-tooltip
                anchor="bottom middle"
                self="bottom middle"
                :offset="[10, 30]"
              >
                Download note
              </q-tooltip>
            </q-btn>
            <q-btn dense round flat @click.stop="showColorManager = true">
              <q-icon>
                <img src="/images/palette.svg" />
              </q-icon>
              <q-tooltip
                anchor="bottom middle"
                self="bottom middle"
                :offset="[10, 30]"
              >
                Change color
              </q-tooltip>
            </q-btn>
            <q-btn dense round flat @click.stop="handleShareNote()">
              <q-icon>
                <img src="/images/share.svg" />
              </q-icon>
              <q-tooltip
                anchor="bottom middle"
                self="bottom middle"
                :offset="[10, 30]"
              >
                Share ...
              </q-tooltip>
            </q-btn>
            <div v-if="note.trash">
              <q-btn dense round flat @click.stop="restoreNote">
                <q-icon color="accent" name="img:/images/restore.svg" />
                <q-tooltip
                  anchor="bottom middle"
                  self="bottom middle"
                  :offset="[10, 30]"
                >
                  Restore from archive
                </q-tooltip>
              </q-btn>
              <q-btn dense round flat @click.stop="permanentlyDeleteNote">
                <q-icon color="accent" name="img:/images/delete_forever.svg" />
                <q-tooltip
                  anchor="bottom middle"
                  self="bottom middle"
                  :offset="[10, 30]"
                >
                  Permanently delete ...
                </q-tooltip>
              </q-btn>
            </div>
            <q-btn dense round flat @click.stop="archiveNote" v-else>
              <q-icon color="accent" name="img:/images/trash.svg" />
              <q-tooltip
                anchor="bottom middle"
                self="bottom middle"
                :offset="[10, 30]"
              >
                Archive note
              </q-tooltip>
            </q-btn>
          </div>
        </q-card-actions>
      </q-card-section>
    </q-card>
    <q-dialog v-model="showTagManager">
      <q-card flat class="boom-card">
        <TagEditor :note="this.data" @update-note="handleUpdates" />
        <q-card-actions align="right">
          <q-btn
            color="accent"
            no-caps
            outline
            label="Done"
            class="q-mr-sm q-ml-lg"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showColorManager">
      <q-card flat class="boom-card">
        <q-toolbar class="bg-transparent">
          <q-icon round dense name="img:/images/color-wheel.jpg" />
          <q-toolbar-title>Select a color</q-toolbar-title>
        </q-toolbar>
        <SelectColor :color="this.data.color" @update-note="handleUpdates" />
        <q-card-actions align="right">
          <q-btn
            color="accent"
            no-caps
            outline
            label="Done"
            class="q-mr-sm q-ml-lg"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="showEditor"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card :class="$q.dark.isActive ? 'toastui-editor-dark' : ''">
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
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

export default {
  name: "Note",
  components: {
    // ListTags: () => import("components/ListTags"),
    // TagManager: () => import("components/TagManager"),
    // ButtonBar: () => import("components/ButtonBar.vue"),
    SelectColor: () => import("components/SelectColor"),
    TagEditor: () => import("components/TagEditor.vue"),
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
    ...mapState("app", ["noteColors", "mode"]),
    hasImage() {
      return this.data.attachments.length > 0;
    },
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
      // return timeago.format(this.data.modified);
      return new Date(this.data.modified).toLocaleString();
    },
  },
  methods: {
    ...mapActions("app", ["updateNote", "deleteNote"]),
    async handleUpdates(updates) {
      this.contentKey = `${updates.id}-${Date.now()}`;
      const notestatus = await this.updateNote({
        id: this.data.id,
        updates: updates,
      });
      this.note = Object.assign({}, this.note, updates);
    },
    restoreNote() {
      const payload = {
        id: this.data.id,
        updates: {
          trash: false,
          modified: Date.now(),
        },
      };
      this.handleUpdates(payload);
    },
    archiveNote() {
      const payload = {
        id: this.data.id,
        updates: {
          trash: true,
          modified: Date.now(),
        },
      };
      this.handleUpdates(payload);
    },
    async permanentlyDeleteNote() {
      await this.deleteNote(this.note.id);
    },
    handleMouseOver() {
      this.buttonBarVisibility = true;
    },
    downloadNote() {
      alert("implement download note");
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

.boom-card:hover,
.boom-card:focus-within {
  transition: all 0.2s ease-in-out;
  transform: scale(103%);
}
</style>
