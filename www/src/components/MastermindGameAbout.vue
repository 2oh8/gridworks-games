<template>
    <div class="gamedata">
        <h3>Mastermind</h3>
        <h5>Description: {{msg1}}</h5>
        <p></p>
        <p>{{msg2}}</p>
    </div>
</template>

<script>
    export default {
        name: 'mastermindgameabout',

        data() {
            return {
                msg1: "Mastermind is a grid game. The object is to figure out the code before you run out of moves or time!",
                msg2: ""
            }
        },

        mounted() {

        },

        computed: {

        },

        methods: {

        }
    }

</script>

<style scoped>
    .gamedata{
        width: 400px;
        text-align: center;
    }
</style>