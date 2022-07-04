<template>
  <div>
    <q-card>
      <q-card-section>
        <div class="title">Import Shared Note</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="url" label="url" />
      </q-card-section>
      <q-card-actions right>
        <q-btn
          color="white"
          text-color="black"
          label="Load"
          @click="loadSharedNote"
        />
      </q-card-actions>
    </q-card>
    <q-dialog v-model="showPreview">
      <q-card :maximize="$q.screen.xs" style="width: 700px; max-width: 80vw;">
        <q-card-section>
          {{ sharednote.headline }}
        </q-card-section>
        <q-card-section v-html="sharedNote.text"> </q-card-section>
        <q-card-actions right>
          <q-btn
            color="white"
            text-color="black"
            label="Dismiss"
            v-close-popup
          />
          <q-btn
            color="white"
            text-color="black"
            label="Import"
            @click="importDoc"
          />
          <q-btn
            flat
            round
            color="white"
            icon="arrow_drop_down"
            text-color="black"
            @click="debug = !debug"
          />
        </q-card-actions>
        <q-card-section v-show="debug">
          {{ sharedNote }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoadNote",
  data() {
    return {
      debug: false,
      sender: "",
      url: "",
      showPreview: false,
      sharedNote: {},
    }
  },
  methods: {
    loadSharedNote() {
      this.$axios.get(this.url).then((res) => {
        this.sharedNote = this.$userSession.decryptContent(
          JSON.stringify(res.data)
        )
        this.sharedNote = JSON.parse(this.sharedNote)
        this.showPreview = true
      })
    },
    importDoc() {},
  },
}
</script>

<style></style>
