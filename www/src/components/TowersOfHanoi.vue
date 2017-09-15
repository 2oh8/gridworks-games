<template>
  <div class="towersofhanoi">
      <h1 class="title">TOWERS OF HANOI</h1>
    <p class="test moves display">MOVES:&nbsp;<span id="moves">0</span><span class="test wins">&nbsp;&nbsp;WINS:&nbsp;<span id="wins">{{this.wins}}</span></span><span class="test wins">&nbsp;&nbsp;MIN # OF MOVES:&nbsp;<span id="wins">31</span></span></p>
    
    <div class="container">
        <div class="top-row">
            <div class="col-xs-4 test">
                <span class="tower">TOWER 1</span>
            </div>
            <div class="col-xs-4 test">
                <span class="tower">TOWER 2</span>
            </div>
            <div class="col-xs-4 test">
                <span class="tower">TOWER 3</span>
            </div>
        </div>

        <div class="row">
            <table>
                <tr>
                    <td id="0"></td>
                    <td id="6"></td>
                    <td id="12"></td>
                </tr>
                <tr>
                    <td id="1"></td>
                    <td id="7"></td>
                    <td id="13"></td>

                </tr>
                <tr>
                    <td id="2"></td>
                    <td id="8"></td>
                    <td id="14"></td>
                </tr>
                <tr>
                    <td id="3"></td>
                    <td id="9"></td>
                    <td id="15"></td>
                </tr>
                <tr>
                    <td id="4"></td>
                    <td id="10"></td>
                    <td id="16"></td>
                </tr>
                <tr>
                    <td id="5" class="a"><button @click="move1to2()">Move to <span class =" btnNum">2</span></button>
                <button @click="move1to3()">Move to <span class =" btnNum"  >3</span></button></td>
                    <td id="11" class="a"> <button @click="move2to1()">Move to <span class =" btnNum">1</span></button>
                <button @click="move2to3()">Move to <span class =" btnNum">3</span></button> </td>
                    <td id="17" class="a"><button @click="move3to1()">Move to <span class =" btnNum">1</span></button>
                <button @click="move3to2()">Move to <span class =" btnNum">2</span></button> </td>
                </tr>
            </table>


            <!-- <div class="col-xs-4 test "><img class="peg " src="peg.png " alt="tower-peg
                        "><br><img class="base" src="base.png " alt="tower-base "></div>
            <div class="col-xs-4 test "><img class="peg " src="peg.png " alt="tower-peg
                        "><br><img class="base" src="base.png " alt="tower-base "></div>
            <div class="col-xs-4 test "><img class="peg " src="peg.png " alt="tower-peg
                         "><br><img class="base" src="base.png " alt="tower-base "></div> -->
        </div>
        <!-- <div class="row buttons">
            <div class="col-xs-4 test">
                <button @click="move1to2()">Move to <span class =" btnNum">2</span></button>
                <button @click="move1to3()">Move to <span class =" btnNum"  >3</span></button>
            </div>
            <div class="col-xs-4 test">
                <button @click="move2to1()">Move to <span class =" btnNum">1</span></button>
                <button @click="move2to3()">Move to <span class =" btnNum">3</span></button>
            </div>
            <div class="col-xs-4 test">
                <button @click="move3to1()">Move to <span class =" btnNum">1</span></button>
                <button @click="move3to2()">Move to <span class =" btnNum">2</span></button>
            </div>
        </div> -->
    </div>
 
  
        <audio  id="gong" src="../assets/gong.mp3"></audio> 
        <audio  id="swoosh" src="../assets/swoosh.mp3"></audio>
 
 
  </div>
</template>

<script>
export default {
  name: 'towersofhanoi',
   data() {
            return {
                cell0 : '',
                cell1 : '',
                cell2 : '',
                cell3 : '',
                cell4 : '',
                cell5 : '',
                cell6 : '',
                cell7 : '',
                cell8 : '',
                cell9 : '',
                cell10 : '',
                cell11 : '',
                cell12 : '',
                cell13 : '',
                cell14 : '',
                cell15 : '',
                cell16 : '',
                cell17 : '',
               
                tower1Element: [],
                tower2Element: [], 
                tower3Element: [],  

                cell0Class : '',
                cell1Class : '',
                cell2Class : '',
                cell3Class : '',
                cell4Class : '',
                cell5Class : '',
                cell6Class : '',
                cell7Class : '',
                cell8Class : '',
                cell9Class : '',
                cell10Class : '',
                cell11Class : '',
                cell12Class : '',
                cell13Class : '',
                cell14Class : '',
                cell15Class : '',
                cell16Class : '',
                cell17Class : '',

                tower1Class : [],
                tower2Class : [],
                tower3Class : [],
                moves:''
                  

            }
        },
        mounted() {
           

        this.setUpDisks()
        this.setData()
        },


        computed:{
              
               wins(){
                  // return this.$store.state.activeUser.wins;
                  return this.$store.state.activeWins;
               },
               gamesPlayed(){
                  // return this.$store.state.activeUser.gamesPlayed;
                  return this.$store.state.activeGames;
               }
          
        },

        methods: {
            reset() {
                location.reload();
            },
             updateStats(){ 
               var user = this.$store.state.activeUser;
               user.wins++;
               user.gamesPlayed++;
               this.$store.dispatch("updateUser",user);
           },
            setData(){
                this.cell0 = document.getElementById("0"),
                this.cell1 = document.getElementById("1"),
                this.cell2 = document.getElementById("2"),
                this.cell3 = document.getElementById("3"),
                this.cell4 = document.getElementById("4"),
                this.cell5 = document.getElementById("5"),
                this.cell6 = document.getElementById("6"),
                this.cell7 = document.getElementById("7"),
                this.cell8 = document.getElementById("8"),
                this.cell9 = document.getElementById("9"),
                this.cell10 = document.getElementById("10"),
                this.cell11 = document.getElementById("11"),
                this.cell12 = document.getElementById("12"),
                this.cell13 = document.getElementById("13"),
                this.cell14 = document.getElementById("14"),
                this.cell15 = document.getElementById("15"),
                this.cell16 = document.getElementById("16"),
                this.cell17 = document.getElementById("17"),
                this.tower1Element = [this.cell0, this.cell1, this.cell2, this.cell3, this.cell4, this.cell5],
                this.tower2Element = [this.cell6, this.cell7, this.cell8, this.cell9, this.cell10, this.cell11],
                this.tower3Element = [this.cell12, this.cell13, this.cell14, this.cell15, this.cell16, this.cell17],
                
                this.cell0Class = document.getElementById("0").getAttribute("class"),
                this.cell1Class = document.getElementById("1").getAttribute("class"),
                this.cell2Class = document.getElementById("2").getAttribute("class"),
                this.cell3Class = document.getElementById("3").getAttribute("class"),
                this.cell4Class = document.getElementById("4").getAttribute("class"),
                this.cell5Class = document.getElementById("5").getAttribute("class"),
                this.cell6Class = document.getElementById("6").getAttribute("class"),
                this.cell7Class = document.getElementById("7").getAttribute("class"),
                this.cell8Class = document.getElementById("8").getAttribute("class"),
                this.cell9Class = document.getElementById("9").getAttribute("class"),
                this.cell10Class = document.getElementById("10").getAttribute("class"),
                this.cell11Class = document.getElementById("11").getAttribute("class"),
                this.cell12Class = document.getElementById("12").getAttribute("class"),
                this.cell13Class = document.getElementById("13").getAttribute("class"),
                this.cell14Class = document.getElementById("14").getAttribute("class"),
                this.cell15Class = document.getElementById("15").getAttribute("class"),
                this.cell16Class = document.getElementById("16").getAttribute("class"),
                this.cell17Class = document.getElementById("17").getAttribute("class"),

                this.tower1Class = [this.cell0Class, this.cell1Class, this.cell2Class, this.cell3Class, this.cell4Class, this.cell5Class],
                this.tower2Class = [this.cell6Class, this.cell7Class, this.cell8Class, this.cell9Class, this.cell10Class, this.cell11Class],
                this.tower3Class = [this.cell12Class, this.cell13Class, this.cell14Class, this.cell15Class, this.cell16Class, this.cell17Class]

            },
            setUpDisks(){    
              document.getElementById('0').setAttribute("class", "A");
              document.getElementById('1').setAttribute("class", "B");
              document.getElementById('2').setAttribute("class", "C");
              document.getElementById('3').setAttribute("class", "D");
              document.getElementById('4').setAttribute("class", "E");
             },
             
            move1to3() {
            console.log("this.tower3Class", this.tower3Class)
            var lastNull = this.tower3Class.lastIndexOf(null);
            var lastNullPlus1 = lastNull + 1;
            console.log(this.tower1Class[0])
            if (this.tower1Class[0] != null) {
                if (this.tower1Class[0] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower1Class[0]);
                    this.tower3Class[lastNull] = this.tower1Class[0];
                    this.tower1Element[0].removeAttribute("class");
                    this.tower1Class[0] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[1] != null) {
                if (this.tower1Class[1] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower1Class[1]);
                    this.tower3Class[lastNull] = this.tower1Class[1];
                    this.tower1Element[1].removeAttribute("class")
                    this.tower1Class[1] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[2] != null) {
                if (this.tower1Class[2] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower1Class[2]);
                    this.tower3Class[lastNull] = this.tower1Class[2];
                    this.tower1Element[2].removeAttribute("class")
                    this.tower1Class[2] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[3] != null) {
                if (this.tower1Class[3] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower1Class[3]);
                    this.tower3Class[lastNull] = this.tower1Class[3];
                    this.tower1Element[3].removeAttribute("class")
                    this.tower1Class[3] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[4] != null) {
                if (this.tower1Class[4] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower1Class[4]);
                    this.tower3Class[lastNull] = this.tower1Class[4];
                    this.tower1Element[4].removeAttribute("class")
                    this.tower1Class[4] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            }

            console.log("tower1Class", this.tower1Class)
            console.log("tower2Class", this.tower2Class)
            console.log("tower3Class", this.tower3Class)
            console.log("tower1Element", this.tower1Element)
            console.log("tower2Element", this.tower2Element)
            console.log("tower3Element", this.tower3Element)

            document.getElementById("moves").innerHTML = this.moves;
         
            if ((this.tower2Class.indexOf(null)) == -1) {
                this.updateStats();

                document.getElementById("gong").play(); 

            } else if ((this.tower3Class.indexOf(null)) == -1) {
                this.updateStats();
                document.getElementById("gong").play();    
            }

            // document.getElementById("wins").innerHTML = this.wins;
        },

         move1to2() {


            var lastNull = this.tower2Class.lastIndexOf(null);
            var lastNullPlus1 = lastNull + 1;
            if (this.tower1Class[0] != null) {
                if (this.tower1Class[0] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower1Class[0]);
                    this.tower2Class[lastNull] = this.tower1Class[0]
                    this.tower1Element[0].removeAttribute("class");
                    this.tower1Class[0] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[1] != null) {
                if (this.tower1Class[1] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower1Class[1]);
                    this.tower2Class[lastNull] = this.tower1Class[1]
                    this.tower1Element[1].removeAttribute("class")
                    this.tower1Class[1] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[2] != null) {
                if (this.tower1Class[2] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower1Class[2]);
                    this.tower2Class[lastNull] = this.tower1Class[2];
                    this.tower1Element[2].removeAttribute("class")
                    this.tower1Class[2] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[3] != null) {
                if (this.tower1Class[3] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower1Class[3]);
                    this.tower2Class[lastNull] = this.tower1Class[3]
                    this.tower1Element[3].removeAttribute("class")
                    this.tower1Class[3] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower1Class[4] != null) {
                if (this.tower1Class[4] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower1Class[4]);
                    this.tower2Class[lastNull] = this.tower1Class[4]
                    this.tower1Element[4].removeAttribute("class")
                    this.tower1Class[4] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            }

            console.log("tower1Class", this.tower1Class)
            console.log("tower2Class", this.tower2Class)
            console.log("tower3Class", this.tower3Class)
            console.log("tower1Element", this.tower1Element)
            console.log("tower2Element", this.tower2Element)
            console.log("tower3Element", this.tower3Element)

            document.getElementById("moves").innerHTML = this.moves;


            if ((this.tower2Class.indexOf(null)) == -1) {
                this.updateStats();
                document.getElementById("gong").play();    
            } else if ((this.tower3Class.indexOf(null)) == -1) {
                this.updateStats();
                document.getElementById("gong").play();    
            }

            // document.getElementById("wins").innerHTML = this.wins;
            
        },

        move2to1() {

            var lastNull = this.tower1Class.lastIndexOf(null);
            var lastNullPlus1 = lastNull + 1;
            if (this.tower2Class[0] != null) {
                if (this.tower2Class[0] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower2Class[0]);
                    this.tower1Class[lastNull] = this.tower2Class[0]
                    this.tower2Element[0].removeAttribute("class");
                    this.tower2Class[0] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[1] != null) {
                if (this.tower2Class[1] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower2Class[1]);
                    this.tower1Class[lastNull] = this.tower2Class[1]
                    this.tower2Element[1].removeAttribute("class")
                    this.tower2Class[1] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[2] != null) {
                if (this.tower2Class[2] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower2Class[2]);
                    this.tower1Class[lastNull] = this.tower2Class[2];
                    this.tower2Element[2].removeAttribute("class")
                    this.tower2Class[2] = null;
                    this.moves++;
                }
            } else if (this.tower2Class[3] != null) {
                if (this.tower2Class[3] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower2Class[3]);
                    this.tower1Class[lastNull] = this.tower2Class[3]
                    this.tower2Element[3].removeAttribute("class")
                    this.tower2Class[3] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[4] != null) {
                if (this.tower2Class[4] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower2Class[4]);
                    this.tower1Class[lastNull] = this.tower2Class[4]
                    this.tower2Element[4].removeAttribute("class")
                    this.tower2Class[4] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            }

            console.log("tower1Class", this.tower1Class)
            console.log("tower2Class", this.tower2Class)
            console.log("tower3Class", this.tower3Class)
            console.log("tower1Element", this.tower1Element)
            console.log("tower2Element", this.tower2Element)
            console.log("tower3Element", this.tower3Element)

            document.getElementById("moves").innerHTML = this.moves;

            if ((this.tower2Class.indexOf(null)) == -1) {
                this.updateStats();
            document.getElementById("gong").play(); 

            } else if ((this.tower3Class.indexOf(null)) == -1) {
                this.updateStats();
             document.getElementById("gong").play();    
            }

            // document.getElementById("wins").innerHTML = this.wins;
        },

        move2to3() {

            var lastNull = this.tower3Class.lastIndexOf(null);
            var lastNullPlus1 = lastNull + 1;
            if (this.tower2Class[0] != null) {
                if (this.tower2Class[0] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower2Class[0]);
                    this.tower3Class[lastNull] = this.tower2Class[0]
                    this.tower2Element[0].removeAttribute("class");
                    this.tower2Class[0] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[1] != null) {
                if (this.tower2Class[1] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower2Class[1]);
                    this.tower3Class[lastNull] = this.tower2Class[1]
                    this.tower2Element[1].removeAttribute("class")
                    this.tower2Class[1] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[2] != null) {
                if (this.tower2Class[2] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower2Class[2]);
                    this.tower3Class[lastNull] = this.tower2Class[2];
                    this.tower2Element[2].removeAttribute("class")
                    this.tower2Class[2] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[3] != null) {
                if (this.tower2Class[3] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower2Class[3]);
                    this.tower3Class[lastNull] = this.tower2Class[3]
                    this.tower2Element[3].removeAttribute("class")
                    this.tower2Class[3] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower2Class[4] != null) {
                if (this.tower2Class[4] < this.tower3Element[lastNullPlus1].getAttribute("class")) {
                    this.tower3Element[lastNull].setAttribute("class", this.tower2Class[4]);
                    this.tower3Class[lastNull] = this.tower2Class[4]
                    this.tower2Element[4].removeAttribute("class")
                    this.tower2Class[4] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            }

            console.log("tower1Class", this.tower1Class)
            console.log("tower2Class", this.tower2Class)
            console.log("tower3Class", this.tower3Class)
            console.log("tower1Element", this.tower1Element)
            console.log("tower2Element", this.tower2Element)
            console.log("tower3Element", this.tower3Element)

            document.getElementById("moves").innerHTML = this.moves;

            if ((this.tower2Class.indexOf(null)) == -1) {
              this.updateStats();
                document.getElementById("gong").play();    
            } else if ((this.tower3Class.indexOf(null)) == -1) {
                this.updateStats();
                document.getElementById("gong").play();    
            }

            // document.getElementById("wins").innerHTML = this.wins;


        },
        move3to1() {


            var lastNull = this.tower1Class.lastIndexOf(null);
            var lastNullPlus1 = lastNull + 1;
            if (this.tower3Class[0] != null) {
                if (this.tower3Class[0] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower3Class[0]);
                    this.tower1Class[lastNull] = this.tower3Class[0]
                    this.tower3Element[0].removeAttribute("class");
                    this.tower3Class[0] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[1] != null) {
                if (this.tower3Class[1] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower3Class[1]);
                    this.tower1Class[lastNull] = this.tower3Class[1]
                    this.tower3Element[1].removeAttribute("class")
                    this.tower3Class[1] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[2] != null) {
                if (this.tower3Class[2] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower3Class[2]);
                    this.tower1Class[lastNull] = this.tower3Class[2];
                    this.tower3Element[2].removeAttribute("class")
                    this.tower3Class[2] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[3] != null) {
                if (this.tower3Class[3] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower3Class[3]);
                    this.tower1Class[lastNull] = this.tower3Class[3]
                    this.tower3Element[3].removeAttribute("class")
                    this.tower3Class[3] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[4] != null) {
                if (this.tower3Class[4] < this.tower1Element[lastNullPlus1].getAttribute("class")) {
                    this.tower1Element[lastNull].setAttribute("class", this.tower3Class[4]);
                    this.tower1Class[lastNull] = this.tower3Class[4]
                    this.tower3Element[4].removeAttribute("class")
                    this.tower3Class[4] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            }

            console.log("tower1Class", this.tower1Class)
            console.log("tower2Class", this.tower2Class)
            console.log("tower3Class", this.tower3Class)
            console.log("tower1Element", this.tower1Element)
            console.log("tower2Element", this.tower2Element)
            console.log("tower3Element", this.tower3Element)

            document.getElementById("moves").innerHTML = this.moves;

            if ((this.this.tower2Class.indexOf(null)) == -1) {
              this.updateStats();
                document.getElementById("gong").play();    
            } else if ((this.tower3Class.indexOf(null)) == -1) {
                this.updateStats();
                document.getElementById("gong").play();    
            }

            // document.getElementById("wins").innerHTML = this.wins;
        },
        move3to2() {


            var lastNull = this.tower2Class.lastIndexOf(null);
            var lastNullPlus1 = lastNull + 1;
            if (this.tower3Class[0] != null) {
                if (this.tower3Class[0] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower3Class[0]);
                    this.tower2Class[lastNull] = this.tower3Class[0]
                    this.tower3Element[0].removeAttribute("class");
                    this.tower3Class[0] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[1] != null) {
                if (this.tower3Class[1] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower3Class[1]);
                    this.tower2Class[lastNull] = this.tower3Class[1]
                    this.tower3Element[1].removeAttribute("class")
                    this.tower3Class[1] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[2] != null) {
                if (this.tower3Class[2] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower3Class[2]);
                    this.tower2Class[lastNull] = this.tower3Class[2];
                    this.tower3Element[2].removeAttribute("class")
                    this.tower3Class[2] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[3] != null) {
                if (this.tower3Class[3] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower3Class[3]);
                    this.tower2Class[lastNull] = this.tower3Class[3]
                    this.tower3Element[3].removeAttribute("class")
                    this.tower3Class[3] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            } else if (this.tower3Class[4] != null) {
                if (this.tower3Class[4] < this.tower2Element[lastNullPlus1].getAttribute("class")) {
                    this.tower2Element[lastNull].setAttribute("class", this.tower3Class[4]);
                    this.tower2Class[lastNull] = this.tower3Class[4]
                    this.tower3Element[4].removeAttribute("class")
                    this.tower3Class[4] = null;
                    this.moves++;
                    document.getElementById("swoosh").play();
                }
            }

            console.log("tower1Class", this.tower1Class)
            console.log("tower2Class", this.tower2Class)
            console.log("tower3Class", this.tower3Class)
            console.log("tower1Element", this.tower1Element)
            console.log("tower2Element", this.tower2Element)
            console.log("tower3Element", this.tower3Element)

            document.getElementById("moves").innerHTML = this.moves;

            if ((this.tower2Class.indexOf(null)) == -1) {
                this.updateStats();
                document.getElementById("gong").play();    
            } else if ((this.tower3Class.indexOf(null)) == -1) {
               this.updateStats();
                document.getElementById("gong").play();    
            }

            // document.getElementById("wins").innerHTML = this.wins;
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

       /* * {
            outline: 1px solid red;
        } */

        table {
        }

        td {
            width: 40vw;
            height: 5vw;
            
        }

        tr {
            text-align: center;
        }

        .test {
            text-align: center;
        }

        body {

            font-family: "Cartwheel";
        }



        p {
            font-weight: bold;
        }

        .ring5 {

            background-color: green;
            height: 100px;
            width: 300px;
            border-radius: 30px;
        }


        .ring4 {
            background-color: lightblue;
            height: 50px;
            width: 250px;
            border-radius: 30px;
            top: 28.5vh;
            margin-left: 50px;
        }

        .ring3 {
            position: absolute;
            background-color: navy;
            height: 50px;
            width: 200px;
            border-radius: 30px;
            top: 22vh;
            margin-left: 75px;
        }

        .A {
            background: url("disk.png");
            background-size: 7vw 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
            
        }


        .B {
            background: url("disk.png");
            background-size: 12vw 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
        }



        .C {
            background: url("disk.png");
            background-size: 17vw 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
        }

        .D {
            background: url("disk.png");
            background-size: 23vw 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
        }

        .E {
            background: url("disk.png");
            background-size: 28vw 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
            /* border-radius:15px;
            height:10px;
            width:10px; */
            /* background-color: orange;
            height: 50px;
            width: 20px;
            border-radius: 30px; */
        }

        .disk {
            border-radius: 15px;
        }

        .peg {
            position: absolute;
            z-index: -1;
        }
        /* .base {
            position: relative;
            z-index: -1;
            top: 35.5vh;
        } */

        .title{
            font-weight: bold;
            font-size: 10vh !important;
            font-family:"Cartwheel";
            margin-bottom:7.5h;
            text-align:center;
            
        }
        .moves {
            font-weight: bold;
            font-size: 3vw;
            font-family:"Cartwheel";
        }

        .wins{
            font-weight: bold;
            font-size: 3vw;
            font-family:"Cartwheel";
        }
        .row {
            height: 60vh;
        }


        .top-row {
            height: 10vh;
            font-weight: bold;
            font-size: 150%;
        }

        .space-row {
            height: 10vh;
        }

        .base {
            background-color: black;
        }

        .buttons {
            margin-top: 5vh;
            font-family:"Cartwheel";
            color:white;   

        }

        .a {
            background-color: navy;
            
           
        }

        .tower{
            font-size:2.5vw;
            font-family:"Cartwheel";
        }

        #moves{
        color:red;
        font-family:"Cartwheel";
        }

        #wins{
        color:red;
        font-family:"Cartwheel";
        }
        .display{
            margin-bottom:4vh;
        }
        button{
            background-color:maroon;
            border-radius:15px;
            margin-top:2vh;
            font-family:"Cartwheel";
            

        }
        .btnNum{
            color:white;
            font-size:1.5vw;
        }

    </style>