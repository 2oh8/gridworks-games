<template>
    <div class="alex" id="bg">
        <h1 class="animated bounceInDown">Mastermind</h1>
        <h2 class="red-highlight animated flash" id="clock">YOUR MISSION BEGINS NOW!!</h2>
        <div id="declareWinner">1296 POSSIBILITIES - CAN YOU BREAK THE CODE?</div>
        <div id="gameBoard">
            <table>
                <tr id="secretCodeDisplay" class="hide">
                    <td class="secret-code" id="1"></td>
                    <td class="secret-code" id="2"></td>
                    <td class="secret-code" id="3"></td>
                    <td class="secret-code" id="4"></td>
                </tr>
                <tr>
                    <td id="8"></td>
                    <td id="7"></td>
                    <td id="6"></td>
                    <td id="5"></td>
                    <td id="H2" class="feedback"></td>
                    <td id="H1" class="feedback"></td>
                    <td id="H3" class="feedback"></td>
                    <td id="H0" class="feedback"></td>



                </tr>
                <tr>

                    <td id="12"></td>
                    <td id="11"></td>
                    <td id="10"></td>
                    <td id="9"></td>
                    <td id="G3" class="feedback"></td>
                    <td id="G2" class="feedback"></td>
                    <td id="G1" class="feedback"></td>
                    <td id="G0" class="feedback"></td>



                </tr>
                <tr>
                    <td id="16"></td>
                    <td id="15"></td>
                    <td id="14"></td>
                    <td id="13"></td>
                    <td id="F1" class="feedback"></td>
                    <td id="F0" class="feedback"></td>
                    <td id="F3" class="feedback"></td>
                    <td id="F2" class="feedback"></td>


                </tr>
                <tr>

                    <td id="20"></td>
                    <td id="19"></td>
                    <td id="18"></td>
                    <td id="17"></td>
                    <td id="E2" class="feedback"></td>
                    <td id="E0" class="feedback"></td>
                    <td id="E3" class="feedback"></td>
                    <td id="E1" class="feedback"></td>


                </tr>
                <tr>

                    <td id="24"></td>
                    <td id="23"></td>
                    <td id="22"></td>
                    <td id="21"></td>
                    <td id="D1" class="feedback"></td>
                    <td id="D2" class="feedback"></td>
                    <td id="D0" class="feedback"></td>
                    <td id="D3" class="feedback"></td>



                </tr>
                <tr>

                    <td id="28"></td>
                    <td id="27"></td>
                    <td id="26"></td>
                    <td id="25"></td>
                    <td id="C3" class="feedback"></td>
                    <td id="C0" class="feedback"></td>
                    <td id="C2" class="feedback"></td>
                    <td id="C1" class="feedback"></td>



                </tr>
                <tr>

                    <td id="32"></td>
                    <td id="31"></td>
                    <td id="30"></td>
                    <td id="29"></td>
                    <td id="B2" class="feedback"></td>
                    <td id="B1" class="feedback"></td>
                    <td id="B0" class="feedback"></td>
                    <td id="B3" class="feedback"></td>



                </tr>
                <tr>


                    <td id="36"></td>
                    <td id="35"></td>
                    <td id="34"></td>
                    <td id="33"></td>
                    <td id="A1" class="feedback"></td>
                    <td id="A0" class="feedback"></td>
                    <td id="A3" class="feedback"></td>
                    <td id="A2" class="feedback"></td>

                </tr>



            </table>

            <input id="field" class="guess" type="text" name="color" placeholder="CHOOSE A COLOR">
            <p id="colors"><button id="red" @click="chooseRed()" class="red">-RED-</button><button id="blue" class="blue" @click="chooseBlue()">-BLUE-</button>
                <button id="green" class="green" @click="chooseGreen()">GREEN</button><button id="orange" class="orange" @click="chooseOrange()">ORANGE</button>
                <button id="yellow" class="yellow" @click="chooseYellow()">YELLOW</button><button id="purple" class="purple" @click="choosePurple()">PURPLE</button></p>

            <div id="guesses">
                <button id="H" class="guessnext" @click="makeGuess('H')">Guess 8</button>
                <button id="G" class="guessnext" @click="makeGuess('G')">Guess 7</button>
                <button id="F" class="guessnext" @click="makeGuess('F')">Guess 6</button>
                <button id="E" class="guessnext" @click="makeGuess('E')">Guess 5</button>
                <button id="D" class="guessnext" @click="makeGuess('D')">Guess 4</button>
                <button id="C" class="guessnext" @click="makeGuess('C')">Guess 3</button>
                <button id="B" class="guessnext" @click="makeGuess('B')">Guess 2</button>
                <button id="A" class="guessnext" @click="makeGuess('A')">Guess 1</button>
            </div>
        </div>
        <div>

        </div>

        <audio loop id="song" src="../assets/mission-impossible.mp3"></audio>
        <audio loop id="siren" src="../assets/siren.mp3"></audio>





    </div>
</template>

<script>
    export default {
        name: 'alex',
        data() {
            return {

                colors: ["blue", "red", "yellow", "green", "orange", "purple"],
                wins: 0,
                number: 36,
                seconds: 300,
                counter: {
                    green: 0,
                    red: 0,
                    yellow: 0,
                    blue: 0,
                    purple: 0,
                    orange: 0,
                }
            }
        },
        mounted() {
            this.establishSecretCode()
            this.setSecretCode()
            this.setCellsForColor()
            setInterval(this.time, 1000)
        },
        methods: {
          
            randomIndex() {
                return Math.floor(Math.random() * 6)
            },
      

            setSecretCode() {
                var secretOne = document.getElementById("1").getAttribute("class");
                var secretTwo = document.getElementById("2").getAttribute("class");
                var secretThree = document.getElementById("3").getAttribute("class");
                var secretFour = document.getElementById("4").getAttribute("class");
                var secret = [secretOne, secretTwo, secretThree, secretFour];
                return secret 
            },


            setCellsForColor() {
                var cells = document.getElementsByTagName("td");
                for (var i = 0; i < cells.length; i++) {

                    cells[i].onclick = this.chooseCellColor;
                }
            },
            establishSecretCode() {
                var one = document.getElementById("1").setAttribute("class", this.colors[this.randomIndex()]);
                var two = document.getElementById("2").setAttribute("class", this.colors[this.randomIndex()]);
                var three = document.getElementById("3").setAttribute("class", this.colors[this.randomIndex()]);
                var four = document.getElementById("4").setAttribute("class", this.colors[this.randomIndex()]);
            },
            chooseRed() {
                document.getElementById("field").value = "red";
            },

            chooseOrange() {
                document.getElementById("field").value = "orange";
            },

            chooseYellow() {
                document.getElementById("field").value = "yellow";
            },

            choosePurple() {
                document.getElementById("field").value = "purple";
            },

            chooseBlue() {
                document.getElementById("field").value = "blue";
            },
            chooseGreen() {
                document.getElementById("field").value = "green";
            },
            chooseCellColor(location) {
                var field = document.getElementById("field");
                var square = location.target;

                if (field.value == "red") {
                    square.setAttribute("class", "red");
                } else if (field.value == "blue") {
                    square.setAttribute("class", "blue");
                } else if (field.value == "orange") {
                    square.setAttribute("class", "orange");
                } else if (field.value == "yellow") {
                    square.setAttribute("class", "yellow");
                } else if (field.value == "purple") {
                    square.setAttribute("class", "purple");
                } else if (field.value == "green") {
                    square.setAttribute("class", "green");
                }
            },
            time() {

                this.seconds--;


                document.getElementById("clock").innerHTML = this.seconds;

                if (this.seconds == 0) {
                    document.getElementById("declareWinner").innerHTML = "OH NO!! YOU RAN OUT OF TIME!!";
                    document.getElementById("bg").className = "animated flash";
                    clearInterval(clock);
                }



            },
            makeGuess(level) {

                var secret = this.setSecretCode();

                if (level == 'H') {
                    document.getElementById("secretCodeDisplay").removeAttribute("class");
                }

                //document.getElementById("song").play();
                var altThis = this
                for (var i = 0; i < secret.length; i++) {
                    altThis.counter[secret[i]]++;

                    console.log(altThis.counter)
                }

                document.getElementById(level).setAttribute('disabled', 'disabled');
                document.getElementById(level).style.color = "blue";

                console.log("counter", altThis.counter);
                console.log("secret", secret);
                var guessOne = [];
                var count = 0
                for (var i = this.number; count < 4; i--) {
                    var id = `${this.number}`
                    console.log("id", id)
                    var guess = document.getElementById(id).getAttribute("class")
                    guessOne.push(guess);
                    this.number--
                    count++

                }

                console.log(guessOne);


                
                var answer = []
                for (var i = 0; i < 4; i++) {
                    if (secret[i] == guessOne[i] && answer[i] != "black") {
                        answer[i] = "black";
                        console.log(guessOne[i]);
                        altThis.counter[guessOne[i]]--;
                    }
                }
                for (var i = 0; i < 4; i++) {
                    if ((secret.indexOf(guessOne[i]) != -1) && altThis.counter[guessOne[i]] > 0 && answer[i] != "black") {
                        answer[i] = "grey";
                        altThis.counter[guessOne[i]]--;



                    } else if (secret.indexOf(guessOne[i]) == -1) {
                        answer[i] = "white";

                    }




                }
                for (var i = 0; i < 4; i++) {

                    document.getElementById(level + i).setAttribute("class", answer[i]);

                }




                // if (chances == 0){
                // 	document.getElementById("secretCodeDisplay").removeAttribute("class");
                // }


                function declareMissionStatus() {
                    var correctCount = 0
                    var chances = 7

                    for (var i = 0; i < 4; i++) {
                        if (answer[i] == "black") {
                            correctCount++;
                        }

                    } if (correctCount == 4) {
                        document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
                        document.getElementById("song").pause();
                        document.getElementById("siren").play();
                        clearInterval(clock);

                    } else if (chances != 0) {
                        document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + chances + " MORE CHANCE(S) TO BREAK THE CODE!!";
                        chances--;
                    } else if (chances == 0) {
                        document.getElementById("declareWinner").innerHTML = "OH NO!! YOU RAN OUT OF CHANCES!!";
                        document.getElementById("bg").className = "animated flash";
                        clearInterval(clock);

                    }
                    // document.getElementById("secretCodeDisplay").removeAttribute("class");

                }
                declareMissionStatus()
            }






        }


     





    }
    // var colors = ["blue", "red", "yellow", "green", "orange", "purple"];
    // var randomIndex = Math.floor(Math.random() * 6);
    // console.log(randomIndex);


    // function establishSecretCode() {
    //     randomIndex = Math.floor(Math.random() * 6);
    //     var one = document.getElementById("1").setAttribute("class", colors[randomIndex]);
    //     randomIndex = Math.floor(Math.random() * 6);
    //     var two = document.getElementById("2").setAttribute("class", colors[randomIndex]);
    //     randomIndex = Math.floor(Math.random() * 6);
    //     var three = document.getElementById("3").setAttribute("class", colors[randomIndex]);
    //     randomIndex = Math.floor(Math.random() * 6);
    //     var four = document.getElementById("4").setAttribute("class", colors[randomIndex]);
    // }

    // establishSecretCode()

    // function chooseRed() {
    //     document.getElementById("field").value = "red";
    // }

    // function chooseOrange() {
    //     document.getElementById("field").value = "orange";
    // }

    // function chooseYellow() {
    //     document.getElementById("field").value = "yellow";
    // }

    // function choosePurple() {
    //     document.getElementById("field").value = "purple";
    // }

    // function chooseBlue() {
    //     document.getElementById("field").value = "blue";
    // }

    // function chooseGreen() {
    //     document.getElementById("field").value = "green";
    // }


    // var cells = document.getElementsByTagName("td");


    // setCellsForColor(){
    //     var cells = document.getElementsByTagName("td");
    //     for (i = 0; i < cells.length; i++) {
    //         var cells = document.getElementsByTagName("td");
    //         cells[i].onclick = chooseCellColor;
    //     }
    // }

    // function chooseCellColor(location) {
    //     var field = document.getElementById("field");
    //     var square = location.target;

    //     if (field.value == "red") {
    //         square.setAttribute("class", "red");
    //     } else if (field.value == "blue") {
    //         square.setAttribute("class", "blue");
    //     } else if (field.value == "orange") {
    //         square.setAttribute("class", "orange");
    //     } else if (field.value == "yellow") {
    //         square.setAttribute("class", "yellow");
    //     } else if (field.value == "purple") {
    //         square.setAttribute("class", "purple");
    //     } else if (field.value == "green") {
    //         square.setAttribute("class", "green");
    //     }

    // }


    // var wins = 0;






    // var secretOne = document.getElementById("1").getAttribute("class");
    // var secretTwo = document.getElementById("2").getAttribute("class");
    // var secretThree = document.getElementById("3").getAttribute("class");
    // var secretFour = document.getElementById("4").getAttribute("class");
    // var secret = [secretOne, secretTwo, secretThree, secretFour];




    // var number = 36;

    // var chances = 7;
    // var seconds = 300;

    // function time() {

    //     seconds--;


    //     document.getElementById("clock").innerHTML = seconds;

    //     if (seconds == 0) {
    //         document.getElementById("declareWinner").innerHTML = "OH NO!! YOU RAN OUT OF TIME!!";
    //         document.getElementById("bg").className = "animated flash";
    //         clearInterval(clock);
    //     }



    // }



    // setInterval(time, 1000);



    // function makeGuess(level) {

    //     if (level == 'H') {
    //         document.getElementById("secretCodeDisplay").removeAttribute("class");
    //     }

    //     document.getElementById("song").play();


    //     var counter = {
    //         green: 0,
    //         red: 0,
    //         yellow: 0,
    //         blue: 0,
    //         purple: 0,
    //         orange: 0
    //     }
    //     for (i = 0; i < secret.length; i++) {
    //         counter[secret[i]]++;

    //         console.log(counter)
    //     }

    //     document.getElementById(level).setAttribute('disabled', 'disabled');
    //     document.getElementById(level).style.color = "white";

    //     console.log("counter", counter);
    //     console.log("secret", secret);
    //     var guessOne = [];
    //     var count = 0
    //     for (var i = number; count < 4; i--) {
    //         var id = `${number}`
    //         console.log("id", id)
    //         var guess = document.getElementById(id).getAttribute("class")
    //         guessOne.push(guess);
    //         number--
    //         count++

    //     }

    //     console.log(guessOne);


    //     var answer = [];


    //     for (var i = 0; i < 4; i++) {
    //         if (secret[i] == guessOne[i] && answer[i] != "black") {
    //             answer[i] = "black";
    //             console.log(guessOne[i]);
    //             counter[guessOne[i]]--;
    //         }
    //     }
    //     for (var i = 0; i < 4; i++) {
    //         if ((secret.indexOf(guessOne[i]) != -1) && counter[guessOne[i]] > 0 && answer[i] != "black") {
    //             answer[i] = "grey";




    //         } if (secret.indexOf(guessOne[i]) == -1) {
    //             answer[i] = "white";

    //         }




    //     }
    //     for (var i = 0; i < 4; i++) {

    //         document.getElementById(level + i).setAttribute("class", answer[i]);

    //     }




    //     // if (chances == 0){
    //     // 	document.getElementById("secretCodeDisplay").removeAttribute("class");
    //     // }


    //     function declareMissionStatus() {
    //         var correctCount = 0


    //         for (var i = 0; i < 4; i++) {
    //             if (answer[i] == "black") {
    //                 correctCount++;
    //             }

    //         } if (correctCount == 4) {
    //             document.getElementById("declareWinner").innerHTML = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
    //             document.getElementById("song").pause();
    //             document.getElementById("siren").play();
    //             clearInterval(clock);

    //         } else if (chances != 0) {
    //             document.getElementById("declareWinner").innerHTML = "TIME IS RUNNING OUT!! JUST " + chances + " MORE CHANCE(S) TO BREAK THE CODE!!";
    //             chances--;
    //         } else if (chances == 0) {
    //             document.getElementById("declareWinner").innerHTML = "OH NO!! YOU RAN OUT OF CHANCES!!";
    //             document.getElementById("bg").className = "animated flash";
    //             clearInterval(clock);

    //         }
    //         // document.getElementById("secretCodeDisplay").removeAttribute("class");

    //     }
    //     declareMissionStatus()
    // }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @font-face {

        font-family: "Cartwheel";
        src: "Cartwheel.otf";
    }


    #bg {

        font-family: "Cartwheel";
    }

    h1 {
        text-align: center;
        font-size: 100px;
        color:lightslategrey;
    }

    h2 {
        text-align: center;
        font-size: 35px;
    }

    table {
        border-style: outset;
        border-collapse: collapse;
        position: fixed;
        background: white;
    }

    td {
        width: 45px;
        height: 45px;
        border: 10px solid brown;
        background: white;
        border-style: outset;
    }

    #feedback {
        width: 10px;
        height: 10px;
    }

    .feedback {
        width: 10px;
        height: 10px;
        border: thick solid brown;
        background: white;
        border-style: outset;
    }

    #gameBoard {

        margin-left: 37.15vw;
        margin-top: 4vh;
    }


    #newGame {
        /* margin-left: 18.9%;
            margin-top: 23%; */
        background: red;
        font-family: "Cartwheel";
    }

    #results {
        margin-left: 75px;
        margin-right: 75px;
        font-family: "Cartwheel";
    }

    #startOver {

        background: darkblue;
        font-family: "Cartwheel";
    }

    #declareWinner {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 40px;
        background: white;
    }

    body {
        background: blue;
    }

    img {

        vertical-align: middle;
        margin-bottom: 5px;
    }
    /* 
        button {

            height: 35px;
            font-size: 25px;
            background: black;
            color: white;
            font-family: "Cartwheel";
        } */

    a {
        text-decoration: none;
        color: white;
    }

    .orange {
        background-color: orange;
        border-radius:15px;
    }

    #toe {
        color: white;
    }

    .blue {
        background-color: blue;
        border-radius:15px;
    }

    .red-highlight {
        color: red;
    }

    .white {

        color: white;
    }

    .grey {
        background-color: grey;
    }

    .yellow {

        background-color: yellow;
        border-radius:15px;
    }

    .green {

        background-color: green;
        border-radius:15px;
    }

    .red {

        background-color: red;
        border-radius:15px;
    }

    .purple {
        background-color: purple;
        border-radius:15px;
    }

    .black {
        background-color: black;
    }

    #radio {
        margin-left: 25vw;
    }

    .guess {
        margin-left: 25vw;
    }

    .guessnext {
        margin-left: 46.12vw;
        margin-top: .5vh;
        border-radius:15px;
        background-color:blue;
    }

    #guesses {

        margin-left: -20vw;
    }

    #colors {
        margin-left: 25vw;
    }

    .hide {
        display: none;
    }
    /* .secret-code{
            display:none;
        } */
</style>