<template>
  <div container-fluid>

    <div class="titlecenter">
      <div class="lleft"><span>WINS:</span><span id="wins">{{mywins}}</span></div>

      <h5 class="center">
        BattleStations!
        <router-link to="./BattlestationsGameAbout"><span id='help'>?</span></router-link>
      </h5>

      <div class="rright"><span>GAMES PLAYED:</span><span id="games">{{mygames}}</span></div>
    </div>

    <div class="card leftGrid">
      <div class="card-block">
        <h6 class="card-title">Attack Grid</h6>
        <attack></attack>
      </div>
    </div>

    <div class="card centerCard">
      <div class="card-block">
        <h6 class="card-title controls">Controls</h6>

        <table>
          <div class="full">
            <th>Super Carrier</th>
            <tr>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <form @submit.prevent="">
                <input v-model="c1" type="text" placeholder="start" class="rightplus">
                <input v-model="c2" type="text" placeholder="finish" class="right">
              </form>
            </tr>

          </div>

          <div class="full">
            <th>Battleship</th>
            <tr>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <form @submit.prevent="">
                <input v-model="b1" type="text" placeholder="start" class="rightplus">
                <input v-model="b2" type="text" placeholder="finish" class="right">
              </form>
            </tr>

          </div>

          <div class="full">
            <th>Cruiser</th>
            <tr>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <form @submit.prevent="">
                <input v-model="c3" type="text" placeholder="start" class="rightplus">
                <input v-model="c4" type="text" placeholder="finish" class="right">
              </form>
            </tr>

          </div>

          <div class="full">
            <th>Destroyer</th>
            <tr>
              <div class="test"></div>
              <div class="test"></div>
              <div class="test"></div>
              <form @submit.prevent="">
                <input v-model="d1" type="text" placeholder="start" class="rightplus">
                <input v-model="d2" type="text" placeholder="finish" class="right">
              </form>
            </tr>

          </div>

          <div class="full">
            <th>Patrol Boat</th>
            <tr>
              <div class="test"></div>
              <div class="test"></div>

              <form @submit.prevent="">
                <input v-model="p1" type="text" placeholder="start" class="rightplus">
                <input v-model="p2" type="text" placeholder="finish" class="right">
              </form>
              <button id="place" type="button" class="right2 greenbtn" @click.prevent.stop="verifyShips">Place Ships</button>
            </tr>
          </div>
        </table>

        <v-divider></v-divider>
      </div>



      <div class="options">
        <p>Difficulty Level:</p>
        <button class="diff" id="diff1" type="button" @click.prevent.stop="diffSelect(1)">Sailor</button>
        <button class="diff" id="diff2" type="button" @click.prevent.stop="diffSelect(2)">Chief</button>
        <button class="diff" id="diff3" type="button" @click.prevent.stop="diffSelect(3)">Captain</button>
        <button class="diff" id="diff4" type="button" @click.prevent.stop="diffSelect(4)">Admiral</button>
      </div>

      <div class="row message">
        <p class="fmt" id="mymsg">{{msg}} </p>
        <!-- <button id="place" type="button" class="right greenbtn" @click.prevent.stop="verifyShips">Place</button> -->
      </div>



      <div class="row readouts">
        <div class="enemy">
          <p id="e6" class="elist">Super Carrier</p>
          <p id="e5" class="elist">Battleship</p>
          <p id="e4" class="elist">Cruiser</p>
          <p id="e3" class="elist">Destroyer</p>
          <p id="e2" class="elist">Patrol Boat</p>
        </div>

        <div class="myRight">
          <form @submit.prevent="">
            <input v-model="f1" type="text" placeholder="shot1" class="rightplus1">
            <input id="s2" v-model="f2" type="text" placeholder="shot2" class="right1">
            <input id="s3" v-model="f3" type="text" placeholder="shot3" class="middlerightplus">
            <input id="s4" v-model="f4" type="text" placeholder="shot4" class="middleright">
            <input id="s5" v-model="f5" type="text" placeholder="shot5" class="lowerrightplus">
            <button id='attack2' type="button" class="attack" @click.prevent.stop="startAttack" :disabled='this.aBtn'>Attack</button>
          </form>

        </div>
      </div>
    </div>

    <div class="card rightGrid">
      <div class="card-block">
        <h6 class="card-title">Fleet Grid</h6>
        <fleet></fleet>
      </div>
    </div>

  </div>
</template>


<script>
  import Attack from './Attack'
  import Fleet from './Fleet.vue'
  import BattlestationsGameAbout from '../Battlestations/BattlestationsGameAbout.vue'
  //window.onload = setDefaults;

  export default {
    name: 'battlestations',
    fleetShipsSunk: '',

    data() {
      return {
        msg: "Messages go here",
        aBtn: '',
        basefactor: '',
        baseshots: '',

        c1: 'BE',
        c2: 'BJ',
        b1: 'DB',
        b2: 'DF',
        c3: 'FC',
        c4: 'FF',
        d1: 'HH',
        d2: 'HJ',
        p1: 'JF',
        p2: 'JG',

        f1: 'AA',
        f2: 'CC',
        f3: 'EE',
        f4: 'GG',
        f5: 'II',

        firingC: [],
        allFleetShips: [],

        ships: {
          carrier: {
            positions: [],
            hits: [],
            sunk: 'false'
          },
          battleship: {
            positions: [],
            hits: [],
            sunk: 'false'
          },
          cruiser: {
            positions: [],
            hits: [],
            sunk: 'false'
          },
          destroyer: {
            positions: [],
            hits: [],
            sunk: 'false'
          },
          patrolboat: {
            positions: [],
            hits: [],
            sunk: 'false'
          },
        }
      }
    },

    computed: {
      mywins() {
        return this.$store.state.activeWins;
      },
      mygames() {
        return this.$store.state.activeGames;
      }
    },

    mount: {
      setDisabled: function () { this.aBtn = true; },
      Fleet,
      Attack
    },

    components: {
      Attack,
      Fleet
    },

    methods: {

      diffSelect(num) {
        var ind = 'diff' + num
        //debugger

        for (var x = 1; x < 5; x++) {
          if (num != x) {
            document.getElementById('diff' + x).style.backgroundColor = 'initial';
          } else {
            document.getElementById(ind).style.backgroundColor = 'green';
          }
        }

        this.basefactor = num;
      },

      changeCell(num) {
        if (num < 101) {
          Fleet.methods.changeBlue(num);
        }
      },

      changeBlue(num) {
        if (num < 101) {
          Fleet.methods.changeBlue(num);
        }
      },

      changeRed(el) {
        if (el < 201) {
          var x = document.getElementById(el);
          x.style.backgroundColor = 'red';
        }
      },

      redX(el) {
        if (el < 201) {
          var x = document.getElementById(el);
          x.innerHTML = "X"
          //x.style.color = 'red';
          x.style.color = 'white'; //used for testing
          x.style.fontSize = '20px';
        }
      },

      whiteO(el) {
        if (el < 201) {
          var x = document.getElementById(el);
          x.innerHTML = "O"
          x.style.color = 'white';
          x.style.fontSize = '20px';
        }
      },

      convert2Num(str) {
        //65-74 cap A^
        var tmp = str.toUpperCase().charCodeAt(0) - 64
        var tmp1 = str.toUpperCase().charCodeAt(1) - 64
        return (tmp * 10) + tmp1 - 10;
      },

      convert1Num(str) {
        return (str.toUpperCase().charCodeAt(0) - 64)
      },

      verifyPosition(str1, str2, num) {
        //used to check that user is placing ship horizontally only
        if (str1[0] != str2[0]) {
          return false;
        }

        if (str2.charCodeAt(1) - str1.charCodeAt(1) != num) {
          //incorrect length
          return false;
        }

        return true;
      },

      verifyShips() {

        if (this.basefactor == '') {
          this.msg = 'Select a Difficulty Level Sailor!';
          document.getElementById('mymsg').style.backgroundColor = 'red';
          return;
        }else{
          this.msg = '';
          document.getElementById('mymsg').style.backgroundColor = 'initial';
        }

        this.allFleetShips = [];

        if (this.verifyPosition(this.c1, this.c2, 5)) {
          var tmp1 = this.convert2Num(this.c1);
          var tmp2 = this.convert2Num(this.c2);
          this.ships.carrier.hits = [];

          if (tmp2 - tmp1 == 5) {
            for (var i = tmp1; i < tmp2 + 1; i++) {
              this.ships.carrier.positions.push(i);
              this.allFleetShips.push(i);
              this.changeCell(i);
            }

          } else {
            //fail.throw error. Send toast
          }
        }

        if (this.verifyPosition(this.b1, this.b2), 4) {

          var tmp3 = this.convert2Num(this.b1);
          var tmp4 = this.convert2Num(this.b2);
          this.ships.battleship.hits = []

          if (tmp4 - tmp3 == 4) {
            for (var i = tmp3; i < tmp4 + 1; i++) {
              this.ships.battleship.positions.push(i);
              this.allFleetShips.push(i);
              this.changeCell(i);
            }

          } else {
            //fail.throw error.Send toast
          }
        }

        if (this.verifyPosition(this.c3, this.c4), 3) {
          var tmp5 = this.convert2Num(this.c3);
          var tmp6 = this.convert2Num(this.c4);
          this.ships.cruiser.hits = [];

          if (tmp6 - tmp5 == 3) {
            for (var i = tmp5; i < tmp6 + 1; i++) {
              this.ships.cruiser.positions.push(i);
              this.allFleetShips.push(i);
              this.changeCell(i);
            }

          } else {
            //fail.throw error.Send toast

          }
        }

        if (this.verifyPosition(this.d1, this.d2), 2) {
          var tmp7 = this.convert2Num(this.d1);
          var tmp8 = this.convert2Num(this.d2);
          this.ships.destroyer.hits = [];

          if (tmp8 - tmp7 == 2) {
            for (var i = tmp7; i < tmp8 + 1; i++) {
              this.ships.destroyer.positions.push(i);
              this.allFleetShips.push(i);
              this.changeCell(i);
            }

          } else {
            //fail.throw error.Send toast
          }
        }

        if (this.verifyPosition(this.p1, this.p2), 1) {
          var tmp9 = this.convert2Num(this.p1);
          var tmp10 = this.convert2Num(this.p2);
          this.ships.patrolboat.hits = [];

          if (tmp10 - tmp9 == 1) {
            for (var i = tmp9; i < tmp10 + 1; i++) {
              this.ships.patrolboat.positions.push(i);
              this.allFleetShips.push(i);
              this.changeCell(i);
            }

          } else {
            //fail.throw error.Send toast
          }
        }

        this.fleetShipsSunk = 0;

        Attack.methods.generateShips();
        Attack.methods.setAttackGrid();

        if (this.basefactor == 1) {
          this.baseshots = 1;
        } else if (this.basefactor == 2) {
          this.baseshots = 3 - Math.ceil(this.fleetShipsSunk / 2);
        } else {
          this.baseshots = 5;
        }

        document.getElementById('place').disabled = true;

        for (var y = 1; y < 5; y++) {
          document.getElementById('diff' + y).disabled = true;
        }

        this.aBtn = false;

        this.inputCheck();
      },

      figureSunk() {
        this.fleetShipsSunk = 0;

        if (this.ships.carrier.sunk == 'true') {
          this.fleetShipsSunk++;
        }
        if (this.ships.battleship.sunk == 'true') {
          this.fleetShipsSunk++;
        }
        if (this.ships.cruiser.sunk == 'true') {
          this.fleetShipsSunk++;
        }
        if (this.ships.destroyer.sunk == 'true') {
          this.fleetShipsSunk++;
        }
        if (this.ships.patrolboat.sunk == 'true') {
          this.fleetShipsSunk++;
        }

        this.inputCheck();

        //disable inputs accordingly
        // var shots = 5 - this.fleetShipsSunk;

        // var shots = 0;

        // if (this.baseshots == 1) {
        //   shots = this.baseshots;
        // } else if (this.baseshots == 3) {
        //   shots = 3 - Math.ceil(this.fleetShipsSunk / 2);
        // } else {
        //   shots = 5 - this.fleetShipsSunk;
        // }


        // for (var z = 5; z > shots; z--) {
        //   var x = document.getElementById('s' + z)

        //   if (x != null) {
        //     x.style.border = 'solid red';
        //     x.style.color = 'red';
        //     x.disabled = 'true';
        //   }
        // }


      },

      inputCheck() {
        var shots = 0;

        if (this.baseshots == 1) {
          shots = this.baseshots;
        } else if (this.baseshots == 3) {
          shots = 3 - Math.ceil(this.fleetShipsSunk / 2);
        } else {
          shots = 5 - this.fleetShipsSunk;
        }

        for (var z = 5; z > shots; z--) {
          var x = document.getElementById('s' + z)

          if (x != null) {
            x.style.border = 'solid red';
            x.style.color = 'red';
            x.disabled = 'true';
          }
        }
      },

      checkAllShips(shot) {
        if (this.ships.carrier.positions.indexOf(shot) != -1) {
          if (this.ships.carrier.hits.indexOf(shot) == -1) {
            this.ships.carrier.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.carrier.sunk == 'false') {
            if (this.ships.carrier.hits.length >= 6) {
              this.ships.carrier.sunk = 'true';
            }
          }
        } else if (this.ships.battleship.positions.indexOf(shot) != -1) {
          if (this.ships.battleship.hits.indexOf(shot) == -1) {
            this.ships.battleship.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.battleship.sunk == 'false') {
            if (this.ships.battleship.hits.length >= 5) {
              this.ships.battleship.sunk = 'true';
            }
          }
        } else if (this.ships.cruiser.positions.indexOf(shot) != -1) {
          if (this.ships.cruiser.hits.indexOf(shot) == -1) {
            this.ships.cruiser.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.cruiser.sunk == 'false') {
            if (this.ships.cruiser.hits.length >= 4) {
              this.ships.cruiser.sunk = 'true';
            }
          }
        } else if (this.ships.destroyer.positions.indexOf(shot) != -1) {
          if (this.ships.destroyer.hits.indexOf(shot) == -1) {
            this.ships.destroyer.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.destroyer.sunk == 'false') {
            if (this.ships.destroyer.hits.length >= 3) {
              this.ships.destroyer.sunk = 'true';
            }
          }
        } else if (this.ships.patrolboat.positions.indexOf(shot) != -1) {
          if (this.ships.patrolboat.hits.indexOf(shot) == -1) {
            this.ships.patrolboat.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.patrolboat.sunk == 'false') {
            if (this.ships.patrolboat.hits.length >= 2) {
              this.ships.patrolboat.sunk = 'true';
            }
          }
        } else {
          //something went wrong
        }

        if (this.allFleetShips.indexOf(shot) == -1) {//not a position where a ship exists
          this.whiteO(la[0])//mark grid ??????
          this.pushShotsRemoveFromAttackGrid(la[0]);
        } else {

        }

        this.figureSunk();
        this.checkForWin();
      },

      getLastDigit(num) {
        var tmp = num.toString();
        if (tmp.length == 2) {
          tmp = tmp[1];
        } else {
          tmp = tmp[0]
        }

        if (tmp == 0) {
          tmp = 10;
        }

        return tmp;
      },

      updateShip(ship, grid, salvo) {
        if (ship.hits.indexOf(grid) == -1) {
          ship.hits.push(grid);
          this.redX(grid);

          if (salvo.toString() == 'true') {
            Attack.methods.updateHits(grid);
          }

          this.pushShotsRemoveFromAttackGrid(grid);

          var len = ship.positions.length;

          //check for ship sunk
          if (ship.hits.length >= len) {
            ship.sunk = 'true';
            this.figureSunk();
            this.checkForWin();
          }

        }
      },

      pushShotsRemoveFromAttackGrid(num) {
        if (Attack.methods.getShots().indexOf(num) == -1) {
          Attack.methods.shotsFired.push(num);
        }
        // var aGrid = [];
        var aGrid = Attack.methods.getAttackGrid();

        if (aGrid.indexOf(num) != -1) {
          Attack.methods.removeFromAttackGrid([num])
        }
      },

      findUpdateShip(grid, salvo) {
        if (this.ships.carrier.positions.indexOf(grid) != -1) {
          this.updateShip(this.ships.carrier, grid, salvo);
          return;
        }
        if (this.ships.battleship.positions.indexOf(grid) != -1) {
          this.updateShip(this.ships.battleship, grid, salvo);
          return;
        }
        if (this.ships.cruiser.positions.indexOf(grid) != -1) {
          this.updateShip(this.ships.cruiser, grid, salvo);
          return;
        }
        if (this.ships.destroyer.positions.indexOf(grid) != -1) {
          this.updateShip(this.ships.destroyer, grid, salvo);
          return;
        }
        if (this.ships.patrolboat.positions.indexOf(grid) != -1) {
          this.updateShip(this.ships.patrolboat, grid, salvo);
          return;
        }
      },

      computersAttackTurn() {
        var count = 0;

        if (this.basefactor == 1) {
          count = 1;
        } else if (this.basefactor == 2) {
          count = 3 - Math.ceil(Attack.methods.getEnemyShipsSunk() / 2);
        } else if (this.basefactor == 3) {
          count = 5 - Attack.methods.getEnemyShipsSunk();
        }

        if (this.basefactor == 4) {
          count = 10 - (2 * Attack.methods.getEnemyShipsSunk());
        }

        while (count > 0) {
          var ra = [];
          var la = [];

          ra = Attack.methods.getRightAttack();
          la = Attack.methods.getLeftAttack();

          //left attack
          if (la && la.length) {
            if (la.length > 0) {
              var ldigit = this.getLastDigit(la[0]);

              if (this.allFleetShips.indexOf(la[0]) != -1) { //hit
                this.findUpdateShip(la[0], false);
                if (ldigit > 1) {
                  var newGrid = la[0] - 1;//next grid to the left
                  la.splice(0, 1, newGrid)
                } else {//no more shots to the left. Remove from left Attack array
                  la.splice(0, 1)
                }
                count--;

              } else {//missed
                this.whiteO(la[0])//mark grid
                this.pushShotsRemoveFromAttackGrid(la[0]);//add to shots fired. //remove from attack grid if exists                              
                la.splice(0, 1)//remove from leftAttack array.
                count--;
              }
              continue;
            }
          }

          //right attack
          if (ra && ra.length) {
            if (ra.length > 0) {
              var rdigit = this.getLastDigit(ra[0]);

              if (this.allFleetShips.indexOf(ra[0]) != -1) { //hit
                this.findUpdateShip(ra[0], false);

                if (rdigit < 10) {
                  var newGrid = ra[0] + 1;//next grid to the right
                  ra.splice(0, 1, newGrid)
                } else {//no more shots to the right.Remove from right Attack array
                  ra.splice(0, 1)
                }
                count--;

              } else {//missed
                this.whiteO(ra[0])//mark grid
                this.pushShotsRemoveFromAttackGrid(ra[0]);//add to shots fired. //remove from attack grid if exists                
                ra.splice(0, 1)//remove from rightAttack array.
                count--;
              }
              continue;
            }
          }

          this.figureSunk();
          if (this.checkForWin()) {
            return;
          }

          if (Attack.methods.getAttackGrid().length == 0) {
            continue;
          }

          //random attack
          count = this.randomAttack(count);
          var grid2 = Attack.methods.getAttackGrid();

        }
      },

      checkForWin() {
        if (this.fleetShipsSunk > 4) {
          this.msg = 'COMPUTER WON!'
          this.updateStats('false');

          var attackBtn = document.getElementById('attack2');
          attackBtn.disabled = 'true';
          return true;
        }
      },

      randomAttack(num) {
        var count = num;
        var grid = Attack.methods.getAttackGrid();
        var salvo = [];
        var tmp = 0;

        if (count < grid.length) {
          while (tmp < count) {
            var num = Math.floor(Math.random() * grid.length);//grab random index

            if (salvo.indexOf(grid[num]) == -1) { //!if salvo doesn't already have the generated number
              salvo.push(grid[num]);
              tmp++;
            }
          }

        } else {//grid is smaller than number of counts remaining..probably at the end of the game

          for (var x = 0; x < grid.length; x++) {
            salvo.push(grid[x]);
          }
        }

        //have ending shots now. 
        for (var i = 0; i < salvo.length; i++) {
          if (this.allFleetShips.indexOf(salvo[i]) != -1) {
            this.findUpdateShip(salvo[i], true);
            Attack.methods.updateHits(salvo[i])
            this.pushShotsRemoveFromAttackGrid(salvo[i]);
          } else {
            this.whiteO(salvo[i])//mark grid
            this.pushShotsRemoveFromAttackGrid(salvo[i]); //store fired shots. remove from attack grid if present
          }

          count--;

          if (count <= 0) {
            return count;
          }
        }

        return count;
      },

      startAttack() {
        this.figureSunk();

        var numShots = 0;

        if (this.baseshots == 1) {
          numShots = this.baseshots;
        } else if (this.baseshots == 3) {
          numShots = 3 - Math.ceil(this.fleetShipsSunk / 2);
        } else {
          numShots = 5 - this.fleetShipsSunk;
        }

        var firing = this.getCoordinates();
        var allShips = Attack.methods.getAllShips(); //hack. general list
        var allEnemyShips = Attack.methods.getAllEnemyShips(); //hack. specific list

        //num is the allowed number of shots fired
        for (var i = 0; i < numShots; i++) {
          if (allShips.indexOf(firing[i]) != -1) {  //if it hits something...    need to update list
            //find ship
            for (var f = 0; f < 5; f++) {
              if (allEnemyShips[f].positions.indexOf(firing[i]) != -1) {
                if (allEnemyShips[f].hits.indexOf(firing[i]) == -1) {//!
                  allEnemyShips[f].hits.push(firing[i]);
                  this.redX(firing[i]);
                }

                //sunk check next. 
                if (allEnemyShips[f].hits.length == allEnemyShips[f].positions.length) {
                  var el = 'e' + allEnemyShips[f].positions.length;
                  var en = document.getElementById(el);
                  en.style.color = 'red';
                  allEnemyShips[f].sunk = 'true';
                }
              }
            }
          } else {
            this.whiteO(firing[i])
          }
        }

        Attack.methods.figureComputerShipsSunk()

        this.msg = "You've Sunk " + Attack.methods.getEnemyShipsSunk() + " Ship(s)";

        if (Attack.methods.getEnemyShipsSunk() == 5) {
          this.msg = 'YOU WON!';
          this.updateStats('true');
        }

        this.computersAttackTurn();
      },

      getCoordinates() {
        var firingArray = [];

        firingArray.push((this.convert2Num(this.f1) + 100))

        if (this.f2 != "XX") {
          firingArray.push((this.convert2Num(this.f2) + 100))
        }

        if (this.f3 != "XX") {
          firingArray.push((this.convert2Num(this.f3) + 100))
        }

        if (this.f4 != "XX") {
          firingArray.push((this.convert2Num(this.f4) + 100))
        }

        if (this.f5 != "XX") {
          firingArray.push((this.convert2Num(this.f5) + 100))
        }

        return firingArray
      },

      updateStats(status) {
        var user = this.$store.state.activeUser;

        if (status == 'true') {
          user.wins++;
        }
        user.gamesPlayed++;
        this.$store.dispatch("updateUser", user);

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* * {
     border: 1px solid yellow;  
  } */

  .readouts {
    margin: 0;
    padding: 0;
    border-radius: 7px;
  }

  #help {
    font-size: 12px;
  }

  .message {
    position: absolute;
    bottom: 122px;
    right: 42px;
    text-align: center;
    border-radius: 7px;
  }

  .options {
    text-align: center;
    font-size: 10px;
    padding: 0px;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    float: left;
    position: absolute;
    bottom: 157px;
    width: 99.5%;
  }

  .options>p {
    width: 97.9%;
    border-radius: 7px;
  }

  .diff {
    font-size: 12px;
    margin: 0;
    padding: 5px;
    border: 1px solid black;
    border-radius: 10px;
  }

  hr {
    padding: 0;
    margin: 5px;
  }

  .lleft {
    float: left;
    color: whitesmoke;
  }

  .rright {
    float: right;
    color: whitesmoke;
  }

  .controls {
    color: red;
  }

  .attack {
    background: red;
    border: 1px solid white;
    position: absolute;
    bottom: -8px;
    right: 3px;
  }

  .greenbtn {
    background: green;
    height: 48px;
    width: 45px;
    white-space: normal;
    border-radius: 7px;
  }

  p {
    width: 230px;
    border: 1px solid whitesmoke;
    height: 3.8vh;
    margin: 3px;
    border-radius: 7px;
  }

  .full {
    width: 150px;
    margin: 0px;
    padding: 5px;
  }

  .right {
    position: absolute;
    right: 50px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .right1 {
    position: absolute;
    right: 0px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .right2 {
    position: absolute;
    right: 0px;
    bottom: 232px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .lowerright {
    position: absolute;
    right: 0px;
    bottom: 32px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .lowerrightplus {
    position: absolute;
    right: 70px;
    bottom: 32px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .middleright {
    position: absolute;
    top: 25px;
    right: 0px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .middlerightplus {
    position: absolute;
    top: 25px;
    right: 70px;
    margin: 3px;
    color: white;
    border: 1px solid white;
    text-align: center;
  }

  .myRight {
    position: absolute;
    right: 5px;
    bottom: 5px;
    margin: 63px, 3px, 3px, 3px;
    color: white;
    border: 1px solid white;
    height: 110px;
    width: 120px;
    border-radius: 7px;
  }

  .myLeft {
    position: absolute;
    left: 5px;
    bottom: 5px;
    margin: 63px, 3px, 3px, 3px;
    color: green;
    border: 1px solid red;
    height: 110px;
    width: 160px;
    font-size: 10px;
  }

  .rightplus {
    position: absolute;
    right: 90px;
    text-align: center;
  }

  .rightplus1 {
    position: absolute;
    right: 70px;
    text-align: center;
  }

  th {
    font-size: 12px;
    color: black;
  }

  form {
    display: inline;
  }

  input {
    width: 40px;
    height: 20px;
    margin: 3px;
    font-size: 10px;
    border: 1px solid whitesmoke;
    border-radius: 7px;
  }

  .container-fluid {
    width: 100%;
  }

  .cont {
    display: inline-block;
  }

  .test {
    height: 20px;
    width: 20px;
    border: 1px solid blue;
    float: left;
    padding: 0;
    margin: 0;
  }
  /* table {
    border-collapse: collapse;
  } */

  td {
    border: 1px solid white;
    margin: 0;
  }

  .card {
    height: 500px;
    display: inline-block;
  }

  .card-block {
    text-align: center;
    padding: 10px;
  }

  .card-title {
    text-align: center;
    margin: 0;
  }

  .rightGrid {
    float: right;
    margin: 4px;
  }

  .leftGrid {
    margin: 4px;
  }

  .centerCard {
    text-align: center;
    width: 291px;
    color: white;
  }

  .center {
    text-align: center;
    padding: 0, 15px, 0, 15px;
    width: 75%;
  }

  .titlecenter {
    text-align: center;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  h6 {
    padding: 10px, 10px, 0, 10px
  }

  h5 {
    width: 80%;
    display: inline-block;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .enemy {
    position: absolute;
    left: 5px;
    bottom: 5px;
    color: green;
    border: 1px solid white;
    height: 110px;
    width: 128px;
    border-radius: 7px;
  }

  .elist {
    font-size: 12px;
    height: 18px;
    width: 120px;
  }
</style>