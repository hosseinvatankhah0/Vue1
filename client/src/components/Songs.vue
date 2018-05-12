<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="cyan darken-3"
          dark
          small
          right
          middle
          fab
          absolute>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
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
                    <v-spacer></v-spacer>
                    <v-btn
                      slot="action"
                      @click="navigateTo({name: 'song', params:{songId: song.id}})"
                      class="cyan darken-3"
                      dark
                      small
                      right
                    > view
                    </v-btn>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn icon>
                      <v-icon color="blue-grey">favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="blue-grey">bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="blue-grey">share</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-expansion-panel>
                      <v-expansion-panel-content v-for="(item,i) in 1" :key="i" color="cyan darken-4" icon >
                        <div slot="header" >lyric</div>
                        <v-card>
                          <v-card-text class="grey lighten-3">
                            {{song.lyrics}}
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </continer>
          <br>
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null,
      show: null
    }
  },
  async mounted () {
    // do request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.lyric{
  width: 150px;
  color: cornflowerblue;
}
</style>
