<template>
  <q-card flat>
    <div class="bottom-border-99">
      <q-input
        clearable
        type="text"
        placeholder="Type a new tag name here"
        v-model="newTagName"
        tag="div"
        style="padding: 4px; padding-left: 16px"
        class="col"
        @clear="newTagName = ''"
        @keyup.enter="createTag"
      >
        <template #after v-if="newTagName.length > 0">
          <q-btn
            outline
            no-caps
            class="create-tag-3"
            @click="createTag"
            color="accent"
            text-color="white"
            label="Add"
          />
        </template>
      </q-input>
    </div>
    <q-card-section>
      <div class="available-tags">
        <div class="all-caps-action">CURRENT TAGS</div>
        <div class="available-tag-list">
          <template v-for="tag in updatedTags">
            <q-chip
              square
              clickable
              class="tag-orchid solo-tag supercooltag"
              icon="close"
              text-color="white"
              :label="tag"
              @click="removeTagFromNote(tag)"
              :key="`currentTags-${tag}`"
            >
            </q-chip>
          </template>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="available-tags">
        <div class="all-caps-action">AVAILABLE TAGS</div>
        <div class="available-tag-list">
          <template v-for="tag in allTags">
            <q-chip
              :ref="`availableTag${tag}`"
              square
              clickable
              :disabled="updatedTags.includes(tag)"
              text-color="white"
              class="tag-orchid solo-tag supercooltag"
              icon="add"
              :label="tag"
              @click="addTag(tag)"
              :key="availableTagKey(tag)"
            />
          </template>
        </div>
      </div>
    </q-card-section>
    <q-card-actions vertical align="center">
      <q-card-actions align="right">
        <q-btn
          unelevated
          outline
          label="Done"
          color="secondary"
          class="save"
          @click="updateTags"
        />
      </q-card-actions>
    </q-card-actions>
  </q-card>
</template>
<script>
import M from "minimatch";
import { mapGetters } from "vuex";
var isEqual = require("lodash.isequal");

export default {
  name: "TagEditor",
  props: {
    currentTags: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {
      newTagName: "",
      newTags: [],
      menu: false,
      icons: [
        "bx-body",
        "bx-desktop",
        "bxs-book",
        "bxs-conversation",
        "bxs-home",
        "bxs-music",
      ],
    };
  },
  computed: {
    ...mapGetters("app", ["allTags", "noteColors"]),
    updatedTags() {
      return this.currentTags.concat(this.newTags);
    },
    showCurrentTags() {
      if (tags.length) return true;
      else return false;
    },
  },
  mounted() {},
  methods: {
    availableTagKey(tag) {
      return `availableTags-${tag}-${Date.now()}`;
    },
    updateTags() {
      console.log("updatetags called");
      if (isEqual(this.currentTags, this.tags)) {
        console.log("no changes found, close ...");
        this.$emit("close");
      } else {
        this.$emit("update", { tags: this.currentTags });
      }
    },
    removeTagFromNote(del) {
      console.log("removing tag: ", del);
      let noteTags = this.tags.slice();
      noteTags.splice(noteTags.indexOf(del), 1);
      const payload = {
        updates: { tags: noteTags },
      };
      this.$emit("update-note", payload);
    },
    async addTag(tag) {
      this.newTags.push(tag);
    },
    async createTag() {
      // add tag
      const lowerCaseNewTag = this.newTagName.toLowerCase();
      let validTag = true;
      this.noteColors.forEach((color) => {
        if (lowerCaseNewTag === color.toLowerCase()) {
          validTag = false;
        }
      });
      this.tags.forEach((tag) => {
        if (lowerCaseNewTag === tag.toLowerCase()) {
          validTag = false;
        }
      });
      this.currentTags.forEach((tag) => {
        if (lowerCaseNewTag === tag.toLowerCase()) {
          validTag = false;
        }
      });
      if (validTag) {
        this.newTags.push(this.newTagName);
        this.newTagName = "";
      } else {
        this.$q.notify({
          color: "negative",
          textColor: "white",
          message: `Invalid tag name: ${this.newTagName}`,
        });
      }
    },
  },
};
</script>

<style scoped>
*:focus {
  outline: none;
}
.q-card__section {
  padding: 0px 8px 8px 8px;
}
.q-field__inner {
  padding: 0px;
}
.q-field__prepend {
  padding-right: 4px;
}

.solo-tag {
  margin-top: 8px;
  margin-bottom: 0px;
  padding: 5px;
}
</style>
