
<template>
  <div class="container">
    <div class="wrapper">
      <h1>Player 1 vs Player 2</h1>
    </div>
    <div class="wrapper">
      <div class="side-board">
        <div v-for="index in gameEngine.board.boardY" :key="index">
          <div class="my-creature field" :positionOnPlayer="`${index}`">
            {{ index }}
          </div>
        </div>
      </div>
      <div class="board">
        <div v-for="x in gameEngine.board.boardX" :key="x">
          <div v-for="y in gameEngine.board.boardY" :key="y">
            <div
              class="board-creature field"
              :x="`${x}`"
              :y="`${y}`"
              @click="creatureAction(x, y, $event)"
            >
              {{ x }},{{ y }}
            </div>
          </div>
        </div>
      </div>
      <div class="side-board">
        <div v-for="index in gameEngine.board.boardY" :key="index">
          <div class="ennemy-creature field" :positionOnEnnemy="`${index}`">
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
import Point from "../js/point.js";
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
      this.creaturesOnBoard().forEach((item) => {
        if (item.player === "player") {
          this.addAtrToCreatureField(item);
        } else {
          this.addAtrToCreatureField(item);
        }
      });
      this.refreshGui();
    },
    // prettier-ignore
    addAtrToCreatureField(item) {
      if (item.creature.getName()||item.creature.getAttack() ||item.creature.getArmor() ||item.creature.getMaxHp() ||item.creature.getMoveRange()) {
        let newCreaturePosition = document.querySelector(`div[y='${item.y}'][ x='${item.x}']`);

        newCreaturePosition.innerHTML = item.creature.getName();
        newCreaturePosition.setAttribute("name", `${item.creature.getName()}`);
        newCreaturePosition.setAttribute("id", `${item.id}`);
        newCreaturePosition.setAttribute("player", `${item.player}`);
        newCreaturePosition.setAttribute("x", `${item.x}`);
        newCreaturePosition.setAttribute("y", `${item.y}`);
      }
    },
    passCreature() {
      this.gameEngine.pass();
      this.refreshGui();
    },
    refreshGui() {
      this.creaturesOnBoard().forEach((item) => {
        let activeCreatureIdSelector = document.getElementById(item.id);
        item.creature.stats.moveRange = item.creature.getMaxRange();
        activeCreatureIdSelector.classList.remove("green");

        if (item.creature === this.activeCreature()) {
          document.getElementById(item.id).classList.add("green");
        }
        if (item.creature === this.activeCreature()) {
          this.showUnitRange();
        }
      });
    },
    showUnitRange() {
      for (let x = 1; x <= this.gameBoard().boardX; x++) {
        for (let y = 1; y <= this.gameBoard().boardY; y++) {
          if (this.canMove(x, y)) {
            document
              .querySelector(`[x="${x}"][y="${y}"]`)
              .setAttribute("style", "background-color:gray");
          } else {
            document
              .querySelector(`[x="${x}"][y="${y}"]`)
              .removeAttribute("style");
          }
        }
      }
    },
    refreshCreature(_x, _y) {
      this.creaturesOnBoard().forEach((item) => {
        if (item.creature === this.activeCreature()) {
          this.removeOldCreatureFromBoard(item);
          this.addNewCreatureValueToBoard(item, _x, _y);
        }
      });
    },
    removeOldCreatureFromBoard(item) {
      let oldCreaturePosition = document.getElementById(item.id);

      oldCreaturePosition.removeAttribute("id");
      oldCreaturePosition.removeAttribute("player");
      oldCreaturePosition.removeAttribute("name");
      oldCreaturePosition.classList.remove("green");
      oldCreaturePosition.innerHTML = "";
    },
    // prettier-ignore
    addNewCreatureValueToBoard(item, _x, _y) {
      let newCreaturePosition = document.querySelector(`div[x='${_x}'][y='${_y}']`);

      newCreaturePosition.innerHTML = item.creature.getName();
      newCreaturePosition.setAttribute("name", `${item.creature.getName()}`);
      newCreaturePosition.setAttribute("id", `${item.id}`);
      newCreaturePosition.setAttribute("player", `${item.player}`);
    },
    creatureAction(_x, _y, _event) {
      this.actionAttack(_x, _y, _event);
      this.actionMove(_x, _y);
    },
    // prettier-ignore
    actionAttack(_x, _y, _event) {
      if (this.gameBoard().isThisTileTaken(new Point(_x, _y)) && this.activeCreature().getMoveRange() > 0) {
        //   Poprawte linie 
        // if (this.activeCreature().stats.player !=_event.currentTarget.getAttribute("player")) {
        //   this.gameEngine.canAttack(this.activeCreature(),this.getCreatureById(_event.currentTarget.id));
          console.log(`canAttack`,this.gameEngine.canAttack(this.activeCreature(),this.getCreatureById(_event.currentTarget.id)))
        // }
      }
    },
    actionMove(_x, _y) {
      if (this.canMove(_x, _y) && this.activeCreature().getMoveRange() > 0) {
        this.gameBoard().reduseMovment(this.activeCreature(), _x, _y);
        this.move(
          (this.gameBoard().getPoint(this.activeCreature()), new Point(_x, _y))
        );
        this.showUnitRange();
        this.refreshCreature(_x, _y);
      }
    },
    move(_targetPoint) {
      return this.gameEngine.move(_targetPoint);
    },
    activeCreature() {
      return this.gameEngine.queue.getActiveCreature();
    },
    gameBoard() {
      return this.gameEngine.board;
    },
    creaturesOnBoard() {
      return this.gameEngine.creaturesOnBoard;
    },
    canMove(_x, _y) {
      return this.gameEngine.canMove(_x, _y);
    },
    getCreatureById(_id) {
      return this.creaturesOnBoard()[_id].creature;
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
div[name] {
  color: gold;
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
.green {
  background-color: green;
}
</style>