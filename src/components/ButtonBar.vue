<template>
  <q-toolbar>
    <q-btn dense round flat @click.stop="handleFave()">
      <q-icon>
        <img
          :src="
            note.fave
              ? '/images/favorited.svg'
              : '/images/favorite-available.svg'
          "
        />
      </q-icon>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Toggle Favorite
      </q-tooltip>
    </q-btn>
    <q-btn dense round flat @click.stop="handleOpenTagEditor()">
      <q-icon>
        <img src="/images/label.svg" />
      </q-icon>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Manage tags
      </q-tooltip>
    </q-btn>
    <q-btn dense round flat @click.stop="downloadNote()">
      <q-icon>
        <img src="/images/download.svg" />
      </q-icon>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Download note
      </q-tooltip>
    </q-btn>
    <q-btn dense round flat @click.stop="showColor = !showColor">
      <q-icon>
        <img src="/images/palette.svg" />
      </q-icon>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Change color
      </q-tooltip>
    </q-btn>
    <q-btn dense round flat @click.stop="handleShareNote()">
      <q-icon>
        <img src="/images/share.svg" />
      </q-icon>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Share ...
      </q-tooltip>
    </q-btn>
    <q-btn dense round flat @click.stop="restoreNote()" v-if="note.trash">
      <q-icon color="accent">
        <img src="/images/restore.svg" />
      </q-icon>
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        Restore from archive
      </q-tooltip>
    </q-btn>
    <q-dialog v-model="showColor">
      <q-card>
        <q-card-section> Select a color ... </q-card-section>
        <q-card-actions>
          <div class="row wrap">
            <q-icon
              size="48px"
              class="col-2"
              :color="color"
              name="circle"
              @click.stop="setColor(color)"
              v-close-popup
              v-for="color in noteColors"
              :key="color"
            />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showTagEditor">
      <TagManager />
    </q-dialog>
  </q-toolbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonBar",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  components: {
    TagManager: () => import("components/TagManager.vue"),
  },
  data() {
    return {
      showColor: false,
      showTagEditor: false,
    };
  },
  computed: {
    ...mapGetters("app", ["noteColors"]),
  },
  methods: {
    handleFave() {
      this.$store.dispatch("faveNote", this.note);
    },
    handleOpenTagEditor() {
      this.$store.dispatch("app/openTagEditor", this.note);
    },
    handleShareNote() {
      this.$store.dispatch("shareNote", this.note);
    },
    downloadNote() {
      this.$store.dispatch("downloadNote", this.note);
    },
    restoreNote() {
      this.$store.dispatch("restoreNote", this.note);
    },
  },
};
</script>
