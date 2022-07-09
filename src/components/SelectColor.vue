<template>
  <q-card flat class="dialog-card effin-border">
    <q-toolbar class="bg-transparent">
      <q-icon round dense name="img:/images/color-wheel.jpg" />
      <q-toolbar-title>Select a color</q-toolbar-title>
      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>
    <q-card-section class="q-pa-none">
      <div class="tag-colors">
        <div class="tag-color-row">
          <div
            class="tag-color white"
            @click="handleSelectColor('white')"
            :class="color === 'white' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color orchid"
            @click="handleSelectColor('orchid')"
            :class="color === 'orchid' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color fuschia"
            @click="handleSelectColor('fuschia')"
            :class="color === 'fuschia' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color red"
            @click="handleSelectColor('red')"
            :class="color === 'red' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color orange"
            @click="handleSelectColor('orange')"
            :class="color === 'orange' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color yellow"
            @click="handleSelectColor('yellow')"
            :class="color === 'yellow' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color lime"
            @click="handleSelectColor('lime')"
            :class="color === 'lime' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color green"
            @click="handleSelectColor('green')"
            :class="color === 'green' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color teal"
            @click="handleSelectColor('teal')"
            :class="color === 'teal' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color cyan"
            @click="handleSelectColor('cyan')"
            :class="color === 'cyan' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color blue"
            @click="handleSelectColor('blue')"
            :class="color === 'blue' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color steel"
            @click="handleSelectColor('steel')"
            :class="color === 'steel' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color gray"
            @click="handleSelectColor('gray')"
            :class="color === 'gray' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color brown"
            @click="handleSelectColor('brown')"
            :class="color === 'brown' ? 'checked' : ''"
          ></div>
          <div
            class="tag-color black"
            @click="handleSelectColor('black')"
            :class="color === 'black' ? 'checked' : ''"
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
      color: "",
    };
  },
  created() {
    this.color = this.note.color;
  },
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
