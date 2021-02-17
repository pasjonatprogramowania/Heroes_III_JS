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
import NecropoliaSpecialAbilitiesTest from "./test/necropoliaSpecialAbilitiesTest.js";
import ForgeSpecialAbilitiesTest from "./test/forgeSpecialAbilitiesTest.js";

let boardTest = new BoardTest();
let creatureTurnQueueTest = new CreatureTurnQueueTest();
let attackTest = new AttackTest();
let counterAttackTest = new CounterAttackTest();
let endTourTest = new EndTourTest();
let amountDamageTest = new AmountDamageTest();
let necropoliaSpecialAbilitiesTest = new NecropoliaSpecialAbilitiesTest();
let forgeSpecialAbilitiesTest = new ForgeSpecialAbilitiesTest();

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
necropoliaSpecialAbilitiesTest.DreadKnightShouldDealDoubleDamage();
necropoliaSpecialAbilitiesTest.VampireLordShouldHealAfterDealDamage();
necropoliaSpecialAbilitiesTest.ShootingCreatureShouldHaveUnlimitedRange();
necropoliaSpecialAbilitiesTest.ShootingCreatureShouldNotTakeCounterAttack();
necropoliaSpecialAbilitiesTest.VampireShouldNotTakeCounterAttackAndHaveUnlimitedRange();
necropoliaSpecialAbilitiesTest.LichShouldDealSplashDamage();
forgeSpecialAbilitiesTest.ObroncaShouldTake15lessRangeDamage();
forgeSpecialAbilitiesTest.ElitarnyTarczownikShouldTake30LessRangeDamage();
forgeSpecialAbilitiesTest.PodpalaczShouldDealDamageforTwoTiles();
forgeSpecialAbilitiesTest.PiromaniakShouldDealDamageforTwoTiles();
forgeSpecialAbilitiesTest.WysysaczDuszShouldDealSplashDamage();
forgeSpecialAbilitiesTest.JugernautShouldHeal30HpOnTournEnd();
forgeSpecialAbilitiesTest.NiszczycielShouldHeal30HpOnTournEnd();

export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
