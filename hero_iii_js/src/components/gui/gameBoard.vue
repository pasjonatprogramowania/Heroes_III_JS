<template>
  <div class="container">
    <h1>Player 1 vs Player 2</h1>
    <div class="board">
      <div v-for="index in this.board.boardSize" :key="index">
        <div class="board-field" :id="index"></div>
      </div>
    </div>
    <div>
      <button>Pass</button>
      <button>Defend</button>
      <button>Run</button>
    </div>
  </div>
</template>
<script>
import Board from "../js/board.js";
export default {
  data() {
    return {
      board: new Board(),
    };
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
/* html[theme="dark-mode"] img {
  filter: invert(1) hue-rotate(180deg);
}  */
.container {
  margin: 10px 140px 10px 140px;
}
.board {
  display: grid;
  grid-template-rows: repeat(15, 1fr);
  grid-template-columns: repeat(20, 1fr);
}
.board-field {
  border: 2px solid var(--mainTextColor);
  width: 50px;
  height: 50px;
}
h1 {
  margin: 0 auto 40px auto;
}
button {
  background-color: var(--mainBackgoundColor);
  border-radius: 20%;
  color: var(--mainTextColor);
  margin: 20px 5px auto;
  padding: 10px;
  font-size: 1.2rem;
  -webkit-box-shadow: 7px 3px 15px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 7px 3px 15px 0px rgba(0, 0, 0, 0.36);
  box-shadow: 7px 3px 15px 0px rgba(0, 0, 0, 0.36);
}
</style>