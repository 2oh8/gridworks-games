<template>
    <div class="alex">
        <h1 class="animated bounceInDown">Mastermind</h1>
        <span>WINS:</span><span id="wins">{{wins}}</span><span>&nbsp;&nbsp;GAMES PLAYED:</span><span id="games">{{games}}</span>
        <h2 class="red-highlight animated flash" id="clock">YOUR MISSION BEGINS NOW!!</h2>
        <!-- <div id="declareWinner">{{display}}</div> -->
        <div id="gameBoard">
            <v-layout row wrap>
                <v-flex xs8 lg4 md3 class="grid-display">
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
                    
                            <v-btn small id="H" class="guessnext" @click="makeGuess('H')">Guess 8</v-btn>
                            <v-btn small id="G" class="guessnext" @click="makeGuess('G')">Guess 7</v-btn>
                            <v-btn small id="F" class="guessnext" @click="makeGuess('F')">Guess 6</v-btn>
                            <v-btn small id="E" class="guessnext" @click="makeGuess('E')">Guess 5</v-btn>
                            <v-btn small id="D" class="guessnext" @click="makeGuess('D')">Guess 4</v-btn>
                            <v-btn small id="C" class="guessnext" @click="makeGuess('C')">Guess 3</v-btn>
                            <v-btn small id="B" class="guessnext" @click="makeGuess('B')">Guess 2</v-btn>
                            <v-btn small id="A" class="guessnext" @click="makeGuess('A')">Guess 1</v-btn>
                        
                </v-flex>
                <v-flex xs4 lg4>
                    <input id="field" class="guess" type="text" name="color" placeholder="CHOOSE A COLOR">
                    <ul style="list-style: none">
                        <li>
                            <v-btn id="red" @click="chooseRed()" class="red">&nbsp;&nbsp;RED&nbsp;&nbsp;</v-btn>
                        </li>
                        <li>
                            <v-btn id="blue" class="blue" @click="chooseBlue()">&nbsp;BLUE&nbsp;</v-btn>
                        </li>
                        <li>
                            <v-btn id="green" class="green" @click="chooseGreen()">GREEN</v-btn>
                        </li>
                        <li>
                            <v-btn id="orange" class="orange" @click="chooseOrange()">ORANGE</v-btn>
                        </li>
                        <li>
                            <v-btn id="yellow" class="yellow" @click="chooseYellow()">YELLOW</v-btn>
                        </li>
                        <li>
                            <v-btn id="purple" class="purple" @click="choosePurple()">PURPLE</v-btn>
                        </li>
                        <li>
                            <v-btn id="reset" @click="reset()" class="resetv-btn">&nbsp;&nbsp;RESET&nbsp;&nbsp;</v-btn>
                        </li>
                    </ul>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs4>


                </v-flex>
            </v-layout>
        </div>

        <!-- <audio loop id="song" src="../assets/mission-impossible.mp3"></audio>
        <audio loop id="siren" src="../assets/siren.mp3"></audio> -->
        <v-snackbar :timeout="timeout" :success="context === 'success'" :info="context === 'info'" :warning="context === 'warning'"
            :error="context === 'error'" :primary="context === 'primary'" :secondary="context === 'secondary'" :multi-line='multiline'
            :vertical="mode === 'vertical'" v-model="snackbar">
            {{ text }}
            <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>




    </div>
</template>

<script>
    export default {
        name: 'alex',
        data() {
            return {

                // SNACKBAR DATA
                snackbar: false,
                multiline: true,
                context: '',
                mode: '',
                timeout: 6000,
                text: '',
                // END SNACKBAR DATA

                colors: ["blue", "red", "yellow", "green", "orange", "purple"],
                wins: 0,
                games: 0,
                number: 36,
                display: "1296 POSSIBILITIES - CAN YOU BREAK THE CODE?",
                chances: 7,
                seconds: 300,
                clock: setInterval(this.time, 1000)
            }
        },
        mounted() {
            this.establishSecretCode()
            this.setSecretCode()
            this.setCellsForColor()
            this.clock

        },
        methods: {

            reset() {
                location.reload();
            },


            time() {

                this.seconds--;


                document.getElementById("clock").innerHTML = this.seconds;

                if (this.seconds == 0) {
                    this.display = "OH NO!! YOU RAN OUT OF TIME!!";
                    document.getElementById("bg").className = "animated flash";
                    clearInterval(this.clock);
                }



            },

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

            makeGuess(level) {

                var secret = this.setSecretCode();

                if (level == 'H') {
                    document.getElementById("secretCodeDisplay").removeAttribute("class");
                }

                // document.getElementById("song").play();

                var counter = {
                    green: 0,
                    red: 0,
                    yellow: 0,
                    blue: 0,
                    purple: 0,
                    orange: 0
                }

                for (var i = 0; i < secret.length; i++) {
                    counter[secret[i]]++;

                    console.log(counter)
                }

                document.getElementById(level).setAttribute('disabled', 'disabled');
                document.getElementById(level).style.color = "blue";

                console.log("counter", counter);
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
                        counter[guessOne[i]]--;
                    }
                }
                for (var i = 0; i < 4; i++) {
                    if ((secret.indexOf(guessOne[i]) != -1) && counter[guessOne[i]] > 0 && answer[i] != "black") {
                        answer[i] = "grey";
                        counter[guessOne[i]]--;



                    } else if (secret.indexOf(guessOne[i]) == -1) {
                        answer[i] = "white";

                    }




                }
                for (var i = 0; i < 4; i++) {

                    document.getElementById(level + i).setAttribute("class", answer[i]);

                }


                var wins = 0;
                var gamesPlayed = 0;
                var altThis = this;
                function declareMissionStatus() {
                    var correctCount = 0
                    for (var i = 0; i < 4; i++) {
                        if (answer[i] == "black") {
                            correctCount++;
                        }

                    } if (correctCount == 4) {
                        altThis.snackbar = true;
                        altThis.text = "MISSION ACCOMPLISHED!! -- YOU BROKE THE CODE!! -- CONGRATULATIONS!!!";
                        document.getElementById("song").pause();
                        document.getElementById("siren").play();
                        wins++;
                        gamesPlayed++;
                        document.getElementById("wins").innerHTML = wins;
                        document.getElementById("games").innerHTML = gamesPlayed;
                        clearInterval(altThis.clock);

                    } else if (altThis.chances != 0) {
                        altThis.snackbar = true;
                        altThis.text = "TIME IS RUNNING OUT!! JUST " + altThis.chances + " MORE CHANCE(S) TO BREAK THE CODE!!";
                        // clearInterval(altThis.clock);
                        altThis.chances--;
                    } else if (altThis.chances == 0) {
                        altThis.snackbar = true;
                        altThis.text = "OH NO!! YOU RAN OUT OF CHANCES!!";
                        document.getElementById("bg").className = "animated flash";
                        gamesPlayed++;
                        document.getElementById("wins").innerHTML = wins;
                        document.getElementById("games").innerHTML = gamesPlayed;
                        clearInterval(altThis.clock);

                    }


                }
                declareMissionStatus()
            }
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @font-face {

        font-family: "Cartwheel";
        src: "Cartwheel.otf";
    }

    @font-face {
        font-family: BankGothicM;
        src: './static/fonts/bank-gothic-lt.woff2';
    }

    .grid-display {
        height: 2rem !important
    }

    .snack-notifier {
        position: fixed !important;
    }
    /* h1 {
        text-align: center;
        font-size: 100px;
        color: lightslategrey;
    } */

    h2 {
        text-align: center;
        font-size: 35px;
    }

    table {
        border-style: outset;
        border-collapse: collapse;
        /* position: fixed; */
        background: white;
    }

    td {
        width: 2rem;
        height: 2rem;
        border: .5rem solid black;
        background: white;
        border-style: outset;
    }

    #feedback {
        width: 1vw;
        height: 1vw;
    }

    .feedback {
        width: 10px;
        height: 10px;
        border: thick solid brown;
        background: white;
        border-style: outset;
    }

    #gameBoard {

        /* margin-left: 5vw;
        margin-top: 4vh; */
    }


    #newGame {
        /* margin-left: 18.9%;
            margin-top: 23%; */
        background: red;
        /* font-family: "Cartwheel"; */
    }

    #results {
        /* margin-left: 75px;
        margin-right: 75px; */
        /* font-family: "BankGothicM"; */
    }

    #startOver {

        background: darkblue;
        /* font-family: "BankGothicM"; */
    }

    #declareWinner {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 40px;
        background: white;
        color: black;
    }
    /* 
    img {

        vertical-align: middle;
        margin-bottom: 5px;
    } */

    a {
        text-decoration: none;
        color: white;
    }

    .orange {
        background-color: orange;
        border-radius: 15px;
    }

    #toe {
        color: white;
    }

    .blue {
        background-color: blue;
        border-radius: 15px;
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
        border-radius: 15px;
    }

    .green {

        background-color: green;
        border-radius: 15px;
    }

    .red {

        background-color: red;
        border-radius: 15px;
    }

    .purple {
        background-color: purple;
        border-radius: 15px;
    }

    .black {
        background-color: black;
    }

    #radio {
        /* margin-left: 25vw; */
    }

    .guess {
        /* margin-left: 25vw; */
    }

    .guessnext {
        border-radius: 15px;
    }

    #guesses {

        /* margin-left: -20vw; */
    }

    #colors {
        /* margin-left: 25vw; */
    }

    .hide {
        display: none;
    }

    span {
        font-size: 1.5rem;
    }
    /* .secret-code{
            display:none;
        } */
</style>