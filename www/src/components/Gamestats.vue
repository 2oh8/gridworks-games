<template>
    <div class="mystats">

        
        
        <v-list>
                <v-list-tile avatar size="256px">
                  <v-list-tile-avatar tile>
                    <img src="https://i.imgur.com/VFfIiXb.png" alt="Profile Pic">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                        <h4>Leaderboard</h4>
                  </v-list-tile-content>
                  <v-list-tile-avatar tile>
                        <v-icon>fa-trophy</v-icon>
                        <v-icon>fa-list-ol</v-icon>
                  </v-list-tile-avatar>
                </v-list-tile>
              </v-list>
        <v-data-table v-bind:headers="headers" :items="gamestats" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.wins }}</td>
                <td>{{ props.item.gamesPlayed }}</td>
            </template>
        </v-data-table>



    </div>
</template>

<script>
    export default {
        name: 'gamestats',

        data() {
            return {
                stats: '',
                headers: [
                    {
                        text: 'Name',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {
                        text: 'Wins',
                        align: 'left',
                        sortable: false,
                        value: 'Wins'
                    },
                    {
                        text: 'Games Played',
                        align: 'left',
                        sortable: false,
                        value: 'Gamesplayed'
                    }
                ]
            }
        },

        mounted() {
            //this.$store.dispatch('getCurrentLeaderBoard')
            this.test();
        },

        computed: {
            gamestats() {
                return this.$store.state.leaderBoard;
            },
        },

        methods: {
            test() {
                console.log('testing: ', this.$store.state.getCurrentLeaderBoard);
            }
        }
    }

</script>

<style scoped>

</style>