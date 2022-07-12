<template>
  <div class="row">
    <q-input
      outlined
      v-model="searchTerm"
      color="accent"
      type="search"
      label="Search"
      class="grow"
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
    <q-btn
      outline
      color="accent"
      icon="sort"
      label="Sort"
      @click="onClick"
      class="q-mx-md"
    />
    <q-btn
      outline
      color="accent"
      icon="img:/images/filter.svg"
      label="Filter"
      @click="onClick"
    />
  </div>
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
