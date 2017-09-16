<template>
    <v-layout row wrap>
        <img v-if="lose" src="https://i.imgur.com/OaEZOLs.png" id="zach" class="rotateIn">
        <img v-if="loseSpeech" src="https://i.imgur.com/sHZI71W.gif" id="zach-speech-one">
        <v-btn v-show="!lose" ref="markButton" id="Mark" @click="click('Mark')"><img src="https://i.imgur.com/pdjXi5h.png" class="head-img"></v-btn>
        <v-btn v-show="!lose" ref="jakeButton" id="Jake" @click="click('Jake')"><img src="https://i.imgur.com/Wpugacz.png" class="head-img"></v-btn>
        <v-btn v-show="!lose" class="elevation-24 bounceIn" fab id="center" @click="startJakeSays"><img src="https://i.imgur.com/VFfIiXb.png" class="codeworks-center-logo"></v-btn>
        <v-btn v-show="!lose" ref="darrylButton" id="Darryl" @click="click('Darryl')"><img src="https://i.imgur.com/1j3KXnI.png" class="head-img"></v-btn>
        <v-btn v-show="!lose" ref="justinButton" id="Justin" @click="click('Justin')"><img src="https://i.imgur.com/AVMVYxV.png" class="head-img"></v-btn>


        <audio  id="MarkAudio" src="../assets/Mark.mp3" type="audio/mp3"></audio> 
        <audio  id="JakeAudio" src="../assets/Jake.mp3" type="audio/mp3"></audio>
        <audio  id="DarrylAudio" src="../assets/Darryl.mp3" type="audio/mp3"></audio> 
        <audio  id="JustinAudio" src="../assets/Justin.mp3" type="audio/mp3"></audio>
    </v-layout>
</template>

<script>
    export default {
        name: 'jakesays',

        data() {
            return {
                clicks: 0,
                jakeSaysCode: [],
                userInput: [],
                buttonIndex: [],
                round: 1,
                lose: false,
                loseSpeech: false
            }
        },

        methods: {

            startJakeSays() {
                console.log('Starting the Game!')
                this.jakeSaysCode = [];
                this.buttonIndex = [];
               
                this.generateJakeSaysCode()
            },

            generateJakeSaysCode() {

                // This should generate the whole array of guesses from the start then have a seperate function to check the guess pattern
                console.log('Generating the Code!')
                for (var i = 0; i < 5; i++) {
                    var selectedButtons = this.buttonIndex.push((Math.floor(Math.random() * 4)) + 1);
                }

                for (var i = 0; i < this.buttonIndex.length; i++) {
                    if (this.buttonIndex[i] === 1) {
                        this.jakeSaysCode.push('Mark')
                    } if (this.buttonIndex[i] === 2) {
                        this.jakeSaysCode.push('Jake')
                    } if (this.buttonIndex[i] === 3) {
                        this.jakeSaysCode.push('Darryl')
                    } if (this.buttonIndex[i] === 4) {
                        this.jakeSaysCode.push('Justin')
                    }
                }
                console.log(this.jakeSaysCode);
                this.displayJakeSaysCode()

            },
            playCombo(i) {
                var elem = document.getElementById(this.jakeSaysCode[i])
                elem.style.opacity = 0.25
                document.getElementById(this.jakeSaysCode[i] + 'Audio').play();
                setTimeout(() => {
                    elem.style.opacity = 1
                    this.displayJakeSaysCode(++i)
                }, 500);
            },

            displayJakeSaysCode(i) {
                i = i || 0
                console.log('i: ', i, "round: ", this.round)
                if (i < this.jakeSaysCode.length && this.round > i) {
                    setTimeout(() => {
                        this.playCombo(i)
                    }, 500)
                } else {
                    this.userInput = []
                }

            },
            checkUserInput() {
                var i = this.userInput.length - 1
                if (this.userInput[i] === this.jakeSaysCode[i]) {
                    if (this.userInput.length == this.round) {
                        if (this.round == this.jakeSaysCode.length) {
                            alert("YOU WON")
                        } else {
                            this.round++
                            this.displayJakeSaysCode()
                        }
                    }
                } else {
                    this.lose = true
                    setTimeout(() => {
                        this.loseSpeech = true
                    }, 1000)
                }

            },
            //these should add to user array not jsc array of solution
            click(input) {
                document.getElementById(input + 'Audio').play();
                document.getElementById(input).style.opacity = 0.25
                setTimeout(() => {
                    document.getElementById(input).style.opacity = 1
                }, 200);
                this.userInput.push(input)
                console.log(this.userInput)
                this.checkUserInput()
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .codeworks-center-logo {
        height: 15vw;
        transform: rotate(90deg);
        margin-bottom: 1rem;
    }

    .head-img {
        height: 15rem;
    }

    #zach {
        top: 10vw;
        height: 30rem;
        bottom: 50%;
        left: 50%;
        position: fixed;
        transform: translate(-50%, 50%);
        z-index: 5;
        animation-name: rotateIn;
        animation-duration: 1500ms;
    }
    #zach-speech-one {
        height: 20vw;
        left: 50%;
        transform: translate(-50%, 50%);
        position: fixed;
    }

    #center {
        height: 30vw;
        width: 30vw;
        bottom: 50%;
        left: 50%;
        position: fixed;
        transform: translate(-50%, 50%);
        z-index: 3;
        background: url('https://i.imgur.com/Tx428Ot.gif') center center;
        background-size: cover;
        border: hidden;
        cursor: pointer;
        outline: none;
    }

    #Mark {
        background: radial-gradient(#ff4081, #ff5252, #d500f9);
        width: 45vw;
        height: 45vh;
        left: 0;
        top: 0;
        position: fixed;
    }

    #Jake {
        background: radial-gradient(#536dfe, #448aff, #6200ea);
        width: 45vw;
        height: 45vh;
        right: 0;
        top: 0;
        position: fixed;
    }

    #Darryl {
        background: radial-gradient( #ef6c00, #f9a825, #e65100);
        width: 45vw;
        height: 45vh;
        left: 0;
        bottom: 0;
        position: fixed;
    }

    #Justin {
        background: radial-gradient( #76ff03, #c6ff00, #00e676);
        width: 45vw;
        height: 45vh;
        right: 0;
        bottom: 0;
        position: fixed;
    }
    /* ANIMATIONS */

    @keyframes rotateIn {
        from {
            transform-origin: center;
            transform: rotate3d(0, 0, 1, -200deg);
            opacity: 0;
        }

        to {
            transform-origin: center;
            transform: translate(-50%, 50%);
            opacity: 1;
        }
    }
</style>