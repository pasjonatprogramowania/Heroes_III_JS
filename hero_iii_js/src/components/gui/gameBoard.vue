
<template>
  <div class="container">
    <div class="wrapper">
      <h1>Player 1 vs Player 2</h1>
    </div>
    <div class="wrapper">
      <div class="board">
        <div v-for="x in gameEngine.board.boardX" :key="x">
          <div v-for="y in gameEngine.board.boardY" :key="y">
            <!-- zabinduj tutaj wszytskie dane z cretureonboard -->
            <div
              v-if="fieldHaveCreture(x, y)"
              :id="cretureOnBoardItem(x, y).id"
              :x="cretureOnBoardItem(x, y).x"
              :y="cretureOnBoardItem(x, y).y"
              class="board-creature field"
              :class="
                isThisCreatureActive(cretureOnBoardItem(x, y)) ? 'green' : ''
              "
              @click="
                creatureAction(
                  cretureOnBoardItem(x, y).x,
                  cretureOnBoardItem(x, y).y
                )
              "
            >
              <div class="creature-container">
                <div class="creature-info">
                  {{ cretureOnBoardItem(x, y).creature.getCurrentHp() }} /
                  {{ cretureOnBoardItem(x, y).creature.getMaxHp() }}
                </div>
                <img
                  loading="lazy"
                  :src="getImgUrl(cretureOnBoardItem(x, y))"
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
import Creature from "../js/creature.js";
import GameEngine from "../js/gameEngine.js";
import Point from "../js/point.js";
import Range from "../js/range.js";
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
    fieldHaveCreture(_x, _y) {
      for (let i = 0; i < this.gameEngine.creaturesOnBoard.length; i++) {
        if (
          this.gameEngine.creaturesOnBoard[i].x === _x &&
          this.gameEngine.creaturesOnBoard[i].y === _y
        ) {
          return true;
        }
      }
      return false;
    },
    cretureOnBoardItem(_x, _y) {
      return this.gameEngine.creaturesOnBoard.find(
        (creature) => creature.x === _x && creature.y === _y
      );
    },
    getImgUrl(_creatureOnBoardItem) {
      return `https://raw.githubusercontent.com/pasjonatprogramowania/Heros_III_JS/main/hero_iii_js/src/assets/Castle-img/Necroplis-Unit-Img/${_creatureOnBoardItem.creature.stats.name}.png`;
    },
    ennemyField(_x, _y) {
      return this.cretureOnBoardItem(_x, _y).player === "ennemy";
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
    // prettier-ignore
    createGameEngineObjectAndBoard() {
        // let newCreature1 = new Creature("Pikeman", 4, 5, 10, 4, new Range(1, 3));
        // let newCreature2 = new Creature("Griffin", 8, 3, 25, 6, new Range(2, 3));
        // let newCreature3 = new Creature("Swordsman", 10, 12, 35, 5, new Range(6, 9));
        // let newCreature4 = new Creature("Angel", 20, 20, 200, 12, new Range(50, 50));

        // let newCreature5 = new Creature("Halberdier", 6, 5, 10, 5, new Range(2, 3));
        // let newCreature6 = new Creature("Royal Griffin", 9, 9, 25, 9, new Range(3, 6));
        // let newCreature7 = new Creature("Crusader", 12, 12, 35, 6, new Range(7, 10));
        // let newCreature8 = new Creature("Archangel", 30, 30, 250, 18, new Range(50, 50));

      let newCreature1 = new Creature("Skeleton", 5, 4, 6, 4, new Range(1, 3));
      let newCreature2 = new Creature("WalkingDead", 5, 5, 15, 3, new Range(2, 3));
      let newCreature3 = new Creature("Wight", 7, 7, 18, 5, new Range(3, 5));
      let newCreature4 = new Creature("Vampire", 10, 9, 30, 6, new Range(5, 8));
      let newCreature5 = new Creature("Lich", 13, 10, 30, 6, new Range(11, 13));
      let newCreature6 = new Creature("BlackKnight", 16, 16, 120, 7, new Range(15, 30));
      let newCreature7 = new Creature("BoneDragon", 17, 15, 150, 9, new Range(25, 30));
  
      let newCreature8 = new Creature("SkeletonWarrior", 6, 6, 6, 5, new Range(1, 3));
      let newCreature9 = new Creature("Zombie", 5, 5, 20, 4, new Range(2, 3));
      let newCreature10 = new Creature("Wraith", 7, 7, 18, 7, new Range(3, 5));
      let newCreature11 = new Creature("VampireLord", 10, 10, 40, 9, new Range(5, 8));
      let newCreature12 = new Creature("PowerLich", 13, 10, 40, 7, new Range(11, 15));
      let newCreature13 = new Creature("DreadKnight", 18, 18, 120, 9, new Range(15, 30));
      let newCreature14 = new Creature("GhostDragon", 19, 17, 200, 14, new Range(25, 50));

      let myCreature = [];
      myCreature.push(newCreature1,newCreature2,newCreature3,newCreature4,newCreature5,newCreature6,newCreature7);

      let ennemyCreature = [];
      ennemyCreature.push(newCreature8,newCreature9,newCreature10,newCreature11,newCreature12,newCreature13,newCreature14);

      this.gameEngine = new GameEngine(myCreature, ennemyCreature);
      this.creatures = this.gameEngine.creaturesOnBoard;
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
        this.activeCreature().getMoveRange() > 0
      ) {
        if (
          this.cretureOnBoardItem(_x, _y).player !==
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
                this.cretureOnBoardItem(_x, _y).creature
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
  /* background-image: url("https://raw.githubusercontent.com/pasjonatprogramowania/Heros_III_JS/AfterRangeObject/hero_iii_js/Castle-img/Necroplis-Unit-Img/BattleField/Highlands.gif"); */
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
.unit {
  max-width: 50px;
  max-height: 50px;
  object-fit: cover;
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

// stackcreaur
// applayDamage do staka







