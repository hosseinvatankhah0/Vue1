<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <Panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            append-icon="email"
            label="Email"
            v-model="email">
          </v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            append-icon="lock">
          </v-text-field>
          <br>
          <div v-html="error" class="error"></div>
          <br>
          <v-btn color="cyan darken-3" dark @click="login">Login</v-btn>
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import athenticationservice from '@/services/authenticationservice'
import Panel from '@/components/Panel'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await athenticationservice.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .error {
    color: white;
  }
</style>
