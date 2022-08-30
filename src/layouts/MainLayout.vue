<template>
  <q-layout view="hHH lpR fFr">
    <q-header
      :class="$q.dark.isActive ? 'bg-transparent' : 'bg-white'"
      v-if="$q.screen.gt.xs"
    >
      <q-toolbar>
        <img
          :src="
            $q.dark.isActive
              ? '/images/noteriot-round-watermark-light.svg'
              : '/images/noteriot-round-wordmark.svg'
          "
          :ration="16 / 9"
          spinner-color="accent"
          spinner-size="28px"
          style="height: 36px"
          @click="handleLogoClick"
        />
        <q-space />
        <Search />

        <q-btn
          class="q-mr-xs"
          flat
          round
          :color="$q.dark.isActive ? 'white' : 'grey-8'"
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <q-btn
          class="q-mr-xs"
          flat
          color="accent"
          round
          @click="setModeAction()"
          :icon="
            mode === 'grid' ? 'list' : mode === 'list' ? 'view_list' : 'grid_on'
          "
        />
        <q-btn flat round color="dark" aria-label="Menu">
          <q-avatar size="36px">
            <img :src="avatar" />
          </q-avatar>
          <q-menu v-close-popup>
            <div class="q-pa-sm effin-border">
              <q-list dense class="q-px-none">
                <q-item
                  v-ripple
                  dense
                  clickable
                  @click="handleGoToBackupManager"
                >
                  <q-item-section class="text-no-wrap"
                    >Backup Manager
                  </q-item-section>
                </q-item>
                <q-item v-ripple dense clickable @click="handleImport">
                  <q-item-section>Import</q-item-section>
                </q-item>
                <q-item v-ripple dense clickable @click="handleGoToTwitter">
                  <q-item-section>Twitter</q-item-section>
                </q-item>
                <q-item v-ripple dense clickable @click="handleGoToDiscord">
                  <q-item-section>Help</q-item-section>
                </q-item>
              </q-list>
              <div class="text-caption q-pl-md text-grey-7">
                NoteRiot v0.0.6
              </div>
              <q-btn
                v-close-popup
                no-caps
                unelevated
                outlined
                class="boom-border q-mt-lg full-width"
                color="accent"
                label="Sign out"
                text-color="white"
                @click="logout"
              />
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-header reveal bordered height-hint="80" v-else>
      <q-toolbar style="height: 80px">
        <img
          src="/images/noteriot-round-wordmark.svg"
          :ration="16 / 9"
          spinner-color="accent"
          spinner-size="28px"
          style="height: 36px"
        />
        <q-space />

        <q-avatar size="36px">
          <img :src="avatar" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-white text-dark" v-if="$q.screen.xs">
      <q-toolbar class="bg-transparent text-dark">
        <q-btn flat round dense icon="menu" />

        <q-btn flat round dense icon="search" />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
      <q-dialog v-model="showDialog">
        <component :is="component" :data="data" />
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import BackupManager from "components/BackupManager.vue";
import ImportTool from "components/Import.vue";
import { userSession } from "../boot/stacks";
import { openURL } from "quasar";

export default {
  name: "MainLayout",
  components: {
    BackupManager,
    ImportTool,
    Search: () => import("components/Search.vue"),
    FilterBar: () => import("components/FilterBar.vue"),
    Editor: () => import("components/Editor.vue"),
  },
  data() {
    return {
      leftDrawerOpen: false,
      expanded: false,
      component: null,
      data: null,
      showDialog: false,
      tagFilter: null,
      colorFilter: null,
      showEditor: false,
      newNote: null,
    };
  },
  computed: {
    ...mapState("app", [
      "user",
      "labelFilter",
      "username",
      "sortBy",
      "sortDirection",
      "mode",
    ]),
    ...mapGetters("app", ["tags", "name", "avatar", "colors"]),
  },
  methods: {
    ...mapActions("app", [
      "signOut",
      "setLabelFilter",
      "setSortBy",
      "setMode",
      "addNote",
    ]),
    handleLogoClick() {
      if (this.$route.name === "Edit") {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "Home" });
      }
    },
    async handleAddNote() {
      this.setLabelFilter("all");
      this.newNote = await this.addNote();
      this.showEditor = true;
    },
    handleCloseEditor() {
      this.showEditor = false;
      this.newNote = null;
    },
    async handleUpdates(updates) {
      const notestatus = await this.updateNote(updates);
      console.log("note status after update", notestatus);
    },
    handleClearFilters() {
      this.setLabelFilter("all");
      this.tagFilter = null;
    },
    handleSetColorFilter() {
      if (this.colorFilter !== null) {
        this.setLabelFilter(`color:${this.colorFilter}`);
      } else {
        this.setLabelFilter("all");
      }
    },
    handleSetTagFilter() {
      if (this.tagFilter !== null) {
        this.setLabelFilter(this.tagFilter);
      } else {
        this.setLabelFilter("all");
      }
    },
    handleFilter() {
      console.log("handle filter");
    },
    handleSignOut() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to sign out?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.signOut();
        })
        .onCancel(() => {
          console.log(">>>> Cancel - not logging out");
        });
    },
    handleGoToBackupManager() {
      this.component = "BackupManager";
      this.showDialog = true;
    },
    handleImport() {
      this.component = "ImportTool";
      this.showDialog = true;
    },
    handleSetCurrentColorFilter(color) {
      this.setLabelFilter(`color:${color}`);
      if (this.$route.name !== "Index") {
        this.$router.replace({ name: "Index" });
      }
      if (this.$q.screen.xs) {
        this.leftDrawerOpen = false;
      }
    },

    handleSetCurrentLabelFilter(tag) {
      this.setLabelFilter(tag);
      if (this.$route.name !== "Index") {
        this.$router.replace({ name: "Index" });
      }
      if (this.$q.screen.xs) {
        this.leftDrawerOpen = false;
      }
    },
    handleSetCurrentSortBy(val) {
      this.setSortBy(val);
    },
    setModeAction(mode_val) {
      if (this.mode == "list") {
        this.setMode("condensed_list");
      } else if (this.mode == "grid") {
        this.setMode("list");
      } else {
        this.setMode("grid");
      }
    },
    handleOpenBackupManager() {
      this.$router.push({ name: "BackupManager" });
    },
    logout() {
      userSession.signUserOut("/");
    },
    handleGoToTwitter() {
      openURL("https://twitter.com/NoteRiot");
    },
    handleGoToDiscord() {
      openURL("https://discord.gg/AbmtxVuCuB");
    },
  },
};
</script>
<style scoped>
.activeFilter {
  color: #9c27b0;
  /* background-color: #f5ebf6; */
  background-color: white;
  border-right: none !important;
}

.activeSort {
  color: #9c27b0;
}
.webbyTab {
  max-width: 120px !important;
}
</style>
