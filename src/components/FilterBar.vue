<template>
  <div class="row q-gutter-md">
    <q-btn
      round
      unelevated
      @click="handleClearFilter"
      icon="img:/images/bx-x-circle.svg"
      v-if="labelFilter !== 'all'"
    />
    <q-btn
      rounded
      outline
      color="accent"
      icon="img:/images/favorite-available.svg"
      label="Favorites"
      @click="handleFilter('favorite')"
    />
    <q-btn
      rounded
      outline
      color="accent"
      icon="img:/images/archive.svg"
      label="Archives"
      @click="handleFilter('archive')"
    />
    <q-btn
      rounded
      outline
      color="accent"
      icon="img:/images/label.svg"
      :label="labelChipLabel"
      :icon-right="labelClick ? 'expand_less' : 'expand_more'"
      @click="labelClick = !labelClick"
    >
      <q-menu>
        <q-list>
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
      rounded
      outline
      icon="img:/images/color-wheel.jpg"
      label="Colors"
      :icon-right="labelClick ? 'expand_less' : 'expand_more'"
      color="accent"
    >
      <q-menu>
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="handleFilter(`color:${color}`)"
            v-for="color in colors"
            :key="`colorfilter-${color}`"
          >
            <q-item-section>
              <q-item-label>{{ color }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-btn
      dense
      outline
      rounded
      color="accent"
      label="Sort"
      icon="img:/images/sort.svg"
    >
      <q-menu>
        <q-card flat class="boom-card">
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
                  :name="sortDirection === 'asc' ? 'north_east' : 'south_east'"
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
        </q-card>
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
    };
  },
  computed: {
    ...mapGetters("app", ["colors", "tags"]),
    ...mapState("app", ["labelFilter", "sortBy", "sortDirection"]),
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

<style scoped></style>
