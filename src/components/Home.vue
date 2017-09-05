<template>
  <div class="home">
    <v-flex xs4 offset-xs4>
      <v-card dark class="white--text text-center">
        <v-layout row wrap class="text-center">
          <h5>Log In</h5>
        </v-layout>
        <v-layout row wrap class="text-center">
          <form @submit.prevent="">
            <input type="text" placeholder="Username" v-model="username">
            <v-divider></v-divider>
            <input type="text" placeholder="email" v-model="email">
            <v-divider></v-divider>
            <input type="text" placeholder="Password" v-model="password">
            <v-divider></v-divider>
            <v-btn type="submit">Log In</v-btn>
            <v-btn type="submit">Register</v-btn>
          </form>
        </v-layout>

        </v-card-title>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Home',
        username: '',
        email: '',
        password: ''
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>