<template>
  <q-item :class="'col-xs-12 col-sm-12 col-md-12 col-lg-12 full-width'+(button_bar_visibility?' bg-pink-1':'')">
    <q-item-section top>
      <q-item-label lines="1">
              <span class="text-weight-medium text-body1">{{
                  displayTitle
                }}</span>
      </q-item-label>
      <q-item-label caption lines="1">
        <div class="timestamp">
          <span class="q-mt-md">{{ lastModified }}</span>
          <span
            :class="$q.dark.isActive ? 'toastui-editor-contents-dark q-ml-sm' : 'q-ml-sm'"
            :style="{'max-height': $q.screen.gt.sm?'30px':'30px','overflow': 'hidden'}"
          >
              <viewer :initialValue="data.text" :key="data.modified"/>
            </span>
        </div>
      </q-item-label>
    </q-item-section>
    <q-item-section
      v-if="button_bar_visibility"
      side top
    >
      <div class="row text-center q-mt-md">
        <q-btn dense round flat @click.stop="handleFave()">
          <q-icon>
            <img
              :src="
                    fave
                      ? '/images/favorited.svg'
                      : '/images/favorite-available.svg'
                  "
            />
          </q-icon>
          <q-tooltip
            anchor="bottom middle"
            self="bottom middle"
            :offset="[10, 30]"
          >
            Toggle Favorite
          </q-tooltip>
        </q-btn>
        <q-btn dense round flat @click.stop="change_tag_manager">
          <q-icon>
            <img src="/images/label.svg"/>
          </q-icon>
          <q-tooltip
            anchor="bottom middle"
            self="bottom middle"
            :offset="[10, 30]"
          >
            Manage tags
          </q-tooltip>
        </q-btn>
        <q-btn dense round flat @click.stop="downloadNote()">
          <q-icon>
            <img src="/images/download.svg"/>
          </q-icon>
          <q-tooltip
            anchor="bottom middle"
            self="bottom middle"
            :offset="[10, 30]"
          >
            Download note
          </q-tooltip>
        </q-btn>
        <q-btn dense round flat @click.stop="showColorManager">
          <q-icon>
            <img src="/images/palette.svg"/>
          </q-icon>
          <q-tooltip
            anchor="bottom middle"
            self="bottom middle"
            :offset="[10, 30]"
          >
            Change color
          </q-tooltip>
        </q-btn>
        <q-btn dense round flat @click.stop="handleShareNote()">
          <q-icon>
            <img src="/images/share.svg"/>
          </q-icon>
          <q-tooltip
            anchor="bottom middle"
            self="bottom middle"
            :offset="[10, 30]"
          >
            Share ...
          </q-tooltip>
        </q-btn>
        <div v-if="note.trash">
          <q-btn dense round flat @click.stop="restoreNote">
            <q-icon color="accent" name="img:/images/restore.svg"/>
            <q-tooltip
              anchor="bottom middle"
              self="bottom middle"
              :offset="[10, 30]"
            >
              Restore from archive
            </q-tooltip>
          </q-btn>
          <q-btn dense round flat @click.stop="permanentlyDeleteNote">
            <q-icon color="accent" name="img:/images/delete_forever.svg"/>
            <q-tooltip
              anchor="bottom middle"
              self="bottom middle"
              :offset="[10, 30]"
            >
              Permanently delete ...
            </q-tooltip>
          </q-btn>
        </div>
        <q-btn dense round flat @click.stop="archiveNote" v-else>
          <q-icon color="accent" name="img:/images/trash.svg"/>
          <q-tooltip
            anchor="bottom middle"
            self="bottom middle"
            :offset="[10, 30]"
          >
            Archive note
          </q-tooltip>
        </q-btn>
      </div>
    </q-item-section>
    <q-item-section v-else side>
      <q-icon v-if="fave">
        <img
          :src="
                    fave
                      ? '/images/favorited.svg'
                      : '/images/favorite-available.svg'
                  "
        />
      </q-icon>
    </q-item-section>
  </q-item>
</template>

<script>
import { Viewer } from "@toast-ui/vue-editor";

export default {
  name: "condensed_list_item",
  components:{
    Viewer
  },
  props:['displayTitle','lastModified', 'button_bar_visibility', 'data', 'fave', 'note'],
  methods:{
    handleFave(){
      this.$emit('handle_fave')
    },
    downloadNote(){
      this.$emit('download_note')
    },
    handleShareNote(){
      this.emit('handle_share_note')
    },
    archiveNote(){
      this.emit('archive_note')
    },
    permanentlyDeleteNote(){
      this.emit('permanently_delete_note')
    },
    restoreNote(){
      this.emit('restore_note')
    },
    change_tag_manager(){
      this.$emit('show_tag_manager')
    },
    showColorManager(){
      this.$emit('show_color_manager')
    }
  }
}
</script>

<style scoped>

</style>
