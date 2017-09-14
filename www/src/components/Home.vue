<template>
  <v-layout row wrap>
    <img v-if="!loggedIn" class="floating-logo" src="https://i.imgur.com/VFfIiXb.png">

    <v-flex v-if="loggedIn" xs12 sm4 m4 lg4>

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
              <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="100" v-model="activeUserLevelProgress" class="teal--text">
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
        if (this.$store.state.activeUser.wins >= 0 && this.$store.state.activeUser.wins <= 10) {
          return '1'
        } else if (this.$store.state.activeUser.wins > 10 && this.$store.state.activeUser.wins <= 25) {
          return '2'
        } else if (this.$store.state.activeUser.wins > 25 && this.$store.state.activeUser.wins <= 50) {
          return '3'
        } else if (this.$store.state.activeUser.wins > 50 && this.$store.state.activeUser.wins <= 100) {
          return '4'
        } else if (this.$store.state.activeUser.wins > 100 && this.$store.state.activeUser.wins <= 200) {
          return '5'
        } else if (this.$store.state.activeUser.wins > 200 && this.$store.state.activeUser.wins <= 300) {
          return '6'
        } else if (this.$store.state.activeUser.wins > 300 && this.$store.state.activeUser.wins <= 400) {
          return '7'
        } else if (this.$store.state.activeUser.wins > 400 && this.$store.state.activeUser.wins <= 500) {
          return '8'
        } else if (this.$store.state.activeUser.wins > 500 && this.$store.state.activeUser.wins <= 600) {
          return '9'
        } else if (this.$store.state.activeUser.wins > 600 && this.$store.state.activeUser.wins <= 700) {
          return '10'
        }
      },
      activeUserLevelProgress() {
        let wins = parseInt(this.$store.state.activeUser.wins)
        //console.log(wins)

        if (wins >= 0 && wins <= 10) {
          return (wins / 10)
        } else if (wins > 10 && wins <= 25) {
          return (wins / 25)
        } else if (wins > 25 && wins <= 50) {
          return (wins / 50)
        } else if (wins > 50 && wins <= 100) {
          return (wins / 100)
        } else if (wins > 100 && wins <= 200) {
          return (Math.round((wins / 200) * 100))
        } else if (wins > 200 && wins <= 300) {
          return (wins / 300)
        } else if (wins > 300 && wins <= 400) {
          return (wins / 400)
        } else if (wins > 400 && wins <= 500) {
          return (wins / 500)
        } else if (wins > 500 && wins <= 600) {
          return (wins / 600)
        } else if (wins > 600 && wins <= 700) {
          return (wins / 700)
        }
      },


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