<template>
  <v-layout row wrap>
    <v-flex lg4 xs12 sm4 m4>

      <v-card dark hover class="flipInX">
        <v-list>
          <v-list-tile avatar size="256px">
            <v-list-tile-avatar>
              <img src="https://i.imgur.com/BkpFnNP.jpg" alt="Profile Pic">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{this.$store.state.activeUser1.name}}</v-list-tile-title>
              <v-list-tile-sub-title>Level: {{this.$store.state.activeUser1.level}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>

          <v-list-tile>
            <v-list-tile>
              <v-icon>fa-trophy</v-icon>
            </v-list-tile>
            <v-list-tile-title>Games Won: {{this.$store.state.activeUser1.wins}}</v-list-tile-title>
          </v-list-tile>
          
          <v-list-tile>
              <v-list-tile>
                <v-icon>fa-gamepad</v-icon>
              </v-list-tile>
              <v-list-tile-title>Games Played: {{this.$store.state.activeUser1.gamesplayed}}</v-list-tile-title>
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
  /* ANIMATIONS */

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