<template>
  <q-card
    style="width: 400px; max-width: 80%; height: auto; padding: 0px"
    class="effin-border"
  >
    <q-card-section>
      <q-input
        v-model="model"
        type="search"
        placeholder="Search for STX user"
        hint="ex: user.id or user.id.blockstack"
        clearable
        @keyup.enter="handleSearchUser"
      />
      <q-btn
        outlined
        no-caps
        unelevated
        color="accent"
        label="Search"
        @click="handleSearchUser"
      />
    </q-card-section>
    <q-card-section>
      {{ recipientPublicKey }}
    </q-card-section>
    <q-card-section v-if="shareURL">
      <div
        style="border: 1px solid grey; word-wrap: break-word"
        class="text-caption"
      >
        {{ shareURL }}
      </div>
    </q-card-section>
    <q-card-actions v-if="shareURL" right>
      <q-btn
        flat
        color="white"
        text-color="primary"
        label="Share"
        icon="share"
        @click="share"
        v-if="showShare"
      />
      <q-btn
        class="btn"
        flat
        color="white"
        text-color="primary"
        label="Copy"
        icon="assignment"
        @click="copyToClipboard"
        v-if="showClipboard"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
//TODO: selected name is no longer triggering the share url creation
/* eslint-disable no-undef */

import { debounce } from "quasar";
import { mapActions, mapState } from "vuex";
import Contact from "src/models/Contact";
import { v4 as uuidv4 } from "uuid";
// import { userSession } from "boot/stacks"

export default {
  name: "UserSearch",
  props: ["note"],
  data() {
    return {
      model: null,
      showInput: true,
      recents: [],
      recentNames: [],
      options: [],
      loading: false,
      defaultProfilePic: "/img/avataaars.svg",
      searchResults: [],
      shareURL: "",
      recipientPublicKey: "",
      userSelected: {},
    };
  },
  mounted() {},
  created() {},
  computed: {
    ...mapState(["app", "contacts"]),
    showShare() {
      return navigator.share;
    },
    showClipboard() {
      return !navigator.share && navigator.clipboard;
    },
  },
  methods: {
    ...mapActions("app", ["setShowLoadSharedNote", "addContact"]),
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.shareURL);
        this.$q.notify({
          message: "URL copied to clipboard",
          icon: "announcement",
          timeout: 600,
        });
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    },
    async share() {
      try {
        await navigator.share({
          title: this.note.headline,
          text: this.note.text,
          url: this.shareURL,
        });
        return true;
      } catch (err) {
        console.error("There was an error trying to share this content");
        return false;
      }
    },

    async handleSearchUser() {
      let user = this.contacts.find((contact) => contact.name === this.model);
      if (user) {
        this.addContact(
          new Contact({
            name: this.model,
            publicKey: user.publicKey,
            zonefile: user.zonefile,
            nickname: "",
            shares: [],
          })
        );
      }

      try {
        this.loading = true;
        const res = await fetch(
          `https://stacks-node-api.mainnet.stacks.co/v1/names/${this.model}`,
          {
            method: "GET",
            // headers: {
            //   "Content-Type": "application/json",
            //   // Authorization: `Bearer ${this.userSession.loadUserData().accessToken}`,
            // },
          }
        );
        const data = await res.json();
        if (data.hasOwnProperty("error")) {
          this.recipientPublicKey = "Public key not found";

          this.$q.notify({
            message: data.error,
            icon: "announcement",
            timeout: 600,
          });
          this.loading = false;
          return;
        }
        const zonefile = data.zonefile;
        if (data.zonefile === "") {
          this.recipientPublicKey = "Public key not found";
          this.$q.notify({
            message: "No zonefile found",
            icon: "announcement",
            timeout: 600,
          });
          this.loading = false;
          return;
        }
        const profileUrl = zonefile.split("https")[1];
        const profileRes = await fetch(`https${profileUrl}`, {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          //   // Authorization: `Bearer ${this.userSession.loadUserData().accessToken}`,
          // },
        });
        const profileData = await profileRes.json();
        this.recipientPublicKey =
          profileData.decodedTaken.payload["https://noteriot.app"].publicKey;
      } catch (err) {
        console.error(err);
        this.recipientPublicKey = "Public key not found";
      } finally {
        this.loading = false;
      }
    },

    selectUser(user) {
      this.showInput = false;
      this.userSelected = user;
      console.log("user selected: ", user);
      if (user.publicKey === "") {
        alert(
          `Cannot share with ${user.label} :(. Please ask this user to log into NoteRiot`
        );
        return;
      }

      if (!Object.keys(this.contacts).includes(user.value)) {
        // We're sharing with a new user, add this user to our
        // contact list
        this.addContact(user);
      }

      this.encryptAndShare();
    },
    getProfilePic(result) {
      let profilePic = this.defaultProfilePic;
      if (result.profile.image && result.profile.image.length) {
        const avatarImage = result.profile.image.find(
          (i) => i.name === "avatar"
        );
        if (avatarImage) {
          profilePic = avatarImage.contentUrl;
        }
      }
      return profilePic;
    },
    encryptAndShare() {
      const sharedFilename = `shared/${uuidv4()}`;
      const pk = this.userSelected.publicKey;
      this.$userSession
        .encryptContent(JSON.stringify(this.note), { pk })
        .then((cipherText) => {
          this.$userSession
            .putFile(sharedFilename, cipherText, {
              encrypt: false,
            })
            .then((filenameToShare) => {
              this.shareURL = filenameToShare;
            })
            .catch((err) => {
              alert("Error sharing file: ", err);
            });
        });
      // this.$userSession
      //   .putFile(
      //     sharedFilename,
      //     this.$userSession.encryptContent(JSON.stringify(this.note), {
      //       pk,
      //     }),
      //     { encrypt: false }
      //   )
      //   .then((filenameToShare) => {
      //     this.shareURL = filenameToShare
      //   })
      //   .catch((err) => {
      //     alert("Error sharing file: ", err)
      //   })
    },
  },
};
</script>

<style></style>
