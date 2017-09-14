<template>
  <v-app dark toolbar>
    <v-navigation-drawer v-if="loggedIn" dark temporary v-model="drawer" light overflow absolute>
      <v-list class="pa-1">
        <v-list-tile-avatar tile>
          <!-- https://randomuser.me/api/portraits/men/85.jpg -->
          <img src="https://i.imgur.com/VFfIiXb.png" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ username }}</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <div v-for="item in items" :key="item.title">
          <router-link :to="item.routerLink">
            <v-list-tile @click="" class="no-underline">
              <v-list-tile-action>
                <v-icon class="no-underline">{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="blue darken-1" dark>
      <v-toolbar-side-icon v-if="loggedIn" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-if="!login" class="title slideInRight">GridWorks Games</v-toolbar-title>

      <div class="slideInRight" v-if="toggle">

        <v-btn icon @click="toggleLogin">
          <v-icon>fa-terminal</v-icon>
        </v-btn>

      </div>
      <div class="slideInLeft" v-if="!toggle">

        <v-btn icon @click="toggleLogin">
          <v-icon>close</v-icon>
        </v-btn>

      </div>

      <div class="slideInLeft" v-if="login">
        <!-- LOG-IN BUTTON ON NAVBAR -->

        <div v-if="!loggedIn" class="text-xs-center login-button">
          <v-menu offset-x :close-on-content-click="false" :nudge-width="200" v-model="logInMenu">
            <v-btn flat dark slot="activator">Log In</v-btn>
            <v-card>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar tile>
                    <img src="https://i.imgur.com/VFfIiXb.png" alt="John">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Log In</v-list-tile-title>
                    <v-list-tile-sub-title>Register for GridWorks Games</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>


              <v-card-actions>
                <form @submit.prevent="">

                  <v-text-field class="flipInX" type="text" placeholder="Username" v-model="accountUser.name"></v-text-field>

                  <v-text-field class="flipInX" type="password" placeholder="Password" v-model="accountUser.password"></v-text-field>

                  <v-btn flat class="flipInX" type="submit" @click.prevent="userLogin()">Log Me In</v-btn>

                </form>

              </v-card-actions>


            </v-card>
          </v-menu>
        </div>

      </div>
      <div class="slideInLeft" v-if="login">

        <!-- REGISTER BUTTON ON NAVBAR -->
        <div v-if="!loggedIn" class="text-xs-center">
          <v-menu offset-x :close-on-content-click="false" :nudge-width="200" v-model="registerMenu">
            <v-btn flat dark slot="activator">Register</v-btn>
            <v-card>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar tile>
                    <img src="https://i.imgur.com/VFfIiXb.png" alt="John">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Log In</v-list-tile-title>
                    <v-list-tile-sub-title>Register for GridWorks Games</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>



              <v-card-actions>
                <form @submit.prevent="">

                  <!-- REGISTER -->
                  <v-text-field required class="flipInX" type="text" placeholder="Username" v-model="newAccountUser.name"></v-text-field>

                  <v-text-field required class="flipInX" type="text" placeholder="email" v-model="newAccountUser.email"></v-text-field>

                  <v-text-field required class="flipInX" type="password" placeholder="Password" v-model="newAccountUser.password"></v-text-field>

                  <v-btn flat class="flipInX" type="submit" @click.prevent="userRegister()">Register Me</v-btn>

                </form>
              </v-card-actions>

            </v-card>
          </v-menu>
        </div>

      </div>
      <!-- v-if="showLogout" -->
      <form v-if="login" @submit.prevent="userLogout">
        <v-btn v-if="loggedIn" flat class="slideInLeft" type="submit">Log Me Out</v-btn>
      </form>

    </v-toolbar>
    <main>
      <v-container fluid>

        <router-view></router-view>

      </v-container>
    </main>
  </v-app>
</template>

<script>
  import Home from './components/Home'
  import Battlestations from './components/Battlestations/Battlestations'
  import Mastermind from './components/Mastermind'
  import Gamestats from './components/Gamestats'

  export default {
    components: {
      Home,
      Battlestations,
      Mastermind,
      Gamestats
    },
    mounted() {
      this.$store.dispatch('authenticate')
      this.$store.dispatch('getLeaderBoard')
    },
    data() {
      return {
        register: false,
        login: false,
        toggle: true,
        accountUser: {
          name: '',
          password: ''
        },
        newAccountUser: {
          name: '',
          email: '',
          password: ''
        },
        registerMenu: false,
        logInMenu: false,
        clipped: false,
        drawer: null,
        fixed: false,
        showLogout: false,
        items: [
          { icon: 'person_pin', title: "Home", routerLink: '/' },
          { icon: 'videogame_asset', title: "Battlestations Game", routerLink: '/Battlestations/Battlestations' },
          { icon: 'videogame_asset', title: "Mastermind Game", routerLink: '/Mastermind' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },

    computed: {
      loggedIn() {
        return this.$store.state.loggedIn
      },
      username() {
        return this.$store.state.activeUser.name
      },
      getLeaderBoard() {
        this.$store.dispatch('getLeaderBoard');
      },

  
    },

    methods: {
      
      userLogout() {
        this.$store.dispatch('logout', this.accountUser)
      },

      userLogin() {
        var user = { user: this.accountUser.name, password: this.accountUser.password }
        this.$store.dispatch('login', user).then(() => {
          this.resetFields()
        })
      },

      userRegister() {
        this.$store.dispatch('register', this.newAccountUser).then(() => {
          this.resetFields()
        })
      },

      resetFields() {
        this.accountUser.name = '';
        this.accountUser.password = '';
      },

      logout() {
        this.$store.dispatch('logout')
      },

      toggleLogin() {
        this.login = !this.login;
        this.toggle = !this.toggle
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

  }

</script>
<style scoped>
  * {
    text-decoration: none !important;
  }

  /* .leader {
    text-align: center;
    margin: 0, 500px, 0, 500px;
  } */

  Gamestats {
    text-align: center;
    margin: 0, 500px, 0, 500px;
    color: red;
  }

  h6 {
    color: green;
  }

  .title {
    margin-right: auto;
  }

  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInLeft {
    animation-name: slideInLeft;
    animation-duration: 500ms;
  }

  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInRight {
    animation-name: slideInRight;
    animation-duration: 500ms;
  }
</style>

<style lang="stylus">
  @import './stylus/main'
</style>