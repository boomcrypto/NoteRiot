const FileSaver = require("file-saver");

export function downloadNote(note) {
  let fileexport = "----\n";
  /* eslint-disable no-unused-vars */
  let tagExport = "";

  if (!note.title) {
    note.title = "Untitled Note";
  }
  fileexport += "title: " + note.title.replace(/#/g, "") + "\n";
  fileexport += "date:";
  if (note.created) {
    fileexport += " " + new Date(note.created).toISOString();
  }
  fileexport += "  \n";
  fileexport += "created: " + new Date(note.created).toISOString() + " \n ";
  fileexport += "lastmod:";
  if (note.modified) {
    fileexport += " " + new Date(note.modified).toISOString();
  }
  fileexport += "  \n";
  fileexport += "author: " + note.createdBy + "  \n";
  fileexport += "tags: ";
  if (note.tags.length > 0) {
    for (let i = 0; i < note.tags.length; i++) {
      tagExport += note.tags[i];
      if (i !== note.tags.length - 1) {
        tagExport += ", ";
      }
    }
    tagExport = tagExport.substring(0, tagExport.length - 2);
    fileexport += tagExport + "  \n";
  } else {
    fileexport += " \n";
  }
  fileexport += "favorite: " + note.fave + "  \n";
  fileexport += "\n\n";
  fileexport += note.text;
  fileexport += "\n\n";
  fileexport += "----\n";

  let blob = new Blob([fileexport], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, `${note.title}-${new Date().toISOString()}.md`);
}
