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
      <q-btn color="primary" label="Search" @click="handleSearchUser" />
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
// import Contact from "../../models/Contact"
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
      coreAPIURL: "https://core.blockstack.org/v1",
      defaultProfilePic: "/img/avataaars.svg",
      searchResults: [],
      shareURL: "",
      recipientPublicKey: "",
      userSelected: {},
    };
  },
  mounted() {},
  created() {
    // this.searchProfile = debounce(this.searchProfile, 500);
    this.filterFn = debounce(this.filterFn, 300);
    let contacts = Object.values(this.contacts);
    this.recents = contacts.map((contact) => {
      return {
        label: contact.label,
        value: contact.blockstackid,
        icon: contact.icon,
        publicKey: contact.publicKey,
      };
    });
    this.recentNames = this.recents.map((contact) => {
      return contact.label;
    });
  },
  computed: {
    ...mapState(["contacts"]),
    showShare() {
      return navigator.share;
    },
    showClipboard() {
      return !navigator.share && navigator.clipboard;
    },
  },
  methods: {
    ...mapActions({
      setShowLoadSharedNote: "app/setShowLoadSharedNote",
      addContact: "contacts/addContact",
    }),
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
    resetSearch() {
      this.showInput = true;
      this.shareURL = "";
      this.options = [];
      this.searchResults = [];
      this.recipientPublicKey = "";
      this.model = null;
    },
    async handleSearchUser() {
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
        const zonefile = data.zonefile;
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
          profileData.decodedTaken.payload.subject.publicKey;
      } catch (err) {
        console.error(err);
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
