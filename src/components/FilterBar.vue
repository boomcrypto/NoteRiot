<template>
  <div class="text-center">
    <q-btn-group outline>
      <q-btn
        dense
        round
        size="sm"
        unelevated
        color="primary"
        text-color="accent"
        outline
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
        dense
        no-caps
        outline
        color="primary"
        text-color="accent"
        label="Favorite"
        @click="handleFilter('favorite')"
      />
      <q-btn
        dense
        no-caps
        outline
        color="primary"
        text-color="accent"
        label="Archive"
        @click="handleFilter('archive')"
      />
      <q-btn-dropdown
        dense
        no-caps
        outline
        color="primary"
        text-color="accent"
        auto-close
        :label="labelChipLabel"
      >
        <q-list class="effin-border">
          <q-item
            clickable
            v-close-popup
            @click="handleFilter(tag)"
            v-for="tag in allTags"
            :key="`labelfilter-${tag}`"
          >
            <q-item-section>
              <q-item-label>{{ tag }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown
        dense
        no-caps
        outline
        color="primary"
        text-color="accent"
        auto-close
        label="Colors"
      >
        <q-list class="effin-border">
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
      </q-btn-dropdown>
      <q-btn-dropdown
        dense
        no-caps
        outline
        color="primary"
        text-color="accent"
        label="Sort"
      >
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
      </q-btn-dropdown>
    </q-btn-group>
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
    ...mapGetters("app", ["colors", "allTags"]),
    ...mapState("app", ["labelFilter", "sortBy", "sortDirection", "themes"]),
    labelChipLabel() {
      const defaultLabel = "Tags";
      let taglen = 4;
      this.allTags.forEach((tag) => {
        if (tag.length > taglen) {
          taglen = tag.length;
        }
      });
      if (
        this.labelFilter === "all" ||
        this.labelFilter === "favorite" ||
        this.labelFilter === "archive" ||
        this.labelFilter.startsWith("color:")
      ) {
        // const tagextrachars = Math.ceil((taglen - 4) / 2);
        // console.log("tagextrachars", tagextrachars);
        // // return "Tags".padStart(tagextrachars, " ").padEnd(tagextrachars, " ");
        // let paddedStart = "Tags".padStart(tagextrachars + 4);
        // let padded = paddedStart.padEnd(2 * tagextrachars + 4);
        return defaultLabel.padEnd(taglen);
      } else {
        const tagextrachars = Math.ceil((taglen - this.labelFilter.length) / 2);
        console.log("tagextrachars", tagextrachars);

        return this.labelFilter
          .padStart(tagextrachars, " ")
          .padEnd(tagextrachars, " ");
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
    handleSetCurrentSortBy(color) {
      this.setSortBy(color);
    },
  },
};
</script>

<style scoped>
.activeSort {
  color: #9c27b0;
}
</style>
