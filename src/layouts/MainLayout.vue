<template>
  <q-layout view="hHr lpR fFr">
    <q-header class="bg-transparent" v-if="$q.screen.gt.xs">
      <q-toolbar>
        <img
          src="/images/noteriot-round-wordmark.svg"
          :ration="16 / 9"
          spinner-color="accent"
          spinner-size="28px"
          style="height: 36px"
        />
        <q-space />
        <Search />
        <q-btn
          flat
          round
          color="accent"
          :icon="
            showFilterBar
              ? 'img:/images/filter-active.svg'
              : 'img:/images/filter.svg'
          "
          @click="setShowFilterBar(!showFilterBar)"
        />
        <q-btn
          class="q-mr-xs"
          flat
          round
          :color="$q.dark.isActive ? 'white' : 'grey-8'"
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <q-btn flat round color="dark" aria-label="Menu">
          <q-avatar size="36px">
            <img :src="avatar" />
          </q-avatar>
          <q-menu v-close-popup>
            <div class="row no-wrap q-pa-md">
              <div class="column col">
                <div>{{ name }}</div>
                <q-list dense class="q-pt-md">
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
                  NoteRiot v0.3.0
                </div>
                <q-btn
                  v-close-popup
                  no-caps
                  unelevated
                  outlined
                  class="boom-border q-mt-lg"
                  color="accent"
                  label="Sign out"
                  text-color="white"
                  @click="logout"
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <q-toolbar inset v-if="showFilterBar">
        <FilterBar class="q-mr-auto q-ml-auto" />
      </q-toolbar>
    </q-header>

    <q-footer
      v-if="$q.screen.xs"
      class="bg-white"
      style="
        max-width: 480px;
        margin: auto;
        box-shadow: inset 0px 1px 0px #e9d1f2;
      "
    >
      <q-tabs indicator-color="transparent">
        <q-tab
          no-caps
          class="webbyTab"
          active-class="text-accent activeTab"
          icon="menu"
          name="menu"
        />
        <q-space />
        <q-tab
          no-caps
          class="webbyTab"
          active-class="activeTab text-accent"
          icon="search"
          name="search"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
      <q-dialog v-model="showDialog">
        <component :is="component" :data="data" />
      </q-dialog>
      <q-page-sticky position="bottom-right" style="z-index: -10">
        <img src="/images/bottom-right.svg" />
      </q-page-sticky>
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
    };
  },
  computed: {
    ...mapState("app", [
      "user",
      "labelFilter",
      "username",
      "sortBy",
      "sortDirection",
      "showFilterBar",
    ]),
    ...mapGetters("app", ["tags", "name", "avatar", "colors"]),
  },
  methods: {
    ...mapActions("app", [
      "signOut",
      "setLabelFilter",
      "setSortBy",
      "setShowFilterBar",
    ]),
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
