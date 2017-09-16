<template>
  <div container-fluid>

    <div class="titlecenter">
      <div class="lleft"><span>WINS:</span><span id="wins">{{mywins}}</span></div>

      <!-- <h5 class="center"> <a href="../Battlestations/BattlestationsGameAbout">BattleStations!</a></h5> -->
      <!-- <router-link :to="item.routerLink"> -->
      <h5 class="center">
        <router-link to="./BattlestationsGameAbout">BattleStations!</router-link>
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
              <br><br>
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
              <br><br>
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
              <br><br>
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
              <br><br>
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
            </tr>
          </div>
        </table>

        <v-divider></v-divider>
      </div>

      <div class="row">
        <p class="rightplus fmt">{{msg}} </p>
        <button id="place" type="button" class="right greenbtn" @click.prevent.stop="verifyShips">Place</button>
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

        document.getElementById('place').disabled = true;
        this.aBtn = false;
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

        //disable inputs accordingly
        var shots = 5 - this.fleetShipsSunk;

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
        if (this.ships.carrier.positions.includes(shot)) {
          if (!this.ships.carrier.hits.includes(shot)) {
            this.ships.carrier.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.carrier.sunk == 'false') {
            if (this.ships.carrier.hits.length >= 6) {
              this.ships.carrier.sunk = 'true';
              this.figureSunk();
            }
          }
        } else if (this.ships.battleship.positions.includes(shot)) {
          if (!this.ships.battleship.hits.includes(shot)) {
            this.ships.battleship.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.battleship.sunk == 'false') {
            if (this.ships.battleship.hits.length >= 5) {
              this.ships.battleship.sunk = 'true';
              this.figureSunk();
            }
          }
        } else if (this.ships.cruiser.positions.includes(shot)) {
          if (!this.ships.cruiser.hits.includes(shot)) {
            this.ships.cruiser.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.cruiser.sunk == 'false') {
            if (this.ships.cruiser.hits.length >= 4) {
              this.ships.cruiser.sunk = 'true';
              this.figureSunk();
            }
          }
        } else if (this.ships.destroyer.positions.includes(shot)) {
          if (!this.ships.destroyer.hits.includes(shot)) {
            this.ships.destroyer.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.destroyer.sunk == 'false') {
            if (this.ships.destroyer.hits.length >= 3) {
              this.ships.destroyer.sunk = 'true';
              this.figureSunk();
            }
          }
        } else if (this.ships.patrolboat.positions.includes(shot)) {
          if (!this.ships.patrolboat.hits.includes(shot)) {
            this.ships.patrolboat.hits.push(shot);
            this.redX(shot);
          }
          if (this.ships.patrolboat.sunk == 'false') {
            if (this.ships.patrolboat.hits.length >= 2) {
              this.ships.patrolboat.sunk = 'true';
              this.figureSunk();
            }
          }
        } else {
          //something went wrong
        }

        if (!this.allFleetShips.includes(shot)) {//not a position where a ship exists

          Attack.methods.shotsFired.push(shot);
        } else {

        }
      },

      findShip(ship, shot, grid) {
        var len = ship.positions.length;

        if (ship.positions.includes(shot)) {
          if (!ship.hits.includes(shot)) {
            ship.hits.push(shot);
            this.redX(shot);
          }

          if (ship.sunk == 'false') {
            if (ship.hits.length >= len) {
              ship.sunk = 'true';
              this.figureSunk();
            }

            if (!this.allFleetShips.includes(shot)) {//not a position where a ship exists
              console.log('shot is: ', shot)
              //this.allFleetShips.push(shot); // why pushing to this?

              Attack.methods.shotsFired.push(shot);
            } else {

            }
          }

          Attack.methods.updateHits(shot);
        }

        return Attack.methods.getAttackGrid();
      },

      computersAttackTurn() {
        //get shots able to fire based on ship count (1-5). Enemy is Computer.
        var count = 5 - Attack.methods.getEnemyShipsSunk();
        Attack.methods.sortUnique();

        //START LAST LEG OF DESTRUCTION (Dev-Wise)
        //Create flag to prevent grid attacks
        var autoGridAttack = 'false';

        var rights = [];
        var lefts = [];

        rights = Attack.methods.getRightHit();
        lefts = Attack.methods.getLeftHit();

        var lDigit = -1;
        var rDigit = -1;

        //if something exists on hitlists ...
        if (rights.length != 0 || lefts.length != 0) {
          //autoGridAttack = 'false';

          if (lefts.length != 0) {
            //need to grab the 'ones' place
            var str1 = lefts[0].toString();

            if (str1.length != 0) {
              if (str1.length == 1) {
                lDigit = str1
              } else {
                lDigit = str1[1];
              }
            }
          }

          if (rights.length != 0) {
            //need to grab the 'ones' place
            var str2 = rights[0].toString();

            if (str2.length != 0) {
              if (str2.length == 1) {
                rDigit = str2;
              } else {
                rDigit = str2[1];
              }
            }
          }
        }

        //count > 0 && 
        while (autoGridAttack != 'true') {
          if (count == 0) {
            break;
          }

          var grid1 = Attack.methods.getAttackGrid();

          if (lefts.length != 0) {
            //what if it is not in the fleetships and is ONLY in the left or right arrays!!!!
            if (this.allFleetShips.includes(lefts[0])) {//There's going to be a known hit!

              //find the ship. 
              grid1 = this.findShip(this.ships.carrier, lefts[0], grid1);
              grid1 = this.findShip(this.ships.battleship, lefts[0], grid1);
              grid1 = this.findShip(this.ships.cruiser, lefts[0], grid1);
              grid1 = this.findShip(this.ships.destroyer, lefts[0], grid1);
              grid1 = this.findShip(this.ships.patrolboat, lefts[0], grid1);

              if (grid1.includes(lefts[0])) {
                //remove from grid to prevent repeat shots.        ????
                Attack.methods.updateAttackGrid(lefts[0]);
              }

              if (lDigit == 1) {
                Attack.methods.removeLeftHit(lefts[0]);
              } else {
                Attack.methods.alterLeftHit((lefts[0])); //removes/replaces first index

              }

              count--;
              continue; //go back to top.


            } else {//missed
              this.whiteO(lefts[0])

              //check to see if in grid
              grid1 = Attack.methods.getAttackGrid();

              if (grid1.includes(lefts[0])) {
                //remove from grid to prevent repeat shots.         ????
                Attack.methods.updateAttackGrid(lefts[0]);             //???????
              }

              //since it missed, remove it from lefts
              Attack.methods.removeLeftHit(lefts[0]);
              continue;
            }

          } else {
          }

          Attack.methods.sortUnique();

          //right will go here
          if (rights.length != 0) {

            console.log('All rights is: ', rights)
            //console.log('this.allFleetShips is: ', this.allFleetShips)
            console.log('this.allFleetShips!: ', this.allFleetShips)
            if (this.allFleetShips.includes(rights[0])) {

              console.log('its a hit!: ', rights[0])

              //find the ship. 
              grid1 = this.findShip(this.ships.carrier, rights[0], grid1);
              grid1 = this.findShip(this.ships.battleship, rights[0], grid1);
              grid1 = this.findShip(this.ships.cruiser, rights[0], grid1);
              grid1 = this.findShip(this.ships.destroyer, rights[0], grid1);
              grid1 = this.findShip(this.ships.patrolboat, rights[0], grid1);
              //this.checkAllShips(rights[0])

              //grid1 = Attack.methods.getAttackGrid();
              console.log('grid1 is now: ', grid1)
              console.log('after findShips, rights are now: ', rights[0])

              if (grid1.includes(rights[0])) {
                //remove from grid to prevent repeat shots.         ????
                Attack.methods.updateAttackGrid(rights[0]);             //???????
              }

              count--;

              if (rights.length != 0) {
                var str = rights[0].toString();
                //need to grab the 'ones' place
                if (str.length != 0) {
                  if (str.length == 1) {
                    rDigit = str
                  } else {
                    rDigit = str[1];
                  }
                }
              }
              if (rDigit == 0) {
                rDigit = 10;
              }
              //console.log('rDigit is: ', rDigit)

              if (rDigit < 10) {
                //replace from right array with new position. Continue.

                //console.log('removing/replacing current rights entry at: ', rights[0])
                //console.log('next one in line is: ', (rights[0] + 1))
                Attack.methods.alterRightHit((rights[0])); //removes first entry, adds this one
                //console.log('Current rights entries are now: ', rights)

                //betting this isn't working quite right.


              } else {//Can't go right any further with this one. remove it 
                var ind = rights.indexOf(rights[0])
                // Attack.methods.removeRightHit(rights[0]);
                Attack.methods.removeRightHit(ind);
              }

              continue; //go back to top.


            } else {  //not in ship position grid.

              this.whiteO(rights[0])

              //check to see if in grid
              grid1 = Attack.methods.getAttackGrid();

              if (grid1.includes(rights[0])) {
                //remove from grid to prevent repeat shots.        
                Attack.methods.updateAttackGrid(rights[0]);             //???????
              }

              //since it missed, remove it from rights
              Attack.methods.removeRightHit(rights[0]);
            }

          } else {
            if (lefts.length == 0 && rights.length == 0) {
              autoGridAttack = 'true';
            } else {
              autoGridAttack = 'false';
              continue;
            }

            break;
          }

          if (Attack.methods.getAttackGrid().length == 0) {
            if (lefts.length > 0 || rights.length > 0) {
              continue;
            }
          }
        }

        //Loads random grid points to Salvo magazine
        //randomly generate numbers from attackgrid
        var grid = Attack.methods.getAttackGrid();
        var salvo = [];
        var tmp = 0;

        //grabs random indexes of attack grid
        while (tmp < count) {
          var num = Math.floor(Math.random() * grid.length);

          if (rights.includes(num) || lefts.includes(num) || Attack.methods.getShots().includes(num)) {     //?????????
            continue;
          }

          if (!salvo.includes(grid[num])) { //if salvo doesn't already have the generated number
            salvo.push(grid[num]);
            tmp++;
          }
        }

        //remove from grid to prevent repeat shots.        

        Attack.methods.updateAttackGrid(salvo);

        //attacking with salvo. Check against allFleetShips.
        for (var f = 0; f < salvo.length; f++) {
          if (this.allFleetShips.includes(salvo[f])) {    

            grid = this.findShip(this.ships.carrier, salvo[f], grid);
            grid = this.findShip(this.ships.battleship, salvo[f], grid);
            grid = this.findShip(this.ships.cruiser, salvo[f], grid);
            grid = this.findShip(this.ships.destroyer, salvo[f], grid);
            grid = this.findShip(this.ships.patrolboat, salvo[f], grid);

          } else {
            this.whiteO(salvo[f]);
          }
        }

        this.figureSunk();

        if (this.fleetShipsSunk > 4) {
          this.msg = 'COMPUTER WON!'
          this.updateStats('false');

          var attackBtn = document.getElementById('attack2');
          attackBtn.disabled = 'true';
          return;
        }
      },

      startAttack() {
        //verify inputs.   ?????????
        this.figureSunk();

        var numShots = 5 - this.fleetShipsSunk;  //?????????

        var firing = this.getCoordinates();
        var allShips = Attack.methods.getAllShips(); //hack. general list
        var allEnemyShips = Attack.methods.getAllEnemyShips(); //hack. specific list

        //num is the allowed number of shots fired
        for (var i = 0; i < numShots; i++) {
          if (allShips.includes(firing[i])) {  //if it hits something...    need to update list

            //find ship
            for (var f = 0; f < 5; f++) {
              if (allEnemyShips[f].positions.includes(firing[i])) {
                if (!allEnemyShips[f].hits.includes(firing[i])) {
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
  * {
    /* border: 1px solid yellow;  */
  }

  hr {
    padding: 0;
    margin: 5px;
  }

  .lleft {
    float: left;
    color: blue;
  }

  .rright {
    float: right;
    color: blue;
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
    height: 26px;
  }

  p {
    width: 230px;
    border: 1px solid whitesmoke;
    height: 3.5vh;
    margin: 3px;
  }

  .full {
    width: 270px;
  }

  .right {
    position: absolute;
    right: 0px;
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
    right: 50px;
    text-align: center;
  }

  .rightplus1 {
    position: absolute;
    right: 70px;
    text-align: center;
  }

  .cp {
    /* border: 1px solid whitesmoke; */
  }

  th {
    font-size: 10px;
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
  }

  .container-fluid {
    width: 100%;
  }

  .cont {
    display: inline-block;
  }

  .test {
    height: 35px;
    width: 25px;
    border: 1px solid blue;
    float: left;
  }
  /* table {
    border-collapse: collapse;
  } */

  td {
    /* padding: 10px; */
    border: 1px solid white;
    margin: 0;
  }

  .card {
    height: 500px;
    display: inline-block;
  }

  .card-block {
    text-align: center;
    padding: 0;
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

  .status {
    /* height:100px; */
  }

  .enemy {
    position: absolute;
    left: 5px;
    bottom: 5px;
    /* margin: 63px, 3px, 3px, 3px; */
    color: green;
    border: 1px solid white;
    height: 110px;
    width: 128px;
    /* font-size: 12px; */
  }

  .elist {
    font-size: 12px;
    height: 18px;
    width: 120px;
  }
</style>