import { mapState } from "vuex";

export const exportData = {
  computed: {
    ...mapState({
      notes: "notes/notes",
      user: "app/user",
    }),
  },
  methods: {
    downloadAll() {
      let fileexport = "<html><head></head><body>";
      /* eslint-disable no-unused-vars */
      console.log("export these notes: ", this.notes);
      let tagExport = "";
      let shareExport = "";
      let i = 0;
      let name = "";
      const self = this;
      this.notes.forEach(function (note) {
        if (!note.isArchived) {
          fileexport += "title: " + note.headline + "  </br>";
          fileexport += "date:";
          if (note.created) {
            fileexport += " " + new Date(note.created).toISOString();
          }
          fileexport += "  <br />";
          fileexport += "lastmod:";
          if (note.modified) {
            fileexport += " " + new Date(note.modified).toISOString();
          }
          fileexport += "  <br/>";
          fileexport += "author: " + note.createdBy + "  <br />";
          fileexport += "last modified by: " + this.modifiedBy + " <br />";
          fileexport += "category: ";
          if (note.keywords.length > 0) {
            for (i = 0; i < note.keywords.length; i++) {
              tagExport += note.keywords[i].label + ", ";
            }
            tagExport = tagExport.substring(0, tagExport.length - 2);
            fileexport += tagExport + "  <br/>";
          } else {
            fileexport += " <br />";
          }
          fileexport += "favorite: " + note.isFavorite + "  <br />";
          fileexport += "<br /><p>";
          fileexport += note.text;
          fileexport += "</p><hr />";
          tagExport = "";
          shareExport = "";
        }
      });
      fileexport += "</body></html>";
      // eslint-disable-next-line no-undef
      const FileSaver = require("file-saver");
      let blob = new Blob([fileexport], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "NoteRiot Notes.html");
    },
    downloadNote(note) {
      let fileexport = "<html><head></head><body>";
      /* eslint-disable no-unused-vars */
      let tagExport = "";
      let shareExport = "";
      let i = 0;
      const self = this;
      if (!this.note.headline) {
        this.note.headline = "Untitled Note";
      }
      fileexport +=
        "title: " + this.note.headline.replace(/#/g, "") + "  </br>";
      fileexport += "date:";
      if (this.note.created) {
        fileexport += " " + new Date(this.note.created).toISOString();
      }
      fileexport += "  <br />";
      fileexport +=
        "created: " + new Date(this.note.created).toISOString() + " <br />";
      fileexport += "lastmod:";
      if (this.note.modified) {
        fileexport += " " + new Date(this.note.modified).toISOString();
      }
      fileexport += "  <br/>";
      fileexport += "author: " + this.note.createdBy + "  <br />";
      fileexport += "last modified by: " + this.modifiedBy + " <br />";
      fileexport += "category: ";
      if (this.note.keywords.length > 0) {
        for (i = 0; i < this.note.keywords.length; i++) {
          tagExport += this.note.keywords[i].label + ", ";
        }
        tagExport = tagExport.substring(0, tagExport.length - 2);
        fileexport += tagExport + "  <br/>";
      } else {
        fileexport += " <br />";
      }
      fileexport += "favorite: " + this.note.isFavorite + "  <br />";
      fileexport += "<br /><p>";
      fileexport += this.note.text;
      fileexport += "</p>";
      fileexport += "</body></html>";
      // eslint-disable-next-line no-undef
      const FileSaver = require("file-saver");
      let blob = new Blob([fileexport], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(
        blob,
        `${this.note.headline}-${new Date().toISOString()}.html`
      );
    },
  },
};

export default exportData;
