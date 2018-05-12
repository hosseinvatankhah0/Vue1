<template>
  <v-layout>
    <v-flex xs4 offset-xs4>
      <Panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
            autocomplete
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div v-html="error" class="danger-alert"></div>
        <br>
        <v-btn color="cyan darken-3" dark @click="register">Register</v-btn>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import athenticationservice from '@/services/authenticationservice'
import Panel from '@/components/Panel'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await athenticationservice.register({
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
/*  .error {
    color: white;
  }*/
</style>
