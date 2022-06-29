<template>
  <q-card flat class="dialog-card">
    <q-toolbar class="bg-transparent">
      <q-icon flat round dense name="label" />
      <q-toolbar-title>Tag Manager</q-toolbar-title>
      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>
    <q-card-section>
      <q-select v-model="orange" :options="displayTags" label="Tags" filled />
    </q-card-section>
    <q-card-section>
      <q-input
        clearable
        v-model="newTag"
        type="text"
        label="mynewtag"
        class="q-pt-none"
        @keyup.enter="handleAddTag"
      >
        <template #after>
          <q-btn
            flat
            color="primary"
            icon="check"
            @click="handleAddTag"
            v-close-popup
          />
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SelectTag",
  props: {
    note: {
      type: Object,
      required: true,
    },
    // data: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  data() {
    return {
      orange: [], // no real reason to call this orange
      alltags: [],
      newTag: "",
    };
  },
  created() {
    this.alltags = this.data.concat(this.tags);
    this.alltags = [...new Set(this.alltags)];
    this.alltags.forEach((tag) => {
      this.displayTags.push({ label: tag, value: tag });
    });
    this.orange = this.data;
  },
  computed: {
    ...mapGetters("app", ["tags"]),
    availableTags() {
      return this.tags.filter((tag) => {
        return !this.note.tags.includes(tag);
      });
    },
    displayTags() {
      return this.tags.map((tag) => {
        return {
          value: tag,
          label: tag,
        };
      });
    },
  },
  methods: {
    handleAddTag() {
      console.log("add new tag");
    },
    beforeUnmount() {
      this.$emit("updates", { tags: this.orange });
    },
  },
};
</script>
