<template>
  <div />
</template>

<script>
import BoardTest from "./test/boardTest.js";
import CreatureTurnQueueTest from "./test/creatureTurnQueueTest.js";
import AttackTest from "./test/attackTest.js";
import CounterAttackTest from "./test/counterAttack.js";
import EndTourTest from "./test/endTurnTest.js";
import AmountDamageTest from "./test/amountDamageTest.js";
import SpecialAbilitiesTest from "./test/specialAbilitiesTest.js";

let boardTest = new BoardTest();
let creatureTurnQueueTest = new CreatureTurnQueueTest();
let attackTest = new AttackTest();
let counterAttackTest = new CounterAttackTest();
let endTourTest = new EndTourTest();
let amountDamageTest = new AmountDamageTest();
let specialAbilitiesTest = new SpecialAbilitiesTest();

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
boardTest.rangeWasRemovedCorrectly();
boardTest.creatureCanAttack();
endTourTest.shouldResetCounterAttackAtTurnEnd();
amountDamageTest.defenderShouldLoseOneCreatureFromStackAndTheRestShouldHaveFullHp();
amountDamageTest.defenderShouldLoseOneCreatureFromStackAndTheRestHave75CurrnetHp();
amountDamageTest.attckerShouldLoseOneCreatureFromStackAndTheRestHave75CurrnetHp();
amountDamageTest.defenderSholudLose3UnitAndand50HpAfterTwoAttacks();
specialAbilitiesTest.DreadKnightShouldDealDoubleDamage();
specialAbilitiesTest.DreadKnightShouldDealNormalDamage();
specialAbilitiesTest.VampireLordShouldHealAfterDealDamage();
specialAbilitiesTest.ShootingCreatureShouldHaveUnlimitedRange();
specialAbilitiesTest.ShootingCreatureShouldNotTakeCounterAttack();
specialAbilitiesTest.VampireShouldNotTakeCounterAttackAndHaveUnlimitedRange();

export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
