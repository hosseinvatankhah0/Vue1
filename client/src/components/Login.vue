<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-3">
        <v-toolbar flat de1nse color="cyan darken-3" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <br>
          <div v-html="error" class="error"></div>
          <br>
          <v-btn color="cyan darken-3" dark @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import athenticationservice from '@/services/authenticationservice'

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login() {
        try {
          const response = await athenticationservice.login({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style scoped>
  .error {
    color: white;
  }
</style>
