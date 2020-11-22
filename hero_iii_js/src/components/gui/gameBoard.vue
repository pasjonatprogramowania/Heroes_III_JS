<template>
  <div class="container">
    <div class="wrapper">
      <h1>Player 1 vs Player 2</h1>
    </div>
    <div class="wrapper">
      <div class="side-board">
        <div v-for="index in this.gameEngine.board.boardY" :key="index">
          <div class="my-creature field" :positionOnPlayer="`${index}`">
            {{ index }}
          </div>
        </div>
      </div>
      <div class="board">
        <div v-for="index in this.gameEngine.board.boardSize" :key="index">
          <div class="board-creture field" :positionOnBoard="`${index}`">
            {{ index }}
          </div>
        </div>
      </div>
      <div class="side-board">
        <div v-for="index in this.gameEngine.board.boardY" :key="index">
          <div class="ennemy-creature field" :positionOnEnnemy="`${index}`">
            {{ index }}
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div>
        <button>Spell Book</button>
        <button>Pass</button>
        <button>Defend</button>
        <button>Run</button>
      </div>
    </div>
  </div>
</template>
<script>
import Creature from "../js/creature.js";
import GameEngine from "../js/gameEngine.js";
export default {
  data() {
    return {
      gameEngine: new Creature(),
      myCreature: [],
      ennemyCreature: [],
    };
  },
  methods: {
    createGameEngineObjectAndBoard() {
      let newCreature1 = new Creature();
      let newCreature2 = new Creature();
      let newCreature3 = new Creature();

      let newCreature4 = new Creature();
      let newCreature5 = new Creature();
      let newCreature6 = new Creature();

      this.myCreature.push(newCreature1);
      this.myCreature.push(newCreature2);
      this.myCreature.push(newCreature3);

      this.ennemyCreature.push(newCreature4);
      this.ennemyCreature.push(newCreature5);
      this.ennemyCreature.push(newCreature6);

      this.gameEngine = new GameEngine(this.myCreature, this.ennemyCreature);
    },
    putCreaturesOnBoard() {
      this.myCreature.forEach((item, index) => {
        document.querySelector(
          `div[positionOnEnnemy='${index + 1}']`
        ).innerHTML = item.stats.name;
      });
      this.ennemyCreature.forEach((item, index) => {
        document.querySelector(
          `div[positionOnPlayer='${index + 1}']`
        ).innerHTML = item.stats.name;
      });
    },
  },
  created() {
    this.createGameEngineObjectAndBoard();
  },
  mounted() {
    this.putCreaturesOnBoard();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");
:root {
  --mainTextColor: #9e9e9e;
  --mainBackgoundColor: #1b1d1f;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  color: var(--mainTextColor);
}
html {
  background-color: var(--mainBackgoundColor);
}
.wrapper {
  display: flex;
  justify-content: center;
}
.board {
  display: grid;
  grid-template-rows: repeat(15, minmax(50px, 1fr));
  grid-template-columns: repeat(20, minmax(50px, 1fr));
  grid-auto-flow: column;
}
side-board {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
}
.field.my-creature,
.field.ennemy-creature {
  margin-left: 20px;
  margin-right: 20px;
}
.field {
  border: 2px solid var(--mainTextColor);
  width: 50px;
  height: 50px;
}
.container h1 {
  margin: 0 auto 40px auto;
}
button {
  background-color: var(--mainBackgoundColor);
  border-radius: 20%;
  color: var(--mainTextColor);
  margin: 20px 10px auto;
  padding: 10px;
  font-size: 1.2rem;
  -webkit-box-shadow: 7px 3px 15px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 7px 3px 15px 0px rgba(0, 0, 0, 0.36);
  box-shadow: 7px 3px 15px 0px rgba(0, 0, 0, 0.36);
}
</style>