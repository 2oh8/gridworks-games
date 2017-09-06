<template>
  <div class="home">

    <!-- Wrap login and register card with an if - if user is logged on they don't show -->


    <v-flex xs4 offset-xs4>
      <v-card dark class="white--text text-center">

        <v-layout row wrap class="text-center">
          <!-- <h5>Log In</h5><h5 class="right">Register</h5> -->

          <div v-if="log">
            <v-btn type="btn" @click.prevent="toggleLogin()">Log In</v-btn>
          </div>

          <div v-if="reg">
            <v-btn type="btn" @click.prevent="toggleRegister()">Register</v-btn>
          </div>

        </v-layout>

        <v-layout row wrap class="text-center">

          <form @submit.prevent="">
            <div v-if="register">
              <!-- register -->
              <input type="text" placeholder="Username" v-model="accountUser.name">
              <v-divider></v-divider>
              <input type="text" placeholder="email" v-model="accountUser.email">
              <v-divider></v-divider>
              <input type="text" placeholder="Password" v-model="accountUser.password">
              <v-divider></v-divider>
              <v-btn type="submit" @click.prevent="userRegister()">Register Me</v-btn>
            </div>


            <div v-if="login">
              <input type="text" placeholder="email" v-model="accountUser.email">
              <v-divider></v-divider>

              <input type="text" placeholder="Password" v-model="accountUser.password">
              <v-divider></v-divider>
              <v-btn type="submit" @click.prevent="userLogin()">Log Me In</v-btn>
            </div>
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
        register: false,
        login: false,
        log: true,
        reg: true,
        msg: 'Home',
        showCard: false,
        accountUser: {
          name: '',
          email: '',
          password: ''
        }

      }
    },

    mounted() {

    },

    methods: {
      userLogin() {
        var user = { email: this.accountUser.email, password: this.accountUser.password }
        this.$store.dispatch('login', user).then(() => {
          this.resetFields()
        })
      },

      userRegister() {
        this.$store.dispatch('register', this.accountUser).then(() => {
          this.resetFields()
        })
      },

      resetFields() {
        this.reg = true;
        this.log = true;
        this.login = false;
        this.register = false;
        this.accountUser = {};
      },

      logout() {
        this.$store.dispatch('logout', this.accountUser)
      },

      toggleLogin() {
        this.login = !this.login;

        if (this.login == false) {
          this.reg = true;
        } else {
          this.reg = false;
        }
      },

      toggleRegister() {
        this.register = !this.register
        if (this.register == false) {
          this.log = true;
        } else {
          this.log = false;
        }
      }

    },

    computed: {
      activeUser() {
        if (this.$store.state.activeUser1.name != '') {
          showCard = true;
        } else {
          showCard = false;
        }
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