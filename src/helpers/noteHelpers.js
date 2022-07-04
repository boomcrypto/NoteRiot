import { mapState, mapActions } from "vuex";
// eslint-disable-next-line no-undef
// const uuidv4 = require("uuid/v4");
import striptags from "striptags";
import { date } from "quasar";

export const noteHelpers = {
  data() {
    return {
      note: {},
      buttonBarVisibility: "none",
      striptags: striptags,
    };
  },
  computed: {
    ...mapState(["notes", "tags"]),
  },
  created() {},
  methods: {
    ...mapActions({
      updateNote: "notes/updateNote",
    }),
    attachmentUrl(attach) {
      if (
        attach.type === "jpg" ||
        attach.type === "png" ||
        attach.type === "jpeg"
      ) {
        return attach.url;
      } else {
        return "/img/note.svg";
      }
    },
    handleEditNote() {
      console.log("editing note: ", this.note);
      this.$router.push(`/edit/${this.id}`);
    },
    ffs(time) {
      return date.formatDate(time, "MMM D @ hh:mm a");
    },
    preview(text) {
      return striptags(text, [], "\n").substring(0, 360);
    },
  },
};
