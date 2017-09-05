<template>
  <v-app id="example-2" dark toolbar>
    <v-navigation-drawer temporary v-model="drawer" light overflow absolute>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Current User</v-list-tile-title>
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
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
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
    }
  }

</script>
<style>
  * {
    text-decoration: none !important;
  }
</style>

<style lang="stylus">
  @import './stylus/main'
</style>