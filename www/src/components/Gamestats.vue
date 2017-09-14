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

        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon class="light-blue--text">fa-trophy</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Name</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-content>
                    <v-list-tile-title>Wins</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-content>
                    <v-list-tile-title>Games Played</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar v-for="item in gamestats" v-bind:key="item.title" @click="">
                <v-list-tile-action>
                    <v-icon class="pink--text">star</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.name"></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.wins"></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.gamesPlayed"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>



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
                        value: 'wins'
                    },
                    {
                        text: 'Games Played',
                        align: 'left',
                        sortable: false,
                        value: 'gamesPlayed'
                    }
                ]
            }
        },

        mounted() {
            return this.$store.state.leaderBoard;
        },

        computed: {
            gamestats() {
                return this.$store.state.leaderBoard;
            },
        },

        methods: {

        }
    }

</script>

<style scoped>

</style>