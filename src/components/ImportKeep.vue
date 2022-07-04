<template>
  <q-card class="my-card">
    <img src="/img/simon-maage-tXiMrX3Gc-g-unsplash.jpg" />

    <q-card-section>
      <div class="text-h6">Google Keep Import</div>
    </q-card-section>
    <!-- <q-card-section>
      // loading animation goes here
    </q-card-section>-->
    <q-card-section>
      <div id="drop-area">
        <form class="my-form">
          <input
            type="file"
            id="fileElem"
            accept="application/zip, application/x-zip, application/x-zip-compressed"
            @change="handleFile"
          />
          <label class="button" for="fileElem">Select Takeout Zip File</label>
        </form>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { userSession } from "boot/stacks";
import { mapActions } from "vuex";
import Note from "src/models/Note";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line no-undef
const zip = require("jszip");

export default {
  name: "PageImportKeep",
  data() {
    return {
      importedNotes: [],
      fileName: "",
      fileUrl: "",
      zipFile: "",
      el: 0,
      importCounter: 0,
      noteCounter: 0,
      totalNotes: 0,
    };
  },
  computed: {
    value() {
      return (this.importedNotes.length / this.totalNotes) * 100;
    },
  },
  methods: {
    ...mapActions({
      setNotes: "setNotes",
    }),
    handleFile(e) {
      this.$q.loading.show();
      const self = this;
      const file = e.target.files;
      if (file[0] !== undefined) {
        this.parseData(file[0])
          .then((notesArray) => {
            console.log(
              "here is the resultant array from import: ",
              notesArray
            );
            this.totalNotes = notesArray.length;
            for (let j = 0; j < notesArray.length; j++) {
              self.importedNotes.push(notesArray[j]);
              self.importCounter += 1;
            }
          })
          .then(function () {
            self.setNotes(self.importedNotes);
            // self.setSnack(
            //   self.importedNotes.length - self.noteCounter + " notes imported!"
            // );
            // self.$router.push("/list");
          });
      } else {
        console.log("no file found");
        this.fileName = "";
        this.zipFile = "";
        this.fileUrl = "";
      }
      this.$q.loading.hide();
    },
    parseData(zipfile) {
      return new Promise((resolve, reject) => {
        zip.loadAsync(zipfile).then(
          function (zip) {
            let fileList = zip.files;
            fileList = Object.values(fileList);
            const jsonData = [];
            let count = 0;
            let reverseArray = fileList.reverse();
            let exitMarked = false;
            reverseArray.map((dataR, keyR) => {
              if (!exitMarked) {
                const checkFileR = dataR.name.slice(-4);
                if (
                  checkFileR === "html" &&
                  dataR.name !== "Takeout/index.html"
                ) {
                  reverseArray[keyR].exit = true;
                  exitMarked = true;
                }
              }
            });
            fileList = reverseArray.reverse();
            fileList.map((dataL, keyL) => {
              console.log(keyL);
              const checkFile = dataL.name.slice(-4);
              if (checkFile === "html" && dataL.name !== "Takeout/index.html") {
                zip
                  .file(dataL.name)
                  .async("string")
                  .then(function (data) {
                    let importedNote = {
                      tags: [],
                      attachments: [],
                      title: "",
                      text: "",
                      color: "",
                      shares: [],
                      isPinned: false,
                    };
                    // let tag = [];
                    // let attachments = [];
                    // let titleDiv = "";
                    // let contentDiv = "";
                    // let color = "";
                    // let shares = [];
                    // let isPinned = false;
                    // let id = uuidv4();
                    count++;
                    if (data) {
                      console.log("Parsing note ", count);
                      const html = document.createElement("html");
                      html.innerHTML = data;
                      // title
                      titleDiv = html.getElementsByClassName("title")[0];
                      // titleDiv = titleDiv ? titleDiv.innerText : "";
                      importedNote.title = titleDiv.innerText;

                      // isPinned
                      let pinned = html.getElementsByClassName("pinned") || "";
                      if (pinned[0]) {
                        importedNote.isPinned =
                          pinned[0].title === "Note pinned";
                      }

                      // content
                      contentDiv = html.getElementsByClassName("content")[0];
                      // contentDiv = contentDiv ? contentDiv.innerHTML : "";
                      importedNote.text = contentDiv
                        ? contentDiv.innerHTML
                        : "";

                      color = html.getElementsByClassName("note")[0];
                      color = color ? color.classList[1] : "";
                      importedNote.color = color.toLowerCase();
                      // if (color === "RED") {
                      //   color = "red";
                      // } else if (color === "ORANGE") {
                      //   color = "orange";
                      // } else if (color === "YELLOW") {
                      //   color = "yellow";
                      // } else if (color === "GREEN") {
                      //   color = "green";
                      // } else if (color === "TEAL") {
                      //   color = "teal";
                      // } else if (color === "BLUE") {
                      //   color = "blue";
                      // } else if (color === "GRAY") {
                      //   color = "gray";
                      // } else if (color === "CERULEAN") {
                      //   color = "cyan";
                      // } else if (color === "PURPLE") {
                      //   color = "orchid";
                      // } else if (color === "PINK") {
                      //   color = "fuschia";
                      // } else if (color === "BROWN") {
                      //   color = "brown";
                      // } else {
                      //   color = "white";
                      // }

                      // created
                      const heading = html.getElementsByClassName("heading");
                      // heading = heading ? heading[0].innerText : Date.now();
                      importedNote.heading = heading
                        ? heading[0].innerText
                        : Date.now();

                      //tags
                      const labelDiv = html.getElementsByClassName(
                        "label-name"
                      );
                      if (labelDiv.length !== 0) {
                        for (let i = 0; labelDiv.length > i; i++) {
                          importedNote.tags.push({
                            name: labelDiv[i].innerHTML,
                            color: color,
                            tagid: uuidv4(),
                          });
                        }
                      }
                      importedNote.tags.push({
                        name: "Imported",
                        color: color,
                        tagid: uuidv4(),
                      });

                      // attachments
                      const imgAttach = html.getElementsByTagName("img");
                      if (imgAttach.length !== 0) {
                        console.log(
                          imgAttach.length,
                          " images to add to add to note ",
                          count
                        );
                        for (let i = 0; i < imgAttach.length; i++) {
                          let dataURI = imgAttach[i].src;
                          let mimeString = dataURI
                            .split(",")[0]
                            .split(":")[1]
                            .split(";")[0];
                          let ext = mimeString.split("/")[1];
                          if (!ext) {
                            ext = "png";
                          }
                          let imgFileName = `images/${id}-${i}.${ext}`;
                          storage.putFile(imgFileName, dataURI).then(
                            (val) => {
                              console.log(
                                "image ",
                                i + 1,
                                " successfully saved for note ",
                                count,
                                ". Message: ",
                                val
                              );
                              importedNote.attachments.push(imgFileName);
                            },
                            (reason) => {
                              console.log(
                                "image ",
                                i,
                                "note ",
                                count,
                                "error: ",
                                reason
                              );
                            }
                          );
                        }
                      }

                      // shares
                      const sharees = html.getElementsByClassName("sharee");
                      if (sharees.length !== 0) {
                        for (let i = 0; sharees.length > i; i++) {
                          importedNote.shares.push(sharees[i].innerText);
                        }
                      }
                    }

                    let tempObj = {
                      id: id,
                      title: titleDiv || "",
                      text: contentDiv || "",
                      color: color || "NONE",
                      isPinned: isPinned,
                      fave: false,
                      trash: false,
                      tags: tag,
                      attachments: attachments,
                      shares: shares,
                      created: heading,
                      modified: Date.now(),
                    };

                    jsonData.push(tempObj);
                    if (dataL.exit) {
                      resolve(jsonData);
                    }
                  })
                  .catch((err) => {
                    console.log("Error parsing note: ", err);
                  });
              }
            });
          },
          function () {
            console.log("Not a valid zip file");
            reject(new Error("Not a valid zip file"));
          }
        );
      });
    },
  },
};
</script>
<style scoped>
#drop-area {
  border: 2px dashed #ccc;
  border-radius: 20px;
  width: 480px;
  font-family: sans-serif;
  margin: 100px auto;
  padding: 20px;
}
#drop-area.highlight {
  border-color: purple;
}
p {
  margin-top: 0;
}
.my-form {
  margin-bottom: 10px;
}
#gallery {
  margin-top: 10px;
}
#gallery img {
  width: 150px;
  margin-bottom: 10px;
  margin-right: 10px;
  vertical-align: middle;
}
.button {
  display: inline-block;
  padding: 10px;
  background: #ccc;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.button:hover {
  background: #ddd;
}
#fileElem {
  display: none;
}
</style>
