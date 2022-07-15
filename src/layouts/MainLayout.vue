<template>
  <q-layout view="lHh Lpr lFf">
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
                @click="handleSetCurrentSortBy('title')"
              >
                <q-item-section avatar>
                  <q-icon name="sort_by_alpha" class="col" />
                </q-item-section>
                <q-item-section> Title</q-item-section>
                <q-item-section side>
                  <q-icon
                    v-if="sortBy === 'title'"
                    :name="
                      sortDirection === 'asc' ? 'north_east' : 'south_east'
                    "
                    size="14px"
                    class="col"
                  />
                </q-item-section>
              </q-item>
              <q-item
                :active="sortBy === 'createdAt'"
                active-class="activeSort"
                clickable
                v-ripple
                @click="handleSetCurrentSortBy('createdAt')"
              >
                <q-item-section avatar>
                  <q-icon name="access_time" />
                </q-item-section>
                <q-item-section> Date</q-item-section>
                <q-item-section side>
                  <q-icon
                    v-if="sortBy === 'createdAt'"
                    :name="
                      sortDirection === 'asc' ? 'north_east' : 'south_east'
                    "
                    size="14px"
                    class="col"
                  />
                </q-item-section>
              </q-item>
              <q-item
                :active="sortBy === 'updatedAt'"
                active-class="activeSort"
                clickable
                v-ripple
                @click="handleSetCurrentSortBy('updatedAt')"
              >
                <q-item-section avatar>
                  <q-icon name="update" />
                </q-item-section>
                <q-item-section> Updated</q-item-section>
                <q-item-section side>
                  <q-icon
                    v-if="sortBy === 'updatedAt'"
                    :name="
                      sortDirection === 'asc' ? 'north_east' : 'south_east'
                    "
                    size="14px"
                    class="col"
                  />
                </q-item-section>
              </q-item>
            </q-list>
            <!--              </q-card-section>-->
            <!--            </q-card>-->
          </q-menu>
        </q-btn>
        <q-btn flat round color="accent" icon="img:/images/filter.svg">
          <q-menu fit>
            <q-card flat class="boom-card">
              <q-list style="min-width: 250px">
                <q-item-label header class="text-weight-bold">
                  <span>Add Filters</span>
                  <q-btn
                    flat
                    dense
                    @click="handleClearFilters"
                    class="float-right text-caption"
                    style="margin-top: -1px"
                    >Clear All</q-btn
                  >
                </q-item-label>
                <q-item
                  clickable
                  class="q-pa-none"
                  @click.stop="setLabelFilter('favorite')"
                >
                  <q-item-section side>
                    <div>
                      <q-icon name="sell" class="q-mr-sm" size="14px" />
                      Favorites
                    </div>
                  </q-item-section>
                </q-item>
                <q-item
                  clickable
                  class="q-pa-none"
                  @click.stop="setLabelFilter('archive')"
                >
                  <q-item-section side>
                    <div>
                      <q-icon name="sell" class="q-mr-sm" size="14px" />
                      Archived
                    </div>
                  </q-item-section>
                </q-item>
                <q-item clickable class="q-pa-none">
                  <q-item-section side>
                    <div>
                      <q-icon name="sell" class="q-mr-sm" size="14px" />
                      Tag(s)
                    </div>
                  </q-item-section>
                  <q-item-section>
                    <q-select
                      dense
                      use-chips
                      v-model="tagFilter"
                      :options="tags"
                      class="full-width"
                      style="width: 120px"
                      @input="handleSetTagFilter"
                    />
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="q-pa-none">
                  <q-item-section side>
                    <div>
                      <q-icon name="palette" class="q-mr-sm" size="14px" />
                      Color
                    </div>
                  </q-item-section>
                  <q-item-section>
                    <q-select
                      dense
                      use-chips
                      v-model="colorFilter"
                      class="full-width"
                      :options="colors"
                      @input="handleSetColorFilter"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
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

    <!-- <q-drawer
      v-if="$q.screen.gt.xs"
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      class="text-nr bg-primary"
      :breakpoint="400"
    >
      <q-toolbar>
        <img height="40px" src="/images/noteriot-round-wordmark.svg" />
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
              <q-icon name="select_all" />
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
              <q-icon name="img:/images/favorited.svg" />
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
              <q-icon name="img:/images/archive.svg" />
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
              <q-icon name="img:/images/label.svg" />
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
    </q-drawer> -->

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
    ]),
    ...mapGetters("app", ["tags", "name", "avatar", "colors"]),
  },
  methods: {
    ...mapActions("app", ["signOut", "setLabelFilter", "setSortBy"]),
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
