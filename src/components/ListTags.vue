<template>
  <div class="tags flex">
    <div class="solo-tag" v-for="(tag, index) in currentTags" :key="index">
      <div class="solo-tag-text q-mr-xs">
        <q-chip
          clickable
          dense
          square
          text-color="white"
          class="text-caption"
          color="primary"
          @click="$emit('selected', tag)"
        >
          {{ tag }}
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTags",
  props: ["tags"],
  data() {
    return {
      addNewTag: false,
      newTagName: "",
      currentTags: this.tags,
    };
  },
  methods: {
    addTagToNote() {
      console.log("new tag is ", this.newTagName);
      if (this.newTagName.length > 0) {
        this.currentTags.push(this.newTagName);
      }
      this.addNewTag = false;
      this.newTagName = "";
    },
  },
};
</script>

<style scoped>
.q-chip {
  margin: 0px;
}
</style>
