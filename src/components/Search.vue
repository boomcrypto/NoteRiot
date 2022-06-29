<template>
  <q-input
    outlined
    v-model="searchTerm"
    color="primary"
    type="search"
    label="Search"
    clearable
    @input="handleSearch"
    @keyup.enter="handleSearch"
  />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchComponent",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    ...mapActions("app", ["setSearchTerm"]),
    handleSearch() {
      this.setSearchTerm(this.searchTerm);
    },
  },
};
</script>
