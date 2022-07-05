<template>
  <q-card
    class="new-note-editor"
    style="width: auto; min-width: 300px; margin: 16px"
  >
    <q-card-section>
      <div class="tag-manager-text">Tag manager</div>
    </q-card-section>
    <q-card-section>
      <div
        clickable
        v-ripple
        v-for="tag in tags"
        :key="tag.tagid"
        style="display: flex"
      >
        <div
          class="solo-tag"
          :class="`tag-${tag.color}`"
          :key="tag.tagid"
          style="margin-bottom: 8px"
        >
          <div
            class="solo-tag-text"
            :class="
              tag.color === 'white' || tag.color === 'yellow'
                ? 'tag-text-black'
                : 'tag-text-white'
            "
          >
            {{ tag.name }}
          </div>
        </div>
        <q-btn-dropdown
          flat
          size="xs"
          icon="circle_outline"
          style="float: right"
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="color in colors"
              :key="`mgr-tag-${color}`"
            >
              <q-item-section>
                <q-item-label>
                  <q-icon name="circle" class="tag-color" :class="color" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" class="save" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TagManager",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      tags: "tags",
    }),
  },
  methods: {},
};
</script>

<style scoped>
.save {
  font-family: "IBM Plex Sans", sans-serif;
  color: #c079ba;
  font-size: 14px;
  line-height: 18px;
}
</style>
