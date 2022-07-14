<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-space/>
        <Search/>
        <q-btn flat rounded color="accent" icon="sort">
          <q-menu>
<!--            <q-card flat class="boom-card">-->
<!--              <q-card-section class="q-pa-none">-->
                <q-list>
                  <q-item
                    :active="sortBy === 'title'"
                    active-class="activeSort"
                    clickable
                    v-ripple
                    v-close-popup
                    @click="handleSetCurrentSortBy('title')"
                  >
                    <q-item-section avatar>
                      <q-icon name="sort_by_alpha" class="col"/>
                    </q-item-section>
                    <q-item-section> Title</q-item-section>
                  </q-item>
                  <q-item
                    :active="sortBy === 'createdAt'"
                    active-class="activeSort"
                    clickable
                    v-ripple
                    @click="handleSetCurrentSortBy('createdAt')"
                  >
                    <q-item-section avatar>
                      <q-icon name="access_time"/>
                    </q-item-section>
                    <q-item-section> Date</q-item-section>
                  </q-item>
                  <q-item
                    :active="sortBy === 'updatedAt'"
                    active-class="activeSort"
                    clickable
                    v-ripple
                    @click="handleSetCurrentSortBy('updatedAt')"
                  >
                    <q-item-section avatar>
                      <q-icon name="update"/>
                    </q-item-section>
                    <q-item-section> Updated</q-item-section>
                  </q-item>
                </q-list>
<!--              </q-card-section>-->
<!--            </q-card>-->
          </q-menu>
        </q-btn>
        <q-btn
          flat
          round
          color="accent"
          icon="img:/images/filter.svg"
          @click="handleFilter"
        >
          <q-menu fit>
            <q-list style="min-width: 250px">
              <q-item-label header class="text-weight-bold">
                <span>Add Filters</span>
                <span class="float-right text-caption" style="margin-top: -1px">Clear All</span>
              </q-item-label>

              <q-item clickable class="q-pa-none">
                <q-item-section side>
                  <div>
                    <q-icon name="sell" class="q-mr-sm" size="14px"/>
                    Tag(s)
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select dense v-model="tagFilter" :options="tags" class="full-width" style="width: 120px"/>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item clickable class="q-pa-none">
                <q-item-section side>
                  <div>
                    <q-icon name="palette" class="q-mr-sm" size="14px"/>
                    Color
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select dense v-model="colorFilter" class="full-width" :options="colors"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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
            <img :src="avatar"/>
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
                    </q-item-section
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
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      class="text-nr bg-primary"
      :breakpoint="400"
    >
      <q-toolbar>
        <img height="40px" src="/images/noteriot-round-wordmark.svg"/>
      </q-toolbar>

      <q-scroll-area style="height: 100%; margin-top: 10px">
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
              <q-icon name="select_all"/>
            </q-item-section>

            <q-item-section> All</q-item-section>
          </q-item>
          <q-item
            :active="labelFilter === 'favorite'"
            active-class="activeFilter"
            clickable
            v-ripple
            @click="handleSetCurrentLabelFilter('favorite')"
          >
            <q-item-section avatar>
              <q-icon name="favorite"/>
            </q-item-section>

            <q-item-section> Favorites</q-item-section>
          </q-item>

          <q-item
            :active="labelFilter === 'archive'"
            active-class="activeFilter"
            clickable
            v-ripple
            @click="handleSetCurrentLabelFilter('archive')"
          >
            <q-item-section avatar>
              <q-icon name="archive"/>
            </q-item-section>

            <q-item-section> Archive</q-item-section>
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
              <q-icon name="label"/>
            </q-item-section>
            <q-item-section>
              {{ tag }}
            </q-item-section>
          </q-item>
          <q-separator dark/>
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
                <q-icon
                  :color="color"
                  :name="color === 'none' ? 'block' : 'circle'"
                />
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
      <router-view/>
      <q-dialog v-model="showDialog">
        <component :is="component" :data="data"/>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";
import BackupManager from "components/BackupManager.vue";
import ImportTool from "components/Import.vue";
import {userSession} from "../boot/stacks";
import {openURL} from "quasar";

export default {
  name: "MainLayout",
  components: {
    BackupManager,
    ImportTool,
    Search: () => import("components/Search.vue"),
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
    ...mapState("app", [
      "user",
      "labelFilter",
      "username",
      "colorFilter",
      "tagFilter",
      "sortBy",
    ]),
    ...mapGetters("app", ["tags", "name", "avatar", "colors"]),
  },
  methods: {
    ...mapActions("app", [
      "signOut",
      "setLabelFilter",
      "setColorFilter",
      "setSortBy",
    ]),
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
        this.$router.replace({name: "Index"});
      }
      if (this.$q.screen.xs) {
        this.leftDrawerOpen = false;
      }
    },

    handleSetCurrentLabelFilter(tag) {
      this.setLabelFilter(tag);
      if (this.$route.name !== "Index") {
        this.$router.replace({name: "Index"});
      }
      if (this.$q.screen.xs) {
        this.leftDrawerOpen = false;
      }
    },
    handleSetCurrentSortBy(val) {
      this.setSortBy(val);
    },
    handleOpenBackupManager() {
      this.$router.push({name: "BackupManager"});
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
</style>
