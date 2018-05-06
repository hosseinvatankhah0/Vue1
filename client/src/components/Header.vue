<template>
  <v-toolbar fixed color="cyan darken-3" dark>
    <v-toolbar-title class="home mr-4" @click="navigateTO({name: 'root'})">
      TabTracker
    </v-toolbar-title>
<!--      <v-toolbar-items>
        <v-btn flat dark>
          <v-icon>browse</v-icon>
        </v-btn>
      </v-toolbar-items>-->

      <v-spacer></v-spacer>

      <v-toolbar-items>
          <v-btn flat dark
          @click="navigateTO({name: 'login'})">
            Login
          </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
          <v-btn flat dark
          @click="navigateTO({name: 'register'})">
            Sign Up
          </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
    export default {
      name: "Header",
      methods:{
        navigateTO(route) {
          this.$router.push(route)
        }
      }
    }
</script>

<style scoped>
.home{
  cursor: pointer;
}
.home:hover{
  color: #a9d3f4;
}
</style>
