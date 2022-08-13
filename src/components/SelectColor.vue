<template>
  <div class="tag-colors">
    <div class="tag-color-row">
      <div
        v-for="color in noteColors"
        :key="`select-modal-${color}`"
        @click="handleSelectColor(color)"
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
    handleSelectColor(clr) {
      this.$emit("update-note", { color: clr });
    },
    handleRemoveColor() {
      this.$emit("update-note", { color: "" });
    },
  },
};
</script>
