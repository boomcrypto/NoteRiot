<template>
  <q-card flat>
    <q-card-section class="q-gutter-xs">
      <div class="tag-manager-title">Existing Tags</div>
      <q-chip
        v-for="tag in currentTags"
        :key="`current-${tag}`"
        clickable
        dense
        square
        text-color="white"
        class="text-caption solo-tag"
        color="primary"
        @click="handleRemoveTag(tag)"
        icon-right="clear"
      >
        {{ tag }}
      </q-chip>
      <div class="text-center text-grey" v-if="!currentTags.length">
        {{ "\{\{empty\}\}" }}
      </div>
      <q-separator />
    </q-card-section>
    <q-card-section class="q-gutter-xs" v-if="availableTags.length">
      <div class="tag-manager-text">Available tags ...</div>
      <q-chip
        v-for="tag in availableTags"
        :key="`available-${tag}`"
        clickable
        dense
        square
        text-color="white"
        icon-right="add"
        class="text-caption solo-tag"
        color="primary"
        @click="handleAddAvailableTag(tag)"
      >
        {{ tag }}
      </q-chip>
      <q-separator />
    </q-card-section>
    <q-card-section>
      <div class="tag-manager-text">Add a new tag ...</div>
      <q-input
        clearable
        v-model="newTag"
        type="text"
        label="mynewtag"
        class="q-pt-none"
        @keyup.enter="handleAddNewTag"
      >
        <template #after>
          <q-btn flat color="primary" icon="check" @click="handleAddNewTag" />
        </template>
      </q-input>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        no-caps
        flat
        label="Done"
        color="primary"
        class="save"
        v-close-popup
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "TagManager",
  props: {
    currentTags: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      newTag: "",
    };
  },
  computed: {
    ...mapGetters("app", ["tags"]),
    ...mapState("app", ["notes"]),
    // available tags are tags that are not already
    // associated with the current note.
    availableTags() {
      let available = [];
      this.tags.forEach((tag) => {
        console.log("checking for tag: ", tag);
        if (!this.currentTags.includes(tag)) {
          available.push(tag);
        }
      });
      return available;
    },
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["updateNote"]),
    handleAddNewTag() {
      const newTagList = [...this.currentTags, this.newTag];
      const update = {
        tags: newTagList,
      };

      this.updateNote({
        id: this.id,
        updates: update,
      });
      this.newTag = "";
    },
    handleRemoveTag(tag) {
      console.log("removing tag: ", tag);
      const update = {
        tags: this.currentTags.filter((t) => t !== tag),
      };
      console.log("update: ", update);
      this.updateNote({
        id: this.id,
        updates: update,
      });
    },
    handleAddAvailableTag(tag) {
      const tagList = [...this.currentTags, tag];
      const update = {
        tags: tagList,
      };

      this.updateNote({
        id: this.id,
        updates: update,
      });
    },
  },
};
</script>

<style scoped>
.save {
  font-family: "IBM Plex Sans", sans-serif;
  color: #c079ba;
  font-size: 14px;
  line-height: 18px;
}
.solo-tag-text {
  margin: 1px 2px;
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  font-size: 11px;
  line-height: 14px;
  font-weight: 500;
}
.solo-tag {
  margin-right: 8px;
  margin-top: 0px;
  margin-bottom: 2px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
</style>
