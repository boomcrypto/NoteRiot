<template>
  <q-item
    :class="
      'col-xs-12 col-sm-12 col-md-12 col-lg-12 full-width' +
      (button_bar_visibility ? ' bg-pink-1' : '')
    "
  >
    <NoteActions
      class="grid-icons absolute-top-right"
      :note="note"
      style="z-index: 99"
      :style="buttonBarVisibility ? 'display: flex' : 'display: none'"
      @update-note="handleUpdates"
    />

    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium text-body1">{{ displayTitle }}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <div class="timestamp">
          <span class="q-mt-md">{{ lastModified }}</span>
          <span
            :class="
              $q.dark.isActive
                ? 'toastui-editor-contents-dark q-ml-sm'
                : 'q-ml-sm'
            "
            :style="{
              'max-height': $q.screen.gt.sm ? '30px' : '30px',
              overflow: 'hidden',
            }"
          >
            <viewer :initialValue="data.text" :key="data.modified" />
          </span>
        </div>
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon v-if="fave">
        <img
          :src="
            fave ? '/images/favorited.svg' : '/images/favorite-available.svg'
          "
        />
      </q-icon>
    </q-item-section>
  </q-item>
</template>

<script>
import { Viewer } from "@toast-ui/vue-editor";

export default {
  name: "condensed_list_item",
  components: {
    Viewer,
  },
  props: [
    "displayTitle",
    "lastModified",
    "button_bar_visibility",
    "data",
    "fave",
    "note",
  ],
  methods: {
    handleFave() {
      this.$emit("handle_fave");
    },
    downloadNote() {
      this.$emit("download_note");
    },
    handleShareNote() {
      this.emit("handle_share_note");
    },
    archiveNote() {
      this.emit("archive_note");
    },
    permanentlyDeleteNote() {
      this.emit("permanently_delete_note");
    },
    restoreNote() {
      this.emit("restore_note");
    },
    change_tag_manager() {
      this.$emit("show_tag_manager");
    },
    showColorManager() {
      this.$emit("show_color_manager");
    },
  },
};
</script>

<style scoped></style>
