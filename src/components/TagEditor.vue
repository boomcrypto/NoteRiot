<template>
  <q-card
    style="width: 400px; max-width: 80%; height: auto; padding: 0px"
    class="effin-border"
  >
    <div class="bottom-border-99">
      <q-card-actions style="padding: 0px">
        <q-input
          borderless
          type="text"
          placeholder="Enter a new tag name"
          v-model="newTagName"
          tag="div"
          style="padding: 4px"
          class="col"
        ></q-input>
        <q-card-section v-if="newTagName.length > 0" style>
          <div class="create-tag-same-line">
            <div class="row">
              <q-space />
              <q-btn
                outline
                no-caps
                class="create-tag-3"
                style="margin-top: 14px; margin-right: 8px; border-radius: 0px"
                @click="createTag"
                color="primary"
                text-color="white"
                label="Create"
              />
            </div>
          </div>
        </q-card-section>
      </q-card-actions>
      <q-card-section v-if="newTagName.length > 0" style="padding: 0px">
        <div class="tag-colors">
          <div class="tag-color-row">
            <div
              class="tag-color white"
              @click="newTagColor = 'white'"
              :class="newTagColor === 'white' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color orchid"
              @click="newTagColor = 'orchid'"
              :class="newTagColor === 'orchid' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color fuschia"
              @click="newTagColor = 'fuschia'"
              :class="newTagColor === 'fuschia' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color red"
              @click="newTagColor = 'red'"
              :class="newTagColor === 'red' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color orange"
              @click="newTagColor = 'orange'"
              :class="newTagColor === 'orange' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color yellow"
              @click="newTagColor = 'yellow'"
              :class="newTagColor === 'yellow' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color lime"
              @click="newTagColor = 'lime'"
              :class="newTagColor === 'lime' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color green"
              @click="newTagColor = 'green'"
              :class="newTagColor === 'green' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color teal"
              @click="newTagColor = 'teal'"
              :class="newTagColor === 'teal' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color cyan"
              @click="newTagColor = 'cyan'"
              :class="newTagColor === 'cyan' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color blue"
              @click="newTagColor = 'blue'"
              :class="newTagColor === 'blue' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color steel"
              @click="newTagColor = 'steel'"
              :class="newTagColor === 'steel' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color gray"
              @click="newTagColor = 'gray'"
              :class="newTagColor === 'gray' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color brown"
              @click="newTagColor = 'brown'"
              :class="newTagColor === 'brown' ? 'checked' : ''"
            ></div>
            <div
              class="tag-color black"
              @click="newTagColor = 'black'"
              :class="newTagColor === 'black' ? 'checked' : ''"
            ></div>
          </div>
        </div>
      </q-card-section>
    </div>
    <q-card-section style="max-height: 150px; padding: 0px" class="scroll">
      <div class="available-tags" v-if="note.keywords.length > 0">
        <div class="all-caps-action">CURRENT TAGS</div>
        <div class="available-tag-list">
          <template v-for="id in note.keywords">
            <div
              class="supercooltag"
              :class="`solo-tag tag-${tags[id].color}`"
              :key="`tagid-${id}`"
              @click="createTag"
            >
              <div
                class="solo-tag-text-2"
                :class="
                  tags[id].color === 'yellow' || tags[id].color === 'white'
                    ? 'tag-text-black'
                    : 'tag-text-white'
                "
              >
                <q-btn round flat size="6px" @click="removeTagFromNote(id)">
                  <img height="16px" src="/img/remove-tag.svg" />
                </q-btn>
                {{ tags[id].label }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </q-card-section>
    <q-card-section style="max-height: 150px; padding: 0px" class="scroll">
      <div class="available-tags">
        <div class="all-caps-action">AVAILABLE TAGS</div>
        <div class="available-tag-list">
          <template v-for="(tag, key) in tags">
            <div
              class="supercooltag"
              :class="`solo-tag tag-${tags[key].color}`"
              :key="key"
              @click="addTagToNote(key)"
            >
              <div
                class="solo-tag-text-2"
                :class="
                  tags[key].color === 'yellow' || tags[key].color === 'white'
                    ? 'tag-text-black'
                    : 'tag-text-white'
                "
              >
                {{ tags[key].label }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Done" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script>
//TODO: watch newTagName and if it is removed, clear newTagColor also
/* eslint-disable no-undef */
import { mapActions, mapState } from "vuex";
// const uuidv4 = require("uuid/v4");

export default {
  name: "TagEditor",
  props: ["note", "id"],
  components: {},
  data() {
    return {
      newTagColor: "",
      newTagName: "",
      menu: false,
      icons: [
        "bx-body",
        "bx-desktop",
        "bxs-book",
        "bxs-conversation",
        "bxs-home",
        "bxs-music",
      ],
    };
  },
  computed: {
    ...mapState(["tags"]),
    showCurrentTags() {
      if (note.keywords.length) return true;
      else return false;
    },
  },
  methods: {
    ...mapActions("notes", ["updateNote"]),
    ...mapActions("tags", ["addTag"]),
    removeTagFromNote(del) {
      console.log("removing tag: ", del);
      let noteTags = this.note.keywords.slice();
      noteTags.splice(noteTags.indexOf(del), 1);
      const payload = {
        id: this.id,
        updates: { keywords: noteTags },
      };
      this.updateNote(payload);
    },
    addTagToNote(newtag) {
      let noteTags = this.note.keywords;
      noteTags.push(newtag);
      const payload = {
        id: this.id,
        updates: {
          keywords: noteTags,
        },
      };
      this.updateNote(payload);
    },
    async createTag() {
      // add tag
      if (this.newTagName) {
        for (let key of Object.keys(this.tags)) {
          if (
            this.tags[key].label === this.newTagName &&
            this.tags[key].color === this.newTagColor
          ) {
            // found a duplicate
            this.$q.notify({
              type: "warning",
              message: "This tag already exists!",
              position: "center",
              timeout: "1500",
            });
            return;
          }
        }
        // okay to add
        let newtag = {
          label: this.newTagName,
          color: this.newTagColor,
        };
        // get id from add tag
        let newId = await this.addTag(newtag);
        // add updateNote with new tag
        this.addTagToNote(newId);
      }
    },
  },
};
</script>

<style scoped>
*:focus {
  outline: none;
}
.q-card__section {
  padding: 0px 8px 8px 8px;
}
.q-field__inner {
  padding: 0px;
}
.q-field__prepend {
  padding-right: 4px;
}

.solo-tag {
  margin-top: 8px;
  margin-bottom: 0px;
  padding: 5px;
}
</style>
