<template>
  <v-layout>
    <v-flex xs5>
      <div>
        <Panel title="Song Metadata">
          <v-text-field
            required
            :rules="[required]"
            label="Title"
            v-model="song.title">
          </v-text-field>

          <v-text-field
            label="Artist"
            v-model="song.artist">
          </v-text-field>

          <v-text-field
            label="Genre"
            v-model="song.genre">
          </v-text-field>

          <v-text-field
            label="Album"
            v-model="song.album">
          </v-text-field>

          <v-text-field
            label="Album Image Url"
            v-model="song.albumImageUrl">
          </v-text-field>

          <v-text-field
            label="Youtube Id"
            v-model="song.youtubeId">
          </v-text-field>
        </Panel>
      </div>
    </v-flex>
    <v-flex xs8 class="ml-2">
      <Panel title="Song Structure">
        <v-text-field
          multi-line
          label="Lyrics"
          v-model="song.lyrics">
        </v-text-field>

        <v-text-field
          multi-line
          label="Tab"
          v-model="song.tab">
        </v-text-field>
      </Panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn color="cyan darken-3" dark @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  name: 'CreateSong',
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!(value) || 'Required.'
    }
  },
  methods: {
    // call api1
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
