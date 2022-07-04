<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Backup and Import</div>
    </q-card-section>

    <!-- TODO: change tabs to a bottom sheet -->
    <!-- <q-tabs v-model="tab" class="text-teal">
      <q-tab label="Backup" name="one" />
      <q-tab label="Import shared note" name="two" />
      <q-tab label="Import Google Keep" name="three" />
      <q-tab label="Import from backup" name="four" />
    </q-tabs> -->

    <q-separator />

    <!-- <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="one">
        <q-card class="my-card" style="height: 300px;">
          <q-card-section>
            Backup/export current data.
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="two">
        <q-card class="my-card" style="height: 300px;">
          <q-card-section>
            Import a shared note.
          </q-card-section>
        </q-card>
      </q-tab-panel>
      <q-tab-panel name="three">
        <q-card class="my-card" style="height: 300px;">
          <q-card-section>
            Import Google Keep.
          </q-card-section>
        </q-card>
      </q-tab-panel>
      <q-tab-panel name="four">
        <q-card class="my-card" style="height: 300px;">
          <q-card-section>
            Import from backup
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels> -->
  </q-card>
</template>

<script>
export default {
  name: "BackupAndImport",
  data() {
    return {
      tab: "one",
    }
  },
}
</script>

<style></style>
