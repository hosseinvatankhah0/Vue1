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
                      @click="navigateTo({name: 'song', params:{songID: song.id}})"
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
                    <v-btn icon @click.native="show = !show">
                      <v-icon color="cyan darken-4">
                        {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                      </v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-slide-y-transition>
                    <v-card-text v-show="show">
                      {{song.lyrics}}
                    </v-card-text>
                  </v-slide-y-transition>
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
        show: false
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

</style>
