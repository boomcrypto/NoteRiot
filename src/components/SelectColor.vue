<template>
  <div class="tag-colors">
    <div class="tag-color-row">
      <div
        v-for="color in noteColors"
        :key="`select-modal-${color}`"
        @click="handleSelectColor(color)"
        :class="
          selectedColor === color
            ? `tag-color ${color} checked`
            : `tag-color ${color}`
        "
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectColor",
  props: {
    color: {
      type: String,
      default: "",
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
      this.selectedColor = clr;
      this.$emit("update-note", { color: clr });
    },
    handleRemoveColor() {
      this.selectedColor = "";
      this.$emit("update-note", { color: "" });
    },
  },
};
</script>
