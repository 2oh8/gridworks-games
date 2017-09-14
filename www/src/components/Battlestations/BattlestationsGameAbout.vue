<template>
    <div class="gamedata">
        <h3>BattleStations</h3>
        <h5>Description: {{msg1}}</h5>
        <p></p>
        <p>{{msg2}}</p>
    </div>
</template>

<script>
    export default {
        name: 'battlestationsgameabout',

        data() {
            return {
                msg1: "Battlestations is a grid game. The object is to sink the enemy ships before they sink yours!",
                msg2: "Start by inputting your ship locations (start and finish) based on the grid coordinates. Click on the Place button and the enemy will place their ships as well. NOTE: you will not be able to see the enemy ships! After successfully placing your ships you can then enter shot placements and click on Attack. Enemy will follow your attack automatically with their attack. Misses are shown as an 'O' and hits are marked with an 'X' for both parties. As you sink ships, shots fired decrease. The same is true when the enemy sinks one of your ships. Further functionality will be added to be able to select difficulty and game play options."
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
        margin: auto;
    }
</style>