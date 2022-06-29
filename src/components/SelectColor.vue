<template>
  <q-card flat class="dialog-card">
    <q-toolbar class="bg-transparent">
      <q-icon round dense name="img:/images/color-wheel.jpg" />
      <q-toolbar-title>Select a color</q-toolbar-title>
      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>
    <q-card-actions>
      <div class="row wrap">
        <q-icon
          size="48px"
          class="col-2"
          :color="color"
          :name="color === 'none' ? 'block' : 'circle'"
          @click.stop="handleSelectColor(color)"
          v-close-popup
          v-for="color in noteColors"
          :key="color"
        />
      </div>
    </q-card-actions>
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
      color: "",
    };
  },
  created() {},
  computed: {
    ...mapState("app", ["noteColors"]),
  },
  methods: {
    handleSelectColor(color) {
      this.color = color;
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
