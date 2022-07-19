<template>
  <q-card flat>
    <q-card-section class="q-pa-none">
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
          ></div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SelectColor",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedColor: "",
    };
  },
  created() {
    this.selectedColor = this.note.color;
  },
  computed: {
    ...mapState("app", ["noteColors"]),
  },
  methods: {
    handleSelectColor(color) {
      this.selectedColor = color;
      this.$emit("update-note", {
        id: this.note.id,
        updates: {
          color: this.color,
        },
      });
    },
  },
};
</script>
