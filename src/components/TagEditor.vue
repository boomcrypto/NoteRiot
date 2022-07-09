<template>
  <q-card
    style="width: 400px; max-width: 80%; height: auto; padding: 0px"
    class="boom-card"
  >
    <div class="bottom-border-99">
      <q-card-actions style="padding: 0px">
        <q-input
          borderless
          clearable
          type="text"
          placeholder="Enter a new tag name"
          v-model="newTagName"
          tag="div"
          style="padding: 4px; padding-left: 16px"
          class="col"
          @clear="newTagName = ''"
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
      </q-card-actions>
    </div>
    <q-card-section style="max-height: 150px; padding: 0px" class="scroll">
      <div class="available-tags" v-if="note.tags.length > 0">
        <div class="all-caps-action">CURRENT TAGS</div>
        <div class="available-tag-list">
          <template v-for="tag in note.tags">
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
    <q-card-section style="max-height: 150px; padding: 0px" class="scroll">
      <div class="available-tags">
        <div class="all-caps-action">AVAILABLE TAGS</div>
        <div class="available-tag-list">
          <template v-for="tag in tags">
            <q-chip
              square
              clickable
              :disabled="note.tags.includes(tag)"
              text-color="white"
              class="tag-orchid solo-tag supercooltag"
              icon="add"
              :label="tag"
              @click="addTag(tag)"
              :key="`availableTags-${tag}`"
            />
          </template>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Done" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TagEditor",
  props: ["note"],
  components: {},
  data() {
    return {
      newTagColor: "",
      newTagName: "",
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
    ...mapGetters("app", ["tags"]),
    showCurrentTags() {
      if (note.tags.length) return true;
      else return false;
    },
  },
  methods: {
    removeTagFromNote(del) {
      console.log("removing tag: ", del);
      let noteTags = this.note.tags.slice();
      noteTags.splice(noteTags.indexOf(del), 1);
      const payload = {
        id: this.note.id,
        updates: { tags: noteTags },
      };
      this.$emit("update-note", payload);
    },
    async addTag(tag) {
      const payload = {
        id: this.note.id,
        updates: {
          tags: [...this.note.tags, tag],
        },
      };
      this.$emit("update-note", payload);
    },
    async createTag() {
      // add tag
      if (this.tags.includes(this.newTagName)) {
        alert("duplicate tag name");
        return;
      } else {
        const taglist = this.note.tags.concat(this.newTagName);
        const payload = {
          id: this.note.id,
          updates: {
            tags: taglist,
          },
        };
        this.$emit("update-note", payload);
        this.newTagName = "";
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
