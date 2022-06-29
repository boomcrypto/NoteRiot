<template>
  <q-card flat style="width: 75vw">
    <q-toolbar class="bg-transparent text-center">
      <q-toolbar-title> Import </q-toolbar-title>
    </q-toolbar>
    <q-card-section>
      <q-input type="file" borderless @change="onFileChange"> </q-input>
    </q-card-section>
  </q-card>
</template>

<script>
import { storage } from "src/boot/stacks";

export default {
  name: "BackupManager",
  components: {},
  data() {
    return {
      files: [],
    };
  },
  mounted() {
    storage.listFiles((file) => {
      if (file.endsWith("-riotnotes.json")) {
        this.files.push(file);
      }
    });
  },
  methods: {
    // TODO: implement import
    onFileChange(e) {
      console.log("on file change");
    },
  },
};
</script>
