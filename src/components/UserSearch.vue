<template>
  <q-card style="width: 400px; height: auto; padding: 0px" class="effin-border">
    <q-card-section>
      <q-input
        v-model="model"
        type="search"
        placeholder="Search for STX user"
        hint="ex: user.id or user.id.blockstack"
        clearable
        @keyup.enter="handleSearchUser"
      >
        <template #after>
          <q-btn
            outlined
            no-caps
            unelevated
            color="accent"
            label="Search"
            @click="handleSearchUser"
          />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      {{ recipientPublicKey }}
    </q-card-section>
    <q-card-section v-if="showSharingExt" class="row">
      Press 'Share' to share this note with the {{ model }}.
      <q-btn
        outlined
        no-caps
        unelevated
        color="accent"
        label="Share"
        @click="handleShare"
      />
    </q-card-section>
    <q-card-section v-if="shareURL">
      <div
        style="border: 1px solid grey; word-wrap: break-word"
        class="text-caption"
      >
        {{ shareURL }}
      </div>
    </q-card-section>
    <q-card-actions v-if="shareURL">
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
import { storage } from "boot/stacks";

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
      showSharingExt: false,
    };
  },
  mounted() {},
  created() {},
  computed: {
    ...mapState("app", ["contacts"]),
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

      try {
        this.loading = true;
        const res = await this.$axios.get(
          `https://stacks-node-api.mainnet.stacks.co/v1/names/${this.model}`
        );
        const nameDetails = res.data;
        console.log("nameDetails: ", nameDetails);
        if (nameDetails.hasOwnProperty("error")) {
          this.recipientPublicKey = "Public key not found";

          this.$q.notify({
            message: nameDetails.error,
            icon: "announcement",
            timeout: 600,
          });
          this.loading = false;
          return;
        }
        const zonefile = nameDetails.zonefile;
        if (nameDetails.zonefile === "") {
          this.recipientPublicKey = "Public key not found";
          this.$q.notify({
            message: "No zonefile found",
            icon: "announcement",
            timeout: 600,
          });
          this.loading = false;
          return;
        }
        const profileUrlStart = zonefile.indexOf('"');
        const profileUrlEnd = zonefile.lastIndexOf('"');
        const profileUrl = zonefile.substring(
          profileUrlStart + 1,
          profileUrlEnd
        );
        console.log("profileUrl: ", profileUrl);
        const profileRes = await this.$axios.get(`${profileUrl}`);
        console.log(
          "data: ",
          profileRes.data[0].decodedToken.payload.claim.appsMeta
        );
        this.recipientPublicKey =
          profileRes.data[0].decodedToken.payload.claim.appsMeta[
            "https://noteriot.app"
          ].publicKey;

        if (!user) {
          this.addContact(
            new Contact({
              name: this.model,
              publicKey: this.recipientPublicKey,
              zonefile: zonefile,
              nickname: "",
              shares: [],
            })
          );
        }

        this.showSharingExt = true;
      } catch (err) {
        console.error(err);
        this.recipientPublicKey = "Public key not found";
      } finally {
        this.loading = false;
      }
    },

    async handleShare() {
      this.shareURL = await storage.putFile(
        `shared/${this.note.id}`,
        JSON.stringify(this.note),
        {
          encrypt: this.recipientPublicKey,
        }
      );
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
  },
};
</script>

<style></style>
