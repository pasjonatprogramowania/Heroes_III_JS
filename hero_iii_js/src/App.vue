<template>
  <div>
    <unit-test />
    <component
      :is="component"
      :creature-board="creatureBoard"
      @changeToGameBoard="changeToGameBoard($event)"
    ></component>
  </div>
</template>

<script lang="ts">
import unitTests from "./components/unitTests.vue";
import economyBoard from "./components/gui/economyBoard.vue";
import gameBoard from "./components/gui/gameBoard.vue";

export default {
  name: "App",
  components: {
    "unit-test": unitTests,
    "game-board": gameBoard,
    "economy-board": economyBoard,
  },
  data() {
    return {
      component: "economy-board",
      creatureBoard: [[], []],
    };
  },
  methods: {
    changeToGameBoard(_updatedBoard) {
      this.component = _updatedBoard;
    },
  },
};
</script>

<style></style>
