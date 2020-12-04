<template>
  <div />
</template>

<script>
import BoardTest from "./js/test/boardTest.js";
import CreatureTurnQueueTest from "./js/test/creatureTurnQueueTest.js";
import AttackTest from "./js/test/attackTest.js";
import CounterAttackTest from "./js/test/counterAttack.js";
import EndTourTest from "./js/test/endTurnTest.js";

let boardTest = new BoardTest();
let creatureTurnQueueTest = new CreatureTurnQueueTest();
let attackTest = new AttackTest();
let counterAttackTest = new CounterAttackTest();
let endTourTest = new EndTourTest();

attackTest.creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor();
attackTest.creatureShouldNotSelfHealWhenAttackerHasLowerAttackThenDefenderArmor();
counterAttackTest.creatureShouldCounterAttack();
counterAttackTest.creatureShouldCounterAttackOnlyOnceAtTour();
creatureTurnQueueTest.queueShoulChangeActiveCreature();
boardTest.mapShouldHaveKeyAndValue();
boardTest.shouldReturnCorrectLocationForCreatureByCreature();
boardTest.cretureShouldMoveCorrectly();
boardTest.canMoveWhenCreatureHasEnoughtMovingPoint();
boardTest.canMoveWhenCreatureHasNotEnoughtMovingPoint();
endTourTest.shouldResetCounterAttackAtTurnEnd();

export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
