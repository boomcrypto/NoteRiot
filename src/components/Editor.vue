<template>
  <q-layout view="Lhh lpR fff" container class="bg-white">
    <q-page-container>
      <q-card flat class="my-card">
        <q-toolbar class="bg-transparent row q-pt-md">
          <q-toolbar-title class="col-10">
            <q-input
              autogrow
              borderless
              v-model="currentTitle"
              type="text"
              :input-class="currentTitle.length < 50 ? 'text-h3' : 'text-h5'"
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
            :initialValue="data.text"
            :options="editorOptions"
            :previewStyle="previewStyle"
            :initialEditType="initialEditType"
            style="width: 100%; border: 1px solid #9c27b0 !important"
            :style="{ height: editorHeight }"
            @change="onContentChange"
          />
        </q-card-section>
      </q-card>
    </q-page-container>
    <q-drawer side="right" v-model="showSidebar" bordered :width="300">
      <q-toolbar class="bg-transparent row q-pt-lg q-mb-md">
        <q-toolbar-title> Actions </q-toolbar-title>
      </q-toolbar>
      <q-scroll-area class="fit q-pa-sm">
        <q-card-actions align="center">
          <q-btn
            outline
            label="Toggle Favorite"
            :icon="
              data.fave
                ? 'img:/images/favorited.svg'
                : 'img:/images/favorite-available.svg'
            "
          />
          <q-btn outline label="Delete" />
          <q-btn outline class="q-mt-sm" label="Download" />
          <q-btn
            color="accent"
            no-caps
            outline
            label="Mint as NFT"
            class="q-mr-sm q-mt-sm q-ml-lg"
            @click="handleMintNote"
          />
          <q-btn
            color="accent"
            no-caps
            outline
            label="Sign & Publish"
            class="q-mr-sm q-mt-sm q-ml-lg"
            @click="handleSignNote"
          />
        </q-card-actions>
        Note Color
        <q-card-section>
          <SelectColor :data="data" />
        </q-card-section>
        Attachments
        <q-card-section
          class="attachment-previews q-px-none"
          v-if="data.attachments"
        >
          <div
            class="media-thumb-unique"
            v-for="(attachment, index) in data.attachments"
            :key="`${data.id}-${index}`"
            :style="`backgroundImage: url('${attachment.url}')`"
          ></div>
          <q-btn
            round
            unelevated
            size="lg"
            icon="img:/images/create-new.svg"
            @click="handleAddAttachment"
          />
        </q-card-section>
        Share with ...
        <q-card-section>
          <q-input v-model="text" type="text" label="Share with ..." />
        </q-card-section>
        Select Tags ...
        <q-card-section>
          <TagEditor :note="data" />
        </q-card-section>
      </q-scroll-area>
    </q-drawer>
  </q-layout>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { Editor } from "@toast-ui/vue-editor";
import { mapActions, mapState } from "vuex";
import { debounce } from "quasar";
import Note from "src/models/Note";

export default {
  name: "EditorComponent",
  components: {
    editor: Editor,
    TagEditor: () => import("components/TagEditor.vue"),
    SelectColor: () => import("components/SelectColor.vue"),
  },
  props: {
    data: {
      type: Object,
      default: () => new Note(),
    },
  },
  data() {
    return {
      initialEditType: "markdown",
      currentTitle: this.data.title,
      currentContent: this.data.text,
      showSidebar: true,
      previewStyle: "tab",
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
    };
  },
  created() {
    this.onContentChange = debounce(this.onContentChange, 1000, {
      maxWait: 3000,
    });
  },
  computed: {
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
    handleAddAttachment() {
      alert("add attachment here");
    },
    async saveNote() {
      this.saving = true;
      const mdContent = this.$refs.noteEditor.invoke("getMarkdown");
      // const htmlContent = this.$refs.noteEditor.invoke("getHTML");
      const now = Date.now();

      let payload = {
        id: this.data.id,
        updates: {
          title: this.currentTitle,
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
      if (this.currentTitle !== this.data.title || content !== this.data.text) {
        console.log("changes found");
        await this.saveNote();
      } else {
        console.log("no changes");
      }
      this.$emit("closeEditor");
    },
  },
};
</script>
