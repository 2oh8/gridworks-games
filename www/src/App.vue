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
    <v-toolbar fixed class="indigo darken-1" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>GridWorks Games</v-toolbar-title>



      <!-- LOG-IN BUTTON ON NAVBAR -->

      <div v-if="!loggedIn" class="text-xs-center">
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

                <!-- register -->
                <v-text-field required class="flipInX" type="text" placeholder="Username" v-model="newAccountUser.name"></v-text-field>

                <v-text-field required class="flipInX" type="text" placeholder="email" v-model="newAccountUser.email"></v-text-field>

                <v-text-field required class="flipInX" type="password" placeholder="Password" v-model="newAccountUser.password"></v-text-field>

                <v-btn flat class="flipInX" type="submit" @click.prevent="userRegister()">Register Me</v-btn>


              </form>
            </v-card-actions>

          </v-card>
        </v-menu>
      </div>

      <!-- v-if="showLogout" -->
      <form @submit.prevent="userLogout">
        <v-btn v-if="loggedIn" flat class="flipInX" type="submit">Log Me Out</v-btn>
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
  import Dee from './components/Dee'
  import Alex from './components/Alex'
  import Matt from './components/Matt'
  import Austin from './components/Austin'
  import Josh from './components/Josh'

  export default {
    components: {
      Home,
      Dee,
      Alex,
      Matt,
      Austin,
      Josh
    },
    mounted() {
      this.$store.dispatch('authenticate')
    },
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
          { icon: 'videogame_asset', title: "Dee's Game", routerLink: '/Dee' },
          { icon: 'videogame_asset', title: "Alex's Game", routerLink: '/Alex' },
          { icon: 'videogame_asset', title: "Matt's Game", routerLink: '/Matt' },
          { icon: 'videogame_asset', title: "Austin's Game", routerLink: '/Austin' },
          { icon: 'videogame_asset', title: "Josh's Game", routerLink: '/Josh' }
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
        return this.$store.state.activeUser1.name
      }
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
        this.reg = true;
        this.log = true;
        this.login = false;
        this.register = false;
        this.accountUser.name = '';
        this.accountUser.password = '';
      },

      logout() {
        this.$store.dispatch('logout')
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

  }

</script>
<style scoped>
  * {
    text-decoration: none !important;
  }
</style>

<style lang="stylus">
  @import './stylus/main'
</style>