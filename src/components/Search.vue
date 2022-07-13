<template>
  <q-input
    outlined
    rounded
    dense
    v-model="searchTerm"
    color="accent"
    type="search"
    label="Search"
    class="q-mr-md"
    clearable
    @input="handleSearch"
    @keyup.enter="handleSearch"
  >
    <template #prepend>
      <q-icon>
        <img src="/images/search.svg" />
      </q-icon>
    </template>
  </q-input>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchComponent",
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    ...mapGetters("app", ["tags", "colors"]),
  },
  methods: {
    ...mapActions("app", ["setSearchTerm"]),
    handleSearch() {
      this.setSearchTerm(this.searchTerm);
    },
  },
};
</script>
