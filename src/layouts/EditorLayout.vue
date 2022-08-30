<template>
  <q-layout view="Lhh lpR fff" container class="bg-white">
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
