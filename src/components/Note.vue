<template>
  <div>
    <q-card
      flat
      class="boom-card note-list-item relative-position"
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
      <q-toolbar class="bg-transparent">
        <div class="column">
          <div class="note-title col row nowrap">
            {{ data.title }}
            <q-space />
            <q-btn
              dense
              round
              flat
              @click.stop
              :icon="
                fave
                  ? 'img:/images/favorited.svg'
                  : 'img:/images/favorite-available.svg'
              "
            />
            <q-btn dense round flat icon="more_vert" @click.stop>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>New tab</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>New incognito tab</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div class="col timestamp">
            {{ lastModified }}
          </div>
        </div>
      </q-toolbar>
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
      <!-- <q-inner-loading :showing="buttonBarVisibility">
        <div class="row text-center q-mt-md">
          <q-btn-group>
            <q-btn
              dense
              round
              flat
              @click.stop
              :icon="
                fave
                  ? 'img:/images/favorited.svg'
                  : 'img:/images/favorite-available.svg'
              "
            />
            <q-btn dense round flat @click.stop icon="img:/images/label.svg" />
            <q-btn
              dense
              round
              flat
              @click.stop
              icon="img:/images/download.svg"
            />
            <q-btn dense round flat @click.stop icon="img:/images/palette.svg">
              <q-menu @hover="buttonBarVisibility">
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>New tab</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>New incognito tab</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>

            <q-btn dense round flat @click.stop icon="img:/images/share.svg" />
            <q-btn
              dense
              round
              flat
              @click.stop
              icon="img:/images/restore.svg"
            />
          </q-btn-group>
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
          <q-btn dense round flat @click.stop="restoreNote()" v-if="note.trash">
            <q-icon color="accent">
              <img src="/images/restore.svg" />
            </q-icon>
            <q-tooltip
              anchor="bottom middle"
              self="bottom middle"
              :offset="[10, 30]"
            >
              Restore from archive
            </q-tooltip>
          </q-btn>
        </div>
        <q-card-section class="absolute-bottom row q-gutter-sm">
          <q-chip
            clickable
            dense
            square
            text-color="white"
            class="solo-tag"
            color="primary"
            @click="$emit('selected', tag)"
            v-for="(tag, index) in currentTags"
            :key="`${tag}-${index}`"
          >
            <template #default>
              <div class="solo-tag-text">
                {{ tag }}
              </div>
            </template>
          </q-chip>
        </q-card-section>
      </q-inner-loading> -->
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
.note-bg-hover {
  background-color: rgba(192, 121, 186, 0.1) !important;
}
.note-title {
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4a4a4a;
}
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
.boom-card:hover,
.boom-card:focus-within {
  transition: all 0.2s ease-in-out;
  transform: scale(105%);
}
</style>
