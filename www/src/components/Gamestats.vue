<template>
    <div class="mystats">

        <h2>Leader Board</h2>
        <table class="leaders">
            <tr>
                <th class="wide">Name</th>
                <th class="narrow">Wins</th>
            </tr>

            <tr v-for="leader in gamestats">
                <td class="">{{ leader.name }}</td>
                <td class="">{{ leader.wins }}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'gamestats',
        // props: ['statProp'],


        data() {
            return {
                msg: "Messages go here",
                stats: '',
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
    .mystats {
        margin-top:-100px;
        width: 400px;
        margin-left:40%;
        text-align: center;
    }

    table {
        text-align: center;
        width: 250px;
        border: 1px solid black;
        margin-left: auto;
        margin-right: auto; 
    }

    h2 {
        color: Yellow;
    }

    th {
        text-align: center;
        font-size: 36px;
        color: red;
        border: 1px solid black;
    }

    td {
        font-size: 26px;
        border: 1px solid black;
        color: green;
    }
</style>