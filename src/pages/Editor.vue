<template>
  <q-page padding>
    <q-card flat class="my-card">
      <q-toolbar class="bg-transparent row q-pt-md">
        <q-toolbar-title class="col-10">
          <q-input
            autogrow
            borderless
            v-model="activeTitle"
            type="text"
            :input-class="
              activeTitle.length < 50 ? 'text-h3 ellipsis' : 'text-h5 ellipsis'
            "
            maxlength="80"
            placeholder="Untitled note"
            :input-style="
              $q.dark.isActive
                ? { color: 'white', 'font-weight': 'bold' }
                : { color: 'grey', 'font-weight': 'bold' }
            "
          />
        </q-toolbar-title>
        <q-space />
        <div class="text-caption text-grey q-mr-sm">
          {{ savingMessage }}
        </div>
        <q-btn
          color="accent"
          no-caps
          outline
          label="Done"
          class="q-mr-md"
          @click="handleClose"
        />
        <q-btn flat round icon="menu" @click="showSidebar = !showSidebar" />
      </q-toolbar>

      <q-card-section :class="$q.dark.isActive ? 'toastui-editor-dark' : ''">
        <editor
          ref="noteEditor"
          :initialValue="currentNote.text"
          :options="editorOptions"
          :previewStyle="previewStyle"
          :initialEditType="initialEditType"
          style="width: 100%; border: 1px solid #9c27b0 !important"
          :style="{ height: editorHeight }"
          @change="onContentChange"
        />
      </q-card-section>
    </q-card>
    <q-drawer side="right" v-model="showSidebar" bordered :width="300">
      <q-toolbar-title>Actions</q-toolbar-title>
      <q-card-section class="row justify-around q-px-none">
        <div class="column items-center">
          <q-avatar size="32px" @click="handleToggleFave">
            <img
              :src="
                activeFave
                  ? '/images/favorited.svg'
                  : '/images/favorite-available.svg'
              "
            />
          </q-avatar>
          Favorite
        </div>
        <div class="column items-center">
          <q-avatar size="32px" @click="handleToggleArchive">
            <img
              :src="
                currentNote.trash ? '/images/restore.svg' : '/images/trash.svg'
              "
            />
          </q-avatar>
          Archive
        </div>
        <div class="column items-center">
          <q-avatar size="32px" @click="handleDownload">
            <img src="/images/download.svg" />
          </q-avatar>
          Download
        </div>
        <!-- <q-btn
            color="accent"
            no-caps
            round
            flat
            icon="img:/images/mint.svg"
            @click="handleMintNote"
          >
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Mint as NFT</strong>
            </q-tooltip>
          </q-btn>
          <q-btn
            color="accent"
            round
            flat
            icon="img:/images/sign.svg"
            @click="handleSignNote"
          >
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Sign</strong>
            </q-tooltip>
          </q-btn>
          <q-btn
            color="accent"
            round
            flat
            icon="img:/images/share.svg"
            @click="handleShare"
          >
            <q-tooltip
              anchor="bottom middle"
              self="top middle"
              :offset="[10, 10]"
            >
              <strong>Share</strong>
            </q-tooltip>
          </q-btn> -->
      </q-card-section>
      <q-toolbar-title class="q-pl-none">Colors</q-toolbar-title>
      <q-card-section class="q-px-none">
        <SelectColor :color="currentNote.color" @update-note="handleUpdates" />
      </q-card-section>
      <q-toolbar-title class="q-pl-none">Tags</q-toolbar-title>
      <q-card-section class="q-px-none">
        <TagEditor :tags="currentNote.tags" />
      </q-card-section>
      <!-- Attachments
        <q-card-section
          class="attachment-previews q-px-none"
          v-if="currentNote.attachments"
        >
          <div
            class="media-thumb-unique"
            v-for="(attachment, index) in currentNote.attachments"
            :key="`${currentNote.id}-${index}`"
            :style="`backgroundImage: url('${attachment.url}')`"
          ></div>
          <q-btn
            round
            unelevated
            size="lg"
            icon="img:/images/create-new.svg"
            @click="handleAddAttachment"
          />
        </q-card-section> -->
      <!-- <q-toolbar-title>Share</q-toolbar-title>
        <q-card-section>
          <q-input v-model="shareWith" type="text" label="Share with ..." />
        </q-card-section> -->
    </q-drawer>
  </q-page>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/vue-editor";
import { mapActions, mapState } from "vuex";
import { debounce } from "quasar";
import Note from "src/models/Note";
import { exportFile } from "quasar";

export default {
  name: "EditorPage",
  components: {
    editor: Editor,
    TagEditor: () => import("components/TagEditor.vue"),
    SelectColor: () => import("components/SelectColor.vue"),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activeColor: "",
      activeContent: "",
      activeTitle: "",
      activeTags: [],
      activeFave: false,
      activeArchive: false,
      initialEditType: "markdown",
      showSidebar: true,
      previewStyle: "tab",
      shareWith: "",
      editorOptions: {
        language: "en-US",
        useCommandShortcut: true,
        usageStatistics: false,
        hideModeSwitch: false,
        toolbarItems: [
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ],
      },
      saving: false,
      editorHeight: "200px",
      currentNote: {},
    };
  },
  created() {
    this.currentNote = this.notes.find((note) => note.id === this.id);
    this.activeTitle = this.currentNote.title;
    this.activeContent = this.currentNote.text;
    this.activeColor = this.currentNote.color;
    this.activeTags = this.currentNote.tags;
    this.activeFave = this.currentNote.fave;
    this.activeArchive = this.currentNote.trash;
    this.onContentChange = debounce(this.onContentChange, 1000, {
      maxWait: 3000,
    });
  },
  computed: {
    ...mapState("app", ["notes"]),
    savingMessage() {
      if (this.saving) {
        return "Saving...";
      } else {
        if (this.content === "") {
          return "No changes";
        } else {
          return "Changes saved";
        }
      }
    },
  },
  mounted() {
    this.editorHeight = `${this.$q.screen.height - 154}px`;
  },
  methods: {
    ...mapActions("app", ["updateNote"]),
    handleUpdates(updates) {
      this.updateNote({
        id: this.currentNote.id,
        updates: updates,
      });
    },
    handleToggleFave() {
      this.activeFave = !this.activeFave;
    },
    handleToggleArchive() {
      this.activeArchive = !this.activeArchive;
    },
    handleDownload() {
      const status = exportFile(`${this.activeTitle}.md`, this.activeContent);
      let currentMsg = "Downloading ...";
      let currentColor = "accent";
      this.$q.notify({
        position: "bottom",
        timeout: 2500,
        textColor: "white",
        color: currentColor,
        message: currentMsg,
        actions: [{ icon: "close", color: "white" }],
      });

      if (status === true) {
        currentMsg = "Download complete.";
      } else {
        // browser denied it
        currentMsg = "Download failed.";
        currentColor = "red";
      }
    },
    handleMintNote() {
      this.$q.notify({
        color: "positive",
        textColor: "white",
        message: "Coming Soon...",
      });
    },
    handleSignNote() {
      this.$q.notify({
        color: "positive",
        textColor: "white",
        message: "Coming Soon...",
      });
    },
    handleAddAttachment() {
      this.$q.notify({
        color: "positive",
        textColor: "white",
        message: "Coming Soon...",
      });
    },
    async saveNote() {
      this.saving = true;
      const mdContent = this.$refs.noteEditor.invoke("getMarkdown");
      // const htmlContent = this.$refs.noteEditor.invoke("getHTML");
      const now = Date.now();

      let payload = {
        id: this.currentNote.id,
        updates: {
          title: this.activeTitle,
          modified: now,
          text: mdContent,
        },
      };
      console.log("updating note: ", payload);
      this.$emit("update-note", payload);
      // await this.updateNote(payload);
      this.saving = false;
    },
    async onContentChange(event) {
      await this.saveNote();
    },
    async handleClose() {
      console.log("unmounting editor");
      const content = this.$refs.noteEditor.invoke("getMarkdown");
      console.log("looking for changes");
      if (
        this.activeTitle !== this.currentNote.title ||
        this.activeContent !== this.currentNote.text ||
        this.activeColor !== this.currentNote.color ||
        this.activeTags !== this.currentNote.tags ||
        this.activeFave !== this.currentNote.fave ||
        this.activeArchive !== this.currentNote.trash
      ) {
        console.log("changes found");
        await this.saveNote();
      } else {
        console.log("no changes");
      }
      this.$router.go(-1);
    },
  },
};
</script>
