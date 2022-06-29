<template>
  <q-card flat style="width: 75vw">
    <q-toolbar class="bg-transparent text-center">
      <q-toolbar-title> Backup Manager </q-toolbar-title>
    </q-toolbar>
    <q-card-section>
      <q-list>
        <q-scroll-area style="height: 300px">
          <q-item
            :clickable="file.endsWith('-riotnotes.json')"
            v-ripple
            v-for="file in files"
            :key="file"
          >
            <q-item-section avatar>
              <q-icon color="primary" name="description" />
            </q-item-section>
            <q-item-section
              :class="file.endsWith('-riotnotes.json') ? '' : 'text-grey'"
            >
              {{ file }}
            </q-item-section>
            <q-item-section side top>
              <div class="row q-gutter-md">
                <q-btn
                  outline
                  rounded
                  color="primary"
                  label="Restore"
                  @click="onClick"
                />
                <q-btn
                  outline
                  rounded
                  color="primary"
                  label="Download"
                  @click="onClick"
                />
                <q-btn
                  unelevated
                  round
                  color="red"
                  icon="delete"
                  @click="onClick"
                />
              </div>
            </q-item-section>
          </q-item>
        </q-scroll-area>
      </q-list>
      <div class="boom-border" style="height: calc(100vh-105px) !important">
        file content goes here
      </div>
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
      // if (file.endsWith("-riotnotes.json")) {
      this.files.push(file);
      // }
    });
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>
