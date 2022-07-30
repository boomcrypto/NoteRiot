<template>
  <div class="tag-colors">
    <div class="tag-color-row">
      <div class="tag-color remove" @click="handleRemoveColor" />
      <div
        v-for="color in noteColors"
        :key="`select-modal-${color}`"
        @click="handleSelectColor(color)"
        :class="
          selectedColor === color
            ? `tag-color ${color} checked`
            : `tag-color ${color}`
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SelectColor",
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedColor: "",
    };
  },
  created() {
    this.selectedColor = this.color;
  },
  computed: {
    ...mapState("app", ["noteColors"]),
  },
  methods: {
    handleSelectColor(color) {
      this.selectedColor = color;
      this.$emit("update-note", { color: this.selectedColor });
    },
    handleRemoveColor() {
      this.selectedColor = "";
      this.$emit("update-note", { color: this.selectedColor });
    },
  },
};
</script>
