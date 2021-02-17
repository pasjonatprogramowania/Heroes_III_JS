<template>
  <div>
    <unitTests />
    <economyBoard />
    <gameBoard />
  </div>
</template>

<script lang="ts">
import unitTests from "./components/unitTests.vue";
import economyBoard from "./components/gui/economyBoard.vue";
import gameBoard from "./components/gui/gameBoard.vue";

export default {
  name: "App",
  components: {
    unitTests,
    gameBoard,
    economyBoard,
  },
};
</script>

<style></style>
