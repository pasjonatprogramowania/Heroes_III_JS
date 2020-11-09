<template>
  <div />
</template>

<script>
import BoardMovingTest from "./js/test/boardMovingTest.js";
import BoardTest from "./js/test/boardTest.js";
import CreatureTurnQueueTest from "./js/test/creatureTurnQueueTest.js";
import AttackTest from "./js/test/attackTest.js";
import CounterAttackTest from "./js/test/counterAttack.js";

let boardMovingTest = new BoardMovingTest();
let boardTest = new BoardTest();
let creatureTurnQueueTest = new CreatureTurnQueueTest();
let attackTest = new AttackTest();
let counterAttackTest = new CounterAttackTest();

attackTest.creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor();
attackTest.creatureShouldNotSelfHealWhenAttackerHasLowerAttackThenDefenderArmor();
counterAttackTest.creatureShouldCounterAttack();
creatureTurnQueueTest.queueShoulChangeActiveCreature();
boardTest.mapShouldHaveKeyAndValue();
boardMovingTest.cretureShouldMoveCorrectly();

export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
