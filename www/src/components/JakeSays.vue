<template>
    <v-layout row wrap>
        <v-btn id="one">Test</v-btn>
        <v-btn id="two">Test</v-btn>
        <v-btn fab id="center"><img src="https://i.imgur.com/VFfIiXb.png" class="codeworks-center-logo"></v-btn>
        <v-btn id="three">Test</v-btn>
        <v-btn id="four">Test</v-btn>
    </v-layout>
</template>

<script>
    export default {
        name: 'jakesays',
        
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .codeworks-center-logo {
        height: 15vw;
        transform: rotate(90deg);
        margin-bottom: 1rem;
    }
    #center {
        height: 30vw;
        width: 30vw;
        bottom: 50%;
        left: 50%;
        position: fixed;
        transform: translate(-50%, 50%);
        z-index: 99;
        background: url('https://i.imgur.com/Tx428Ot.gif') center center;
        background-size: cover;
    }
    #one {
        background: red;
        width: 45vw;
        height: 45vh;
        left: 0;
        top: 0;
        position: fixed;
    }
    #two {
        background: blue;
        width: 45vw;
        height: 45vh;
        right: 0;
        top: 0;
        position: fixed;
    }
    #three {
        background: yellow;
        width: 45vw;
        height: 45vh;
        left: 0;
        bottom: 0;
        position: fixed;
    }
    #four {
        background: green;
        width: 45vw;
        height: 45vh;
        right: 0;
        bottom: 0;
        position: fixed;
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