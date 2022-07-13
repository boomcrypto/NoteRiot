<template>
  <q-card flat class="my-card">
    <!-- <q-toolbar class="bg-transparent text-dark">
      <q-btn flat round dense icon="arrow_back" @click="handleClose" />
      <q-space />
    </q-toolbar> -->
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
          input-style="color: grey; font-weight: bold"
        >
        </q-input>
      </q-toolbar-title>
      <q-space />
      <div class="text-caption text-grey">
        {{ savingMessage }}
      </div>
      <q-btn
        color="accent"
        no-caps
        outline
        label="Done"
        class="q-mr-sm q-ml-lg"
        @click="handleClose"
      />
    </q-toolbar>

    <q-card-section :class="$q.dark.isActive?'toastui-editor-dark':''">
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
