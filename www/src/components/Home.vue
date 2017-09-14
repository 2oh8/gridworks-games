<template>
  <v-layout row wrap>
    <img v-if="!loggedIn" class="floating-logo" src="https://i.imgur.com/VFfIiXb.png">

    <v-flex v-if="loggedIn" xs12 sm6 m6 lg6>

      <v-card dark hover class="flipInX">
        <v-list>
          <v-list-tile avatar size="256px">
            <v-list-tile-avatar>
              <img src="https://i.imgur.com/BkpFnNP.jpg" alt="Profile Pic">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{activeUser.name}}</v-list-tile-title>
              <v-list-tile-sub-title>Level: {{ activeUserLevel }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="100" v-model="activeUserLevelProgress" class="light-blue--text">
                {{ activeUserLevel }}
              </v-progress-circular>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>

          <v-list-tile>
            <v-list-tile>
              <v-icon>fa-trophy</v-icon>
            </v-list-tile>
            <v-list-tile-title>Games Won: {{activeUserWins}}</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile>
              <v-icon>fa-gamepad</v-icon>
            </v-list-tile>
            <v-list-tile-title>Games Played: {{activeUser.gamesPlayed}}</v-list-tile-title>
          </v-list-tile>

        </v-list>

      </v-card>

      <Gamestats class="flipInX"></Gamestats>

    </v-flex>
  </v-layout>




</template>

<script>
  import Gamestats from './Gamestats'

  export default {
    name: 'home',
    components: {
      Gamestats
    },
    data() {
      return {

      }
    },

    mounted() {

    },

    methods: {

    },

    computed: {

      activeUser() {
        return this.$store.state.activeUser
      },
      activeUserWins() {
        return this.$store.state.activeUser.wins
      },
      loggedIn() {
        return this.$store.state.loggedIn
      },
      activeUserLevel() {
        let wins = this.$store.state.activeUser.wins
        let determiner = 1000
        let level = Math.floor((wins / determiner)*100)
        if (level == 0){
         return 1 
        } else {
        } return level
      },
      activeUserLevelProgress() {
        let wins = this.$store.state.activeUser.wins
        let determiner = 1000
        let level = ((wins / determiner)*100)
        let nextLevel = ((Math.floor(level))+1)
        let progress = Math.floor((level/nextLevel)*100)
        return progress
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .floating-logo {
    height: 10rem;
    position: fixed;
    animation: moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate, rotate 10.05s infinite alternate;
  }
  /* ANIMATIONS */

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes moveX {
    from {
      left: 0rem;
    }
    to {
      left: 70%;
    }
  }

  @keyframes moveY {
    from {
      top: 4rem;
    }
    to {
      top: 80%;
    }
  }


  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
  }

  .flipInX {

    animation-name: flipInX;
    animation-duration: 750ms;
  }
</style>