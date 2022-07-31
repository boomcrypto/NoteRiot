<template>
  <div class="tag-colors">
    <div class="tag-color-row">
      <div class="tag-color remove" @click="handleRemoveColor" />
      <div
        v-for="(color, index) in noteColors"
        :key="`select-modal-${color}`"
        @click="handleSelectColor(index)"
        :class="
          selectedColor === index
            ? `tag-color ${color} checked`
            : `tag-color ${color}`
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectColor",
  props: {
    color: {
      type: Number,
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
    ...mapGetters("app", ["noteColors"]),
  },
  methods: {
    handleSelectColor(idx) {
      this.selectedColor = idx;
      this.$emit("update-note", { color: this.selectedColor });
    },
    handleRemoveColor() {
      this.selectedColor = 0;
      this.$emit("update-note", { color: this.selectedColor });

    },
  },
};
</script>
