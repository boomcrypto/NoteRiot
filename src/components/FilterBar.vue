<template>
  <div class="row q-gutter-md justify-center">
    Filter By:&nbsp;
    <q-btn
      round
      unelevated
      outlined
      no-caps
      :icon="
        labelFilter === 'all'
          ? 'img:/images/clear-inactive.svg'
          : 'img:/images/clear-active.svg'
      "
      @click="handleClearFilter"
    >
    </q-btn>
    <q-btn
      :outline="labelFilter !== 'favorite'"
      no-caps
      square
      color="accent"
      label="Favorites"
      @click="handleFilter('favorite')"
    >
    </q-btn>
    <q-btn
      :outline="labelFilter !== 'archive'"
      no-caps
      square
      color="accent"
      label="Archives"
      @click="handleFilter('archive')"
    />
    <q-btn
      :outline="!tags.includes(labelFilter)"
      no-caps
      square
      color="accent"
      :label="labelChipLabel"
      :icon-right="labelClick ? 'expand_less' : 'expand_more'"
      @click="labelClick = !labelClick"
    >
      <q-menu>
        <q-list class="effin-border">
          <q-item
            clickable
            v-close-popup
            @click="handleFilter(tag)"
            v-for="tag in tags"
            :key="`labelfilter-${tag}`"
          >
            <q-item-section>
              <q-item-label>{{ tag }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-btn
      no-caps
      :outline="!labelFilter.startsWith('color:')"
      square
      label="Colors"
      :icon-right="colorClick ? 'expand_less' : 'expand_more'"
      class="q-mr-sm"
      color="accent"
      @click="colorClick = !colorClick"
    >
      <q-menu>
        <q-list class="effin-border">
          <q-item
            clickable
            v-close-popup
            @click="handleFilter(`color:${color.idx}`)"
            v-for="color in displayColor"
            :key="`colorfilter-${color.val}`"
          >
            <q-item-section>
              <q-item-label>{{ color.val }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-btn
      no-caps
      outline
      rounded
      color="accent"
      label="Sort"
      icon="img:/images/sort.svg"
    >
      <q-menu>
        <q-list class="effin-border">
          <q-item
            :active="sortBy === 'createdAt'"
            active-class="activeSort"
            clickable
            v-close-popup
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
                :name="sortDirection === 'asc' ? 'north_east' : 'south_east'"
                size="14px"
                class="col"
              />
            </q-item-section>
          </q-item>
          <q-item
            :active="sortBy === 'title'"
            active-class="activeSort"
            clickable
            v-ripple
            v-close-popup
            @click="handleSetCurrentSortBy('title')"
          >
            <q-item-section avatar>
              <q-icon name="sort_by_alpha" class="col" />
            </q-item-section>
            <q-item-section> Title</q-item-section>
            <q-item-section side>
              <q-icon
                v-if="sortBy === 'title'"
                :name="sortDirection === 'asc' ? 'north_east' : 'south_east'"
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
            v-close-popup
            @click="handleSetCurrentSortBy('updatedAt')"
          >
            <q-item-section avatar>
              <q-icon name="update" />
            </q-item-section>
            <q-item-section> Updated</q-item-section>
            <q-item-section side>
              <q-icon
                v-if="sortBy === 'updatedAt'"
                :name="sortDirection === 'asc' ? 'north_east' : 'south_east'"
                size="14px"
                class="col"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "FilterBar",
  components: {},
  data() {
    return {
      labelClick: false,
      colorClick: false,
    };
  },
  computed: {
    ...mapGetters("app", ["colors", "tags"]),
    ...mapState("app", ["labelFilter", "sortBy", "sortDirection", "themes"]),
    displayColor() {
      let filterColors = [];
      this.colors.forEach((color) => {
        filterColors.push(color.val);
      });
      return filterColors;
    },
    labelChipLabel() {
      if (
        this.labelFilter === "all" ||
        this.labelFilter === "favorite" ||
        this.labelFilter === "archive" ||
        this.labelFilter.startsWith("color:")
      ) {
        return "Tags";
      } else {
        return this.labelFilter;
      }
    },
  },
  mounted() {},
  methods: {
    ...mapActions("app", ["setLabelFilter", "setSortBy"]),
    handleFilter(filter) {
      this.colorClick = false;
      this.labelClick = false;
      this.sortClick = false;
      this.setLabelFilter(filter);
    },
    handleClearFilter() {
      this.setLabelFilter("all");
    },
    handleSetTagFilter(tag) {
      this.setLabelFilter(tag);
    },
    handleSetColorFilter(color) {
      this.setLabelFilter(color);
    },
    handleSetCurrentSortBy(val) {
      this.setSortBy(val);
    },
  },
};
</script>

<style scoped>
.activeSort {
  color: #9c27b0;
}
</style>
