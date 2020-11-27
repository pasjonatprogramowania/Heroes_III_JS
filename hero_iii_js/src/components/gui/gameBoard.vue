<template>
  <div class="container">
    <div class="wrapper">
      <h1>Player 1 vs Player 2</h1>
    </div>
    <div class="wrapper">
      <div class="side-board">
        <div v-for="index in gameEngine.board.boardY" :key="index">
          <div
            class="my-creature field"
            name=""
            id=""
            player=""
            position=""
            :positionOnPlayer="`${index}`"
          >
            {{ index }}
          </div>
        </div>
      </div>
      <div class="board">
        <div v-for="index in gameEngine.board.boardSize" :key="index">
          <div
            class="board-creature field"
            name=""
            id=""
            player=""
            position=""
            :positionOnBoard="`${index}`"
          >
            {{ index }}
          </div>
        </div>
      </div>
      <div class="side-board">
        <div v-for="index in gameEngine.board.boardY" :key="index">
          <div
            class="ennemy-creature field"
            name=""
            id=""
            player=""
            position=""
            :positionOnEnnemy="`${index}`"
          >
            {{ index }}
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div>
        <button>Spell Book</button>
        <button @click="passCreature()">Pass</button>
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
  created() {
    this.createGameEngineObjectAndBoard();
  },
  mounted() {
    this.putCreaturesOnBoard();
  },
  methods: {
    createGameEngineObjectAndBoard() {
      let newCreature1 = new Creature("smok1");
      let newCreature2 = new Creature("smok2");
      let newCreature3 = new Creature("smok3");

      let newCreature4 = new Creature("smok4");
      let newCreature5 = new Creature("smok5");
      let newCreature6 = new Creature("smok6");

      this.myCreature.push(newCreature1, newCreature2, newCreature3);

      this.ennemyCreature.push(newCreature4, newCreature5, newCreature6);

      this.gameEngine = new GameEngine(this.myCreature, this.ennemyCreature);
    },
    putCreaturesOnBoard() {
      // prettier-ignore
      this.gameEngine.creaturesOnBoard.forEach((item, index) => {
        if (item.position + 1 <= 15) {
          if (item.creature.stats.name ||item.creature.stats.attack ||item.creature.stats.armor ||item.creature.stats.maxHp ||item.creature.stats.moveRange) {

            let selectorPositionDiv = document.querySelector(`div[positionOnPlayer='${item.position + 1}']`);
            this.addAtrToCreatureField(selectorPositionDiv,item)
          }
        } else {
          if (item.creature.stats.name ||item.creature.stats.attack ||item.creature.stats.armor ||item.creature.stats.maxHp ||item.creature.stats.moveRange) {

            let selectorPositionDiv = document.querySelector(`div[positionOnEnnemy='${(item.position + 1 ) - 285}']`);
            this.addAtrToCreatureField(selectorPositionDiv,item)
          }
        }
        if(item.creature === this.gameEngine.queue.getActiveCreature()){
            document.querySelector(`div[id='${index}']`).setAttribute('style','background-color:green')
        }
      });
    },
    addAtrToCreatureField(selectorPositionDiv, item) {
      selectorPositionDiv.innerHTML = item.creature.stats.name;
      selectorPositionDiv.setAttribute("name", `${item.creature.stats.name}`);
      selectorPositionDiv.setAttribute("id", `${item.id}`);
      selectorPositionDiv.setAttribute("player", `${item.player}`);
      selectorPositionDiv.setAttribute("position", `${item.position + 1}`);
    },
    passCreature() {
      this.gameEngine.pass();
      this.refreshGui();
    },
    refreshGui() {
      this.gameEngine.creaturesOnBoard.forEach((item, index) => {
        let selectorByIdCreature = document.querySelector(`div[id='${index}']`);
        if (!this.gameEngine.queue.getActiveCreature()) {
          this.gameEngine = new GameEngine(
            this.myCreature,
            this.ennemyCreature
          );
        }
        if (selectorByIdCreature.getAttribute("style")) {
          selectorByIdCreature.removeAttribute("style");
        }
        if (item.creature === this.gameEngine.queue.getActiveCreature()) {
          selectorByIdCreature.setAttribute("style", "background-color:green");
        }
      });
    },
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