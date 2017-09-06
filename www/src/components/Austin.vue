<template>
  <div class="Memory-Cards">
    <h1>{{ msg }}</h1>
    <div class="cards"></div>
    <div></div>
  </div>
</template>
<!-- TODO: WHAT STEPS DO I NEED FOR CARD MATCHING. 
     WHAT DATA DO I NEED TO MANIPULATE
    FIND SIMPLER EXPLANATIONS FOR VUE 
     ASSIGN CARDS INTO AN ARRAY OF CARDS  -->
<script>
  export default {
    name: 'Memory Cards',
    data() {
      return {

        msg: "Austin's Component",
        cards: [],
        flippedCards: false,
        foundCards:0,
        time:0,





      }
    },
    computed: {},
    methods: {
      //HOW DOES THE GAME START? BUTTON THAT SETS UP GAME
      startGame() { },
      //BUTTON THAT RESETS THE CARDS AND TIMERS TO DEFAULT
      resetGame() { },
      //ONCE GAME IS COMPLETED, DISPLAY WIN ALERT, TURNS IT TOOK TO WIN, AND TIME IT TOOK TO WIN
      finishGame() { },
      //WHEN GAME STARTS RANDOMLY SHUFFLE CARDS
      shuffleCards() { },
      //WHEN CLICKED, CARDFLIPPED IS TRUE AND BE ABLE TO SEE IMG OR CONTENT
      flipCards() { },
      // TODO: WORK ON TIMER AND HOW IT INCREMENTS
      timer(){
        setInterval(()=>{
          if(time>0){
            time++
          }
        })
      },
      
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
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