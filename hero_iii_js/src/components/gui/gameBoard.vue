
<template>
  <div class="container">
    <div class="wrapper">
      <h1>Player 1 vs Player 2</h1>
    </div>
    <div class="wrapper">
      <div class="board">
        <div v-for="x in gameEngine.board.boardX" :key="x">
          <div v-for="y in gameEngine.board.boardY" :key="y">
            <div
              v-if="fieldHaveCreature(x, y)"
              :x="creatureOnBoardItem(x, y).point.getX()"
              :y="creatureOnBoardItem(x, y).point.getY()"
              class="board-creature field"
              :class="
                isThisCreatureActive(creatureOnBoardItem(x, y)) ? 'green' : ''
              "
              @click="
                creatureAction(
                  creatureOnBoardItem(x, y).point.getX(),
                  creatureOnBoardItem(x, y).point.getY()
                )
              "
            >
              <div class="creature-container">
                <div class="creature-info">
                  {{ creatureOnBoardItem(x, y).creature.getCurrentHp() }} /
                  {{ creatureOnBoardItem(x, y).creature.getMaxHp() }}
                  Amo: {{ creatureOnBoardItem(x, y).creature.getAmount() }}
                </div>
                <img
                  loading="lazy"
                  :src="getImgUrl(creatureOnBoardItem(x, y))"
                  class="unit"
                  :class="ennemyField(x, y) ? 'ennemy' : ''"
                />
              </div>
            </div>
            <div
              v-else
              :x="`${x}`"
              :y="`${y}`"
              class="board-creature field"
              :class="canMove(x, y) ? 'gray' : ''"
              @click="creatureAction(x, y)"
            >
              {{ x }},{{ y }}
            </div>
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
import GameEngine from "../js/gameEngine.js";
import Point from "../js/point.js";
import NacropolisFactory from "../js/creature/necropolisFactory.js";
export default {
  data() {
    return {
      gameEngine: "",
    };
  },
  created() {
    this.createGameEngineObjectAndBoard();
  },
  methods: {
    fieldHaveCreature(_x, _y) {
      for (let i = 0; i < this.gameEngine.creaturesOnBoard.length; i++) {
        if (
          this.gameEngine.creaturesOnBoard[i].point.getX() === _x &&
          this.gameEngine.creaturesOnBoard[i].point.getY() === _y
        ) {
          return true;
        }
      }
      return false;
    },
    creatureOnBoardItem(_x, _y) {
      return this.gameEngine.creaturesOnBoard.find(
        (creature) =>
          creature.point.getX() === _x && creature.point.getY() === _y
      );
    },
    getImgUrl(_creatureOnBoardItem) {
      return `https://raw.githubusercontent.com/pasjonatprogramowania/Heros_III_JS/main/hero_iii_js/src/assets/Castle-img/Necroplis-Unit-Img/${_creatureOnBoardItem.creature.stats.name}.png`;
    },
    ennemyField(_x, _y) {
      return this.creatureOnBoardItem(_x, _y).player === "ennemy";
    },
    isThisCreatureActive(_creatureOnBoardItem) {
      if (this.activeCreature() === _creatureOnBoardItem.creature) {
        return true;
      }
      return false;
    },
    activeItemFromCreaturesOnBoard(_creature) {
      for (let i = 0; i < this.creaturesOnBoard().length; i++) {
        if (this.creaturesOnBoard()[i].creature === _creature) {
          return this.creaturesOnBoard()[i];
        }
      }
    },
    createGameEngineObjectAndBoard() {
      let nacropolisFactory = new NacropolisFactory();

      let myCreature = [];
      for (let i = 1; i < 7; i++) {
        myCreature.push(nacropolisFactory.create(false, i));
      }

      let ennemyCreature = [];
      for (let i = 1; i < 7; i++) {
        ennemyCreature.push(nacropolisFactory.create(true, i));
      }

      this.gameEngine = new GameEngine(myCreature, ennemyCreature);
    },
    passCreature() {
      this.gameEngine.pass();
      this.activeCreature().stats.moveRange = this.activeCreature().getMaxRange();
    },
    creatureAction(_x, _y) {
      this.actionAttack(_x, _y);
      this.actionMove(_x, _y);
    },
    actionAttack(_x, _y) {
      if (
        this.gameBoard().isThisTileTaken(new Point(_x, _y)) &&
        this.gameEngine.canAttack(
          this.activeCreature(),
          this.creatureOnBoardItem(_x, _y).creature
        )
      ) {
        if (
          this.creatureOnBoardItem(_x, _y).player !==
          this.activeItemFromCreaturesOnBoard(this.activeCreature()).player
        ) {
          if (
            this.gameEngine.canAttack(
              this.activeCreature(),
              this.activeItemFromCreaturesOnBoard(this.activeCreature())
                .creature
            )
          ) {
            this.gameEngine.attack(
              this.gameBoard().getPoint(
                this.creatureOnBoardItem(_x, _y).creature
              )
            );
            this.passCreature();
          }
        }
      }
    },
    actionMove(_x, _y) {
      if (this.canMove(_x, _y) && this.activeCreature().getMoveRange() > 0) {
        this.gameBoard().reduseMovment(this.activeCreature(), _x, _y);
        this.move(
          (this.gameBoard().getPoint(this.activeCreature()), new Point(_x, _y))
        );
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
  position: relative;
}
.container h1 {
  margin: 0 auto 40px auto;
}
.unit {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  position: absolute;
  top: -35px;
  right: 0px;
  bottom: 0px;
  left: -30px;
}
.ennemy {
  transform: scaleX(-1);
}
.creature-container {
  position: relative;
}
.creature-info {
  position: absolute;
  z-index: 100;
  font-size: 12px;
  color: gold;
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
.gray {
  background-color: gray;
}
</style>








