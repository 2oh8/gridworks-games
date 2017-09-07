<template>
  <div class="Memory-Cards">
    <h1>{{ msg }}</h1>
    <button @click.prevent="startGame">start game</button>
    <button @click.prevent="resetGame">reset game</button>
    <div id="game" v-for="card in cards">
    
    </div>
  </div>
</template>
<!-- TODO: WHAT STEPS DO I NEED FOR CARD MATCHING. 
     WHAT DATA DO I NEED TO MANIPULATE
    FIND SIMPLER EXPLANATIONS FOR VUE 
     ASSIGN CARDS INTO AN ARRAY OF CARDS  -->
<script>
  export default {
    name: 'austin',
    data() {
      return {

        msg: "Austin's Component",
        cards: [],
        flippedCards: false,
        score: 0,
        time: 0,
        timer:null
        //IF WE WORK ON SOCKETS, MULTIPLE PLAYERS CAN BE PART OF DATA AS OBJECTS
      }
    },
    computed: {
      flippedCards(){
        return cards.flipped = true
      }
    },
    methods: {
      //HOW DOES THE GAME START? BUTTON THAT SETS UP GAME
      startGame(){
        shuffleCards()

      },
      //BUTTON THAT RESETS THE CARDS AND TIMERS TO DEFAULT
      resetGame() {
      },
      //ONCE GAME IS COMPLETED, DISPLAY WIN ALERT, TURNS IT TOOK TO WIN, AND TIME IT TOOK TO WIN
      finishGame() {
        if(score==10){

        }
      },
      //WHEN GAME STARTS RANDOMLY SHUFFLE CARDS AND DRAW TO SCREEN
      shuffleCards() {
        return state.store.cards
      },
      //WHEN CLICKED, CARDFLIPPED IS TRUE AND BE ABLE TO SEE IMG OR CONTENT THEN HIDE MATCHED PAIR AND INCREMENT SCORE BY 1
      //IF NOT RETURN CARDFLIPPED TO FALSE
      flipCards() { },
      // TODO: WORK ON TIMER AND HOW IT INCREMENTS
      timer() {
        setInterval(() => {
          if (time > 0) {
            time++
          }
        })
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* CARDS ARE STYLED */
  .card{

    width: 50px;
    height: 80px
    padding 10px;
    align-self: center; 
  }
    
  
  
</style>