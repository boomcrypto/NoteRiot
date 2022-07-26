const FileSaver = require("file-saver");

export function downloadNote(note) {
  let fileexport = "<html><head></head><body>";
  /* eslint-disable no-unused-vars */
  let tagExport = "";
  let shareExport = "";
  let i = 0;
  const self = this;
  if (!note.headline) {
    note.headline = "Untitled Note";
  }
  fileexport += "title: " + note.title.replace(/#/g, "") + "  </br>";
  fileexport += "date:";
  if (note.created) {
    fileexport += " " + new Date(note.created).toISOString();
  }
  fileexport += "  <br />";
  fileexport += "created: " + new Date(note.created).toISOString() + " <br />";
  fileexport += "lastmod:";
  if (note.modified) {
    fileexport += " " + new Date(note.modified).toISOString();
  }
  fileexport += "  <br/>";
  fileexport += "author: " + note.createdBy + "  <br />";
  fileexport += "last modified by: " + note.modifiedBy + " <br />";
  fileexport += "tags: ";
  if (note.tags.length > 0) {
    for (i = 0; i < note.tags.length; i++) {
      tagExport += note.tags[i] + ", ";
    }
    tagExport = tagExport.substring(0, tagExport.length - 2);
    fileexport += tagExport + "  <br/>";
  } else {
    fileexport += " <br />";
  }
  fileexport += "favorite: " + note.fave + "  <br />";
  fileexport += "<br /><p>";
  fileexport += note.text;
  fileexport += "</p>";
  fileexport += "</body></html>";

  let blob = new Blob([fileexport], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, `${note.title}-${new Date().toISOString()}.html`);
}
