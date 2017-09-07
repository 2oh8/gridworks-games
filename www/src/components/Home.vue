<template>
  <v-layout row wrap>
    <img v-if="!loggedIn" class="floating-logo" src="https://i.imgur.com/VFfIiXb.png">

    <v-flex v-if="loggedIn" lg4 xs12 sm4 m4>

      <v-card dark hover class="flipInX">
        <v-list>
          <v-list-tile avatar size="256px">
            <v-list-tile-avatar>
              <img src="https://i.imgur.com/BkpFnNP.jpg" alt="Profile Pic">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{activeUser.name}}</v-list-tile-title>
              <v-list-tile-sub-title>Level: {{activeUser.level}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>

          <v-list-tile>
            <v-list-tile>
              <v-icon>fa-trophy</v-icon>
            </v-list-tile>
            <v-list-tile-title>Games Won: {{activeUser.wins}}</v-list-tile-title>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile>
              <v-icon>fa-gamepad</v-icon>
            </v-list-tile>
            <v-list-tile-title>Games Played: {{activeUser.gamesplayed}}</v-list-tile-title>
          </v-list-tile>

        </v-list>

      </v-card>
    </v-flex>
  </v-layout>


</template>

<script>
  export default {
    name: 'home',
    data() {
      return {

        showCard: false,

      }
    },

    mounted() {

    },

    methods: {

    },

    computed: {
      activeUser() {
        return this.$store.state.activeUser1
      },
      loggedIn() {
        return this.$store.state.loggedIn
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