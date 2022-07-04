// import { mapGetters } from "vuex";
// eslint-disable-next-line no-undef
const uuidv4 = require("uuid/v4")

export const exportData = {
  methods: {
    loadDocumentByURL(url) {
      // read a shared file by url
      this.$axios.get(url).then((res) => {
        this.sharedNote = this.$userSession.decryptContent(
          JSON.stringify(res.data)
        )
        this.sharedNote = JSON.parse(this.sharedNote)
        this.showPreview = true
      })
    },
    loadDocumentByID(options = {}) {
      // read a shared file via blockstack id
      this.$userSession
        .getFile(options.filepath, { username: options.id, decrypt: false })
        .then((encryptedDocument) => {
          if (encryptedDocument === null) {
            return { data: "error" }
          } else {
            const decryptedDocument = this.$userSession.decryptContent(
              encryptedDocument
            )
            return decryptedDocument
          }
        })
        .catch((err) => {
          return { data: "error: ", err }
        })
    },
    // assumes "key.json" is saved in the root appUrl
    getUserPublicKey(username) {
      const options = {
        decrypt: false,
        username,
        zoneFileLookupURL: "https://core.blockstack.org/v1/names",
      }
      storage.getFile("key.json", options).then((file) => {
        if (file === null) {
          return null
        } else {
          const publicKey = JSON.parse(file)
          return publicKey
        }
      })
    },
    shareDocumentByURL(username) {
      let pubKey = this.getUserPublicKey(username)
      const sharedFilename = `shared/${uuidv4()}`
      // let share = new Share({noteId: "1", url: sharedFilename, recipient: username})
      this.$userSession
        .putFile(
          sharedFilename,
          this.$userSession.encryptContent(JSON.stringify(this.note), {
            pubKey,
          }),
          { encrypt: false }
        )
        .then((filenameToShare) => {
          // this updateNote(note, share)
          this.shareURL = filenameToShare
          // this.setShowLoadSharedNote(true);
          //   alert(
          //     `successfully wrote ${filenameToShare} for user ${username}.`
          //  );
        })
    },
  },
  shareDocumentByID(username) {
    // console.log("user selected: ", username);
    const options = {
      decrypt: false,
      username,
      zoneFileLookupURL: "https://core.blockstack.org/v1/names",
    }
    storage.getFile("key.json", options).then((file) => {
      const publicKey = JSON.parse(file)
      const sharedFilename = `shared/${uuidv4()}`
      // let share = new Share({noteId: "1", url: sharedFilename, recipient: username})
      this.$userSession
        .putFile(
          sharedFilename,
          this.$userSession.encryptContent(JSON.stringify(this.note), {
            publicKey,
          }),
          { encrypt: false }
        )
        .then((filenameToShare) => {
          // this updateNote(note, share)
          this.shareURL = filenameToShare
          // this.setShowLoadSharedNote(true);
          //   alert(
          //     `successfully wrote ${filenameToShare} for user ${username}.`
          //  );
        })
    })
  },
}
