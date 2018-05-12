<template>
  <v-layout>
    <v-flex xs6>
      <Panel title="Song Metadata">
        <continer fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <v-card>
                <v-card-media
                  :src="song.albumImageUrl"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      {{song.title}}
                    </div>
                    <span class="grey--text">
                    {{song.artist}}
                  </span>
                  </div>
                  <v-btn flat>
                    <span>album:&nbsp;</span>
                    {{song.album}}
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </continer>
      </Panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <Panel title="Tab">
        <textarea name="" readonly v-model="song.tab" cols="90" rows="10">
          {{song.tab}}
        </textarea>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  name: 'ViewSong',
  components: {
    Panel
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
  textarea{
    overflow: auto;
    padding: 40px;
    border: none transparent;
  }
</style>
