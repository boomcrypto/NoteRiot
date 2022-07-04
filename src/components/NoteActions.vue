<template>
  <div>
    <div class="grid-icons">
      <div id="fave" @click.stop="handleFave">
        <img
          :src="
            note.isFavorite
              ? '/images/favorited.svg'
              : '/images/favorite-available.svg'
          "
        />
      </div>
    </div>
    <NoteMenu :note="note" :id="note.id" />
  </div>
</template>

<script>
import NoteMenu from "components/NoteMenu.vue";
import { mapActions } from "vuex";

export default {
  components: {
    NoteMenu,
  },
  props: ["note"],
  data() {
    return {
      buttonBarVisibility: "none",
      payload: {},
    };
  },
  methods: {
    ...mapActions({
      updateNote: "notes/updateNote",
    }),
    async handlePin() {
      this.payload = {
        id: this.note.id,
        updates: { isPinned: !this.note.isPinned },
      };
      this.updateNote(this.payload);
    },
    handleFave() {
      this.payload = {
        id: this.note.id,
        updates: { isFavorite: !this.note.isFavorite },
      };
      this.updateNote(this.payload);
    },
  },
};
</script>

<style></style>
