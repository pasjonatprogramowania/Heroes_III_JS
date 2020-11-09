<template>
  <div></div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Creature from "./creature.vue";
import Board from "./board.vue";
import Point from "./point.vue";

@Component
export default class BoardTest extends Vue {
  board = new Board();
  creature = new Creature();
  unitTestPoint = 1;

  mapShouldHaveKeyAndValue() {
    this.board.add(this.unitTestPoint, this.creature);

    if (this.board.getVal(this.unitTestPoint) === undefined) {
      throw "Exception: => Creature dla tego pola zwraca undefined";
    }
  }
}
</script>
<style></style>