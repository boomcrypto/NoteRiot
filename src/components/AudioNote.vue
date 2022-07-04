<template>
  <q-card>
    <q-card-section>
      <vue-record-audio @result="onResult" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "AudioNote",
  data() {
    return {
      mic: false,
      mediaRecorder: null,
    }
  },
  methods: {
    onResult(data) {
      // save voice note
      console.log("save data: ", data)
    },
  },
}
</script>

<style></style>
