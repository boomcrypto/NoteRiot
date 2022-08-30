<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { userSession } from "boot/stacks";

export default {
  name: "App",
  async mounted() {
    if (userSession.isUserSignedIn()) {
      this.$router.push({ name: "Home" });
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((user) => {
        this.$router.push({ name: "Home" });
      });
    } else {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
<style></style>
