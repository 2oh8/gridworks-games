<template>
  <div class="towersofhanoi">
      <p class="test title">TOWERS OF HANOI</p>
    <p class="test moves display">MOVES:&nbsp;<span id="moves">0</span><span class="test wins">&nbsp;&nbsp;WINS:&nbsp;<span id="wins">0</span></span></p>
    
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
                    <td id="5" class="a"></td>
                    <td id="11" class="a"></td>
                    <td id="17" class="a"></td>
                </tr>
            </table>


            <!-- <div class="col-xs-4 test "><img class="peg " src="peg.png " alt="tower-peg
                        "><br><img class="base" src="base.png " alt="tower-base "></div>
            <div class="col-xs-4 test "><img class="peg " src="peg.png " alt="tower-peg
                        "><br><img class="base" src="base.png " alt="tower-base "></div>
            <div class="col-xs-4 test "><img class="peg " src="peg.png " alt="tower-peg
                         "><br><img class="base" src="base.png " alt="tower-base "></div> -->
        </div>
        <div class="row buttons">
            <div class="col-xs-4 test">
                <button onclick="move1to2()">Move to <span class =" btnNum">2</span></button>
                <button onclick="move1to3()">Move to <span class =" btnNum"  >3</span></button>
            </div>
            <div class="col-xs-4 test">
                <button onclick="move2to1()">Move to <span class =" btnNum">1</span></button>
                <button onclick="move2to3()">Move to <span class =" btnNum">3</span></button>
            </div>
            <div class="col-xs-4 test">
                <button onclick="move3to1()">Move to <span class =" btnNum">1</span></button>
                <button onclick="move3to2()">Move to <span class =" btnNum">2</span></button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'towersofhanoi',
   data() {
            return {
                colors: ["blue", "red", "yellow", "green", "orange", "purple"],
                number: 36,
                display: "1296 POSSIBILITIES - CAN YOU BREAK THE CODE?",
                chances: 7,
                seconds: 300,
                clock: setInterval(this.time, 1000)
            }
        },
        mounted() {
           
        this.setUpDisks()
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
            setUpDisks(){    
              document.getElementById('0').setAttribute("class", "A");
              document.getElementById('1').setAttribute("class", "B");
              document.getElementById('2').setAttribute("class", "C");
              document.getElementById('3').setAttribute("class", "D");
              document.getElementById('4').setAttribute("class", "E");
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
            background-size: 100px 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
            
        }


        .B {
            background: url("disk.png");
            background-size: 150px 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
        }



        .C {
            background: url("disk.png");
            background-size: 200px 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
        }

        .D {
            background: url("disk.png");
            background-size: 250px 20px;
            margin-left: 100px;
            background-repeat: no-repeat;
            background-position: center;
            background-color:transparent;
        }

        .E {
            background: url("disk.png");
            background-size: 300px 20px;
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
            font-size: 5vw;
            font-family:"Cartwheel";
            margin-bottom:7.5vh;
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
            background-color:red;
            border-radius:15px;
        }
        .btnNum{
            color:white;
            font-size:1.5vw;
        }

    </style>