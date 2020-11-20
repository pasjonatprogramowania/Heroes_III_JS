<template>
  <div>
    <unitTests />
    <gameBoard />
  </div>
</template>

<script lang="ts">
import unitTests from "./components/unitTests.vue";
import gameBoard from "./components/gui/gameBoard.vue";

export default {
  name: "App",
  components: {
    unitTests,
    gameBoard,
  },
};
</script>

<style></style>
