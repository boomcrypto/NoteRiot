<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark" style="border-bottom: 1px solid pink">
      <q-toolbar>
        <q-space />
        <q-btn flat dense round icon="settings" aria-label="Menu">
          <q-menu auto-close>
            <div class="row no-wrap q-pa-md">
              <div class="column col">
                <q-list dense>
                  <q-item
                    v-ripple
                    dense
                    clickable
                    @click="handleGoToBackupManager"
                  >
                    <q-item-section class="text-no-wrap"
                      >Backup Manager</q-item-section
                    >
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
              </div>
              <q-separator inset vertical class="q-mx-md" />
              <div class="column items-center">
                <div class="column items-center">
                  <q-avatar size="72px">
                    <img :src="userAvatar" />
                  </q-avatar>
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
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="300"
      class="text-nr"
      :breakpoint="400"
      dark
    >
      <q-toolbar>
        <q-avatar square size="36px">
          <img src="/images/logo.png" />
        </q-avatar>
        <div class="text-h5 q-pl-sm">NoteRiot</div>
      </q-toolbar>
      <q-scroll-area style="height: 100%; margin-top: 60px">
        <q-list>
          <q-item-label header>Filters</q-item-label>
          <q-item
            :active="labelFilter === 'all'"
            active-class="activeFilter"
            clickable
            v-ripple
            @click="handleSetCurrentLabelFilter('all')"
          >
            <q-item-section avatar>
              <q-icon name="select_all" />
            </q-item-section>

            <q-item-section> All </q-item-section>
          </q-item>
          <q-item
            :active="labelFilter === 'favorite'"
            active-class="activeFilter"
            clickable
            v-ripple
            @click="handleSetCurrentLabelFilter('favorite')"
          >
            <q-item-section avatar>
              <q-icon name="favorite" />
            </q-item-section>

            <q-item-section> Favorites </q-item-section>
          </q-item>

          <q-item
            :active="labelFilter === 'recents'"
            active-class="activeFilter"
            clickable
            v-ripple
            @click="handleSetCurrentLabelFilter('recents')"
          >
            <q-item-section avatar>
              <q-icon name="more_time" />
            </q-item-section>

            <q-item-section> Recents </q-item-section>
          </q-item>

          <q-item
            :active="labelFilter === 'archive'"
            active-class="activeFilter"
            clickable
            v-ripple
            @click="handleSetCurrentLabelFilter('archive')"
          >
            <q-item-section avatar>
              <q-icon name="archive" />
            </q-item-section>

            <q-item-section> Archive </q-item-section>
          </q-item>
          <q-item
            :active="labelFilter === tag"
            active-class="activeFilter"
            clickable
            v-ripple
            v-for="tag in tags"
            :key="`drawer-tag-${tag}`"
            @click="handleSetCurrentLabelFilter(tag)"
          >
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              {{ tag }}
            </q-item-section>
          </q-item>
          <q-separator dark />
          <template v-for="color in colors">
            <q-item
              :active="labelFilter.substring(7) === color"
              active-class="activeFilter"
              clickable
              v-ripple
              :key="`drawer-tag-${color}`"
              @click="handleSetCurrentColorFilter(color)"
              v-if="color"
            >
              <q-item-section avatar>
                <q-icon :color="color" name="circle" />
              </q-item-section>
              <q-item-section>
                {{ color.replace("-2", "") }}
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
      <!-- <div class="absolute-top">
        <q-card dark flat class="q-mb-md">
          <q-card-section>
            <div class="text-h5">NoteRiot</div>
          </q-card-section>
        </q-card>
      </div> -->
    </q-drawer>

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
  },
  data() {
    return {
      leftDrawerOpen: false,
      expanded: false,
      component: null,
      data: null,
      showDialog: false,
    };
  },
  computed: {
    ...mapState("app", ["user", "labelFilter", "username", "colorFilter"]),
    ...mapGetters("app", ["tags", "name", "avatar", "colors"]),
    userAvatar() {
      return this.user?.avatarUrl() || "/images/avataaars.svg";
    },
    name() {
      if (this.user) {
        return this.user.name();
      } else {
        return "";
      }
    },
  },
  methods: {
    ...mapActions("app", ["signOut", "setLabelFilter", "setColorFilter"]),
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
</style>
