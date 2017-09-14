<template>
  <table id='attack'>
    <tr>
      <td></td>
      <td>A</td>
      <td>B</td>
      <td>C</td>
      <td>D</td>
      <td>E</td>
      <td>F</td>
      <td>G</td>
      <td>H</td>
      <td>I</td>
      <td>J</td>
    </tr>

    <tr>
      <td>A</td>
      <td id="101"></td>
      <td id="102"></td>
      <td id="103"></td>
      <td id="104"></td>
      <td id="105"></td>
      <td id="106"></td>
      <td id="107"></td>
      <td id="108"></td>
      <td id="109"></td>
      <td id="110"></td>
    </tr>

    <tr>
      <td>B</td>
      <td id="111"></td>
      <td id="112"></td>
      <td id="113"></td>
      <td id="114"></td>
      <td id="115"></td>
      <td id="116"></td>
      <td id="117"></td>
      <td id="118"></td>
      <td id="119"></td>
      <td id="120"></td>
    </tr>

    <tr>
      <td>C</td>
      <td id="121"></td>
      <td id="122"></td>
      <td id="123"></td>
      <td id="124"></td>
      <td id="125"></td>
      <td id="126"></td>
      <td id="127"></td>
      <td id="128"></td>
      <td id="129"></td>
      <td id="130"></td>
    </tr>

    <tr>
      <td>D</td>
      <td id="131"></td>
      <td id="132"></td>
      <td id="133"></td>
      <td id="134"></td>
      <td id="135"></td>
      <td id="136"></td>
      <td id="137"></td>
      <td id="138"></td>
      <td id="139"></td>
      <td id="140"></td>
    </tr>

    <tr>
      <td>E</td>
      <td id="141"></td>
      <td id="142"></td>
      <td id="143"></td>
      <td id="144"></td>
      <td id="145"></td>
      <td id="146"></td>
      <td id="147"></td>
      <td id="148"></td>
      <td id="149"></td>
      <td id="150"></td>
    </tr>

    <tr>
      <td>F</td>
      <td id="151"></td>
      <td id="152"></td>
      <td id="153"></td>
      <td id="154"></td>
      <td id="155"></td>
      <td id="156"></td>
      <td id="157"></td>
      <td id="158"></td>
      <td id="159"></td>
      <td id="160"></td>
    </tr>

    <tr>
      <td>G</td>
      <td id="161"></td>
      <td id="162"></td>
      <td id="163"></td>
      <td id="164"></td>
      <td id="165"></td>
      <td id="166"></td>
      <td id="167"></td>
      <td id="168"></td>
      <td id="169"></td>
      <td id="170"></td>
    </tr>

    <tr>
      <td>H</td>
      <td id="171"></td>
      <td id="172"></td>
      <td id="173"></td>
      <td id="174"></td>
      <td id="175"></td>
      <td id="176"></td>
      <td id="177"></td>
      <td id="178"></td>
      <td id="179"></td>
      <td id="180"></td>
    </tr>

    <tr>
      <td>I</td>
      <td id="181"></td>
      <td id="182"></td>
      <td id="183"></td>
      <td id="184"></td>
      <td id="185"></td>
      <td id="186"></td>
      <td id="187"></td>
      <td id="188"></td>
      <td id="189"></td>
      <td id="190"></td>
    </tr>

    <tr>
      <td>J</td>
      <td id="191"></td>
      <td id="192"></td>
      <td id="193"></td>
      <td id="194"></td>
      <td id="195"></td>
      <td id="196"></td>
      <td id="197"></td>
      <td id="198"></td>
      <td id="199"></td>
      <td id="200"></td>
    </tr>

  </table>

</template>


<script>
  //import Attack from './Attack'
  //import Fleet from './Fleet'

  export default {
    name: 'attack',
    allShips: [],

    referenceGrid: [],
    attackGrid: [],
    shipsSunk: '',
    enemyShips: [], //?
    shotsFired: [],

    //firstHit: '',
    goLeftHit: '',
    goRightHit: '',

    data() {
      return {
        msg1: "Messages go here",
        enemyships: {
          carrier: {
            positions: [],
            hits: []
          },
          battleship: {
            positions: [],
            hits: []
          },
          cruiser: {
            positions: [],
            hits: []
          },
          destroyer: {
            positions: [],
            hits: []
          },
          patrolboat: {
            positions: [],
            hits: []
          },
        }
      }
    },

    components: {
    },

    computed: {
    },

    methods: {
      changeRed(el) {
        var x = document.getElementById(el);
        x.style.backgroundColor = 'red';
      },

      redX(el) {
        var x = document.getElementById(el);
        x.innerHTML = "X"
        //x.style.color = 'red';
        x.style.color = 'white';
        x.style.fontSize = '20px';
      },

      whiteO(el) {
        var x = document.getElementById(el);
        x.innerHTML = "O"
        x.style.color = 'white';
        x.style.fontSize = '20px';
      },

      grayBG(el) {
        var x = document.getElementById(el);
        x.innerHTML = "?"
        x.style.color = 'gray';
        x.style.fontSize = '20px';
      },

      getAttackGrid() {
        return this.attackGrid;
      },

      updateAttackGrid(arr) {//start#. //count)
        //sort lowest to highest. Important!
        var salvo = arr;//should work with one

        if (arr.length > 1) {
          salvo = arr.sort(function (a, b) {
            return a - b;
          });
        }

        for (var i = salvo.length - 1; i >= 0; i--) {
          var ind = this.attackGrid.indexOf(salvo[i])

          if (ind != -1) {
            var removedIndex = this.attackGrid.splice(ind, 1)
          }
        }
      },

      getAllShips() {
        return this.allShips;
      },

      getAllEnemyShips() {
        return this.enemyShips;
      },

      getEnemyShipsSunk() {
        this.figureComputerShipsSunk();

        return this.shipsSunk;
      },

      setEnemyShipsSunk(num) {
        this.shipsSunk += num;
      },

      figureComputerShipsSunk() {
        this.shipsSunk = 0;

        for (var x = 6; x > 1; x--) {
          if (this.enemyShips[x - 2].positions.length == this.enemyShips[x - 2].hits.length) {
            this.shipsSunk++;
          }
        }
      },

      getRightHit() {
        return this.goRightHit;
      },

      getLeftHit() {
        return this.goLeftHit;
      },

      updateHits(pt) {
        //need a left and right

        var tmp = pt.toString();
        var num = 0;

        if (tmp.length == 1) {
          num = pt
        } else {
          num = tmp[1];
        }

        this.shotsFired.push(pt);


        //corner cases
        if (num != 1 && num != 0) {
          //both
          if (!this.goLeftHit.includes(pt - 1)) {

            this.goLeftHit.push(pt - 1);
          }

          if (!this.goRightHit.includes(pt + 1)) {
            this.goRightHit.push(pt + 1);
          }

        } else if (num == 1) {
          //only right 
          if (!this.goRightHit.includes(pt + 1)) {
            this.goRightHit.push(pt + 1);
          }
        } else if (num == 0) {
          //only left
          if (!this.goLeftHit.includes(pt - 1)) {
            this.goLeftHit.push(pt - 1);
          }
        }
      },

      alterLeftHit(num) {
        this.goLeftHit.splice(0, 1, num)
        this.shotsFired.push(num);
      },

      alterRightHit(num) {
        this.goRightHit.splice(0, 1, num)
        this.shotsFired.push(num);
      },

      removeRightHit() {
        this.goRightHit.splice(0, 1)
      },

      removeLeftHit() {
        this.goLeftHit.splice(0, 1)
      },

      getShots() {
        return this.shotsFired;
      },

      updateShots(num) {
        this.shotsFired.push(num);
      },

      sortUnique() {
        this.shotsFired.sort();

        var tmp = [];
        tmp = this.shotsFired;

        this.shotsFired = [];

        for (var x = 0; x < tmp.length; x++) {
          if (tmp[x] < 101) {
            if (this.shotsFired.includes(tmp[x])) {

            } else {
              this.shotsFired.push(tmp[x])
            }
          }
        }
        this.shotsFired.sort();

        //then scrub
        this.scrub()
      },

      scrub() {
        this.goLeftHit.sort();
        this.goRightHit.sort();
        this.shotsFired.sort();

        for (var a = this.goLeftHit.length - 1; a > -1; a--) {
          if (this.shotsFired.includes(this.goLeftHit[a])) {
            this.goLeftHit.splice(a, 1)
          }
        }

        for (var a = this.goRightHit.length - 1; a > -1; a--) {
          if (this.shotsFired.includes(this.goRightHit[a])) {
            this.goRightHit.splice(a, 1)
          }
        }
      },

      generateShips() {
        //initialize:
        this.enemyShips = [];
        this.shotsFired = [];
        var names = ['Patrol Boat', 'Destroyer', 'Cruiser', 'Battleship', 'Carrier']

        for (var s = 0; s < 5; s++) {
          this.enemyShips.push({ positions: [], hits: [], sunk: 'false', name: names[s] });
        }

        this.generateShip(6); //carrier
        this.generateShip(5); //battleship
        this.generateShip(4); //cruiser
        this.generateShip(3); //destroyer
        this.generateShip(2); //patrol boat

        this.shipsSunk = 0;
        this.goLeftHit = [];
        this.goRightHit = [];
      },

      generateShip(occupy) {
        //need seed number of 1-10 for starting index. 
        var num = this.getRandomNumber(occupy);
        var horiz = this.coinToss();

        if (horiz) {
          this.setHPositions(num, occupy)
        } else {
          this.setVPositions(num, occupy)
        }
      },

      setHPositions(nm, occpy) {
        var num = nm;
        var occupy = occpy;
        var tempPositions = [];
        var keepGoing = true;
        //num is starting square index.
        //occupy is number of spaces it occupies. 6
        if (this.allShips === undefined) {
          //initialize as array.
          this.allShips = [];
          this.shotsFired = [];
        }

        //loop will start about here
        while (keepGoing == true) {
          var fubar = false;
          var y = this.getRandomNumber(0);//gets a number used to figure out rows
          num = 100 + (y * 10) + num;

          if (num + occupy > 200) {
            num = num - 10
          }

          if (Math.ceil((num - 100) / 10) + occupy > 10) {
            num = this.getRandomNumber(occupy);
            //start over
            continue;
          }

          for (var i = num; i < num + occupy; i++) {
            if (!this.allShips.includes(i)) {
              //if existing position not found, then load in temp array
              tempPositions.push(i);
            } else {

              tempPositions = [];
              //get new number
              num = this.getRandomNumber(occupy);
              fubar = true;
              break;
            }
          }

          if (fubar) {
            continue;
          } else {
            keepGoing = false;
          }
        }

        //now save
        var len = tempPositions.length;
        this.enemyShips[len - 2].positions = [];


        for (var z = 0; z < len; z++) {
          //make it visual for testing only
          //this.changeRed(tempPositions[z]);

          this.allShips.push(tempPositions[z]);
          this.shotsFired.push(tempPositions[z]);
          this.enemyShips[len - 2].positions.push(tempPositions[z]);
        }

      },

      setVPositions(nm, occpy) {
        var num = nm;// + 100;
        var occupy = occpy;
        var keepGoing = true;
        var tempPositions1 = [];
        //Num is starting square index.
        //occupy is number of spaces it occupies. 6

        if (this.allShips === undefined) {
          //initialize as array.
          this.allShips = [];
        }

        //inner loop. Constantly loops until viable location generated 
        while (keepGoing == true) {
          var fubar = false;
          //since vertical. Only caution is overflow.
          //EX: if start at 116. CARRIER ADD 6 SPACES OR 60.
          //now just check for existence of another ship at coordinates

          var y = this.getRandomNumber(occupy);//gets a number used to figure out rows
          num = (y * 10) + 100 + num;

          //make sure ship + calculated starting position will fit
          var tmp = num + (occupy * 10);

          if (tmp > 200) {
            fubar = true;
            keepGoing = true;
            num = this.getRandomNumber(occupy);
            continue;
          }

          for (var i = num; i < num + (occupy * 10); i += 10) {
            if (!this.allShips.includes(i)) {
              //if position not found, then load in temp array
              tempPositions1.push(i);
            } else {

              keepGoing = true;
              tempPositions1 = [];

              //get new number
              num = this.getRandomNumber(occupy);// + 100;// + 100
              fubar = true;
              break;
            }
          }

          if (fubar) {
            continue;
          } else {
            keepGoing = false;
          }
        }

        var length = tempPositions1.length;
        this.enemyShips[length - 2].positions = [];

        //now save
        for (var z = 0; z < length; z++) {
          //don't forget to make it visual for testing only
          //this.changeRed(tempPositions1[z]);

          this.allShips.push(tempPositions1[z]);
          this.shotsFired.push(tempPositions1[z]);
          this.enemyShips[length - 2].positions.push(tempPositions1[z]);
        }


      },

      coinToss() {
        // returns true for 0, false for 1
        var res = Math.floor(Math.random() * 2);

        if (res == 0) {
          return true;
        }

        return false;
      },

      getRandomNumber(num) {
        //num is number of spaces the ship occupies.
        //x is viable allowable range.
        var x = 11 - num;
        var tmp = Math.floor(Math.random() * x + 1)
        return tmp;
      },

      setAttackGrid() {
        this.attackGrid = [];
        this.referenceGrid = [];

        //outer loop for each row
        for (var row = 0; row < 10; row++) {
          for (var cell = 1; cell < 11; cell++) {
            if (row != 0) {//==rows 2-10 (need 1-9 for the math)
              if (row % 2 == 0) {//odd rows in math. row 1 is second row. Need even cell #s.add 11

                if (cell % 2 == 0) {//2,4,6,8,10
                  this.attackGrid.push((row * 10) + cell)
                  this.referenceGrid.push((row * 10) + cell)
                }
              } else {//even rows. Need odd cell #s. add 9.

                if (cell % 2 != 0) {// 1,3,5,7,9
                  this.attackGrid.push((row * 10) + cell)
                  this.referenceGrid.push((row * 10) + cell)
                }
              }
            } else {
              //first-row : want to grab even numbers
              if (cell % 2 == 0) {
                this.attackGrid.push(cell)
                this.referenceGrid.push(cell)
              }
            }
          }
        }

        //visual check:
        // for(var i =0; i < this.attackGrid.length; i++){
        //   this.changeRed(this.attackGrid[i])
        // }

        //visual check:
        // for(var i =0; i < this.referenceGrid.length; i++){
        //   this.changeRed(this.referenceGrid[i])
        // }
      },
    }
  }

</script>

<style scoped>
  .cont {
    display: inline-block;
  }

  .test {
    height: 35px;
    width: 25px;
    border: 1px solid blue;
    float: left;
  }

  table {
    border-collapse: collapse;
  }

  td {
    /* padding: 10px; */
    width: 30px;
    height: 42px;

    border: 1px solid white;
    margin: 0;
    font-style: Arial;

    text-align: center;
  }

  .card {
    height: 500px;
    display: inline-block;
  }

  .card-block {
    text-align: center;
  }

  .card-title {
    text-align: center;
  }

  .right {
    float: right;
    margin: 0;
  }

  .centerCard {
    text-align: center;
    width: 293px;
    color: red;
  }

  .center {
    text-align: center;
    padding: 0, 15px, 0, 15px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  h5,
  h6 {
    padding: 10px, 10px, 0, 10px
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
</style>