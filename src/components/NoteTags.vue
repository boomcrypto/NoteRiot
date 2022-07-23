<template>
  <div class="tags">
    <div
      class="solo-tag"
      :class="`tag-${tag.color}`"
      v-for="(tag, key) in noteTags"
      :key="`${note.id}-${key}`"
    >
      <div
        class="solo-tag-text"
        :class="
          tag.color === 'white' || tag.color === 'yellow'
            ? 'tag-text-black'
            : 'tag-text-white'
        "
      >
        {{ tag.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NoteTag",
  props: {
    note: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState(["tags"]),
    noteTags() {
      let notetags = [];
      this.note.keywords.forEach((id) => {
        notetags.push({
          id: id,
          color: this.tags[id].color,
          label: this.tags[id].label,
        });
      });
      return notetags;
    },
  },
};
</script>

<style></style>
