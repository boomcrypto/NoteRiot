<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { userSession } from "boot/stacks";

export default {
  name: "LoginLayou",
  components: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
