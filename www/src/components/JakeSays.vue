<template>
    <v-layout row wrap>
        <v-btn ref="markButton" id="Mark" @click="click('Mark')"><img src="https://i.imgur.com/pdjXi5h.png" class="head-img"></v-btn>
        <v-btn ref="jakeButton" id="Jake" @click="click('Jake')"><img src="https://i.imgur.com/Wpugacz.png" class="head-img"></v-btn>
        <v-btn class="elevation-24" fab id="center" @click="startJakeSays"><img src="https://i.imgur.com/VFfIiXb.png" class="codeworks-center-logo"></v-btn>
        <v-btn ref="darrylButton" id="Darryl" @click="click('Darryl')"><img src="https://i.imgur.com/1j3KXnI.png" class="head-img"></v-btn>
        <v-btn ref="justinButton" id="Justin" @click="click('Justin')"><img src="https://i.imgur.com/AVMVYxV.png" class="head-img"></v-btn>
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
                choices: []
            }
        },

        methods: {

            startJakeSays() {
                //clearing previous data and starting new generation of data
                console.log('Starting the Game!')
                // this.userInput = [];
                this.jakeSaysCode = [];
                this.buttonIndex = [];
                // for (var i = 0; i < this.jakeSaysCode.length; i++) {
                //     debugger
                //     this.jakeSaysCode.splice(i, 14);
                // }
                this.generateJakeSaysCode()
            },

            generateJakeSaysCode() {

                // This should generate the whole array of guesses from the start then have a seperate function to check the guess pattern
                console.log('Generating the Code!')
                for (var i = 0; i < 3; i++) {
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
            play(i){
                var elem = document.getElementById(this.jakeSaysCode[i])
                elem.style.opacity = 0.25
                setTimeout(() => {
                    elem.style.opacity = 1
                    this.displayJakeSaysCode(++i)
                }, 500);
            },

            displayJakeSaysCode(i) {
                i = i || 0
                console.log('i: ', i, "round: ", this.round)
                if(i < this.jakeSaysCode.length && this.round > i){
                    setTimeout(()=>{
                        this.play(i)
                    }, 500)
                }else{
                    this.userInput = []
                }
                    // this.choices = ['Mark','Jake','Mark','Darryl','Jake','Justin']

                    // var i = 0;
                    

                    // for (var i = 0; i < this.round; i++) {
                    //     if (this.jakeSaysCode[i] === 'Mark') {
                    //         document.getElementById("one").style.opacity = 0.25
                    //         setTimeout(function () {
                    //             document.getElementById("one").style.opacity = 1
                    //         }, 500);
                    //     }
                    //     if (this.jakeSaysCode[i] === 'Jake') {
                    //         document.getElementById("two").style.opacity = 0.25
                    //         setTimeout(function () {
                    //             document.getElementById("two").style.opacity = 1
                    //         }, 500);
                    //     }
                    //     if (this.jakeSaysCode[i] === 'Darryl') {
                    //         document.getElementById("three").style.opacity = 0.25
                    //         setTimeout(function () {
                    //             document.getElementById("three").style.opacity = 1
                    //         }, 500);
                    //     }
                    //     if (this.jakeSaysCode[i] === 'Justin') {
                    //         document.getElementById("four").style.opacity = 0.25
                    //         setTimeout(function () {
                    //             document.getElementById("four").style.opacity = 1
                    //         }, 500);
                    //     }
    
                    // }
                
            },
            checkUserInput () {
                var i = this.userInput.length - 1
                if (this.userInput[i] === this.jakeSaysCode[i]){
                    if(this.userInput.length == this.round){
                        if(this.round == this.jakeSaysCode.length){
                            alert("YOU WON")
                        }else{
                            this.round++
                            this.displayJakeSaysCode()
                        }
                    }
                } else {
                    alert("You Lost!!!")
                }
                
            },
            //these should add to user array not jsc array of solution
            click(input) {
                
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