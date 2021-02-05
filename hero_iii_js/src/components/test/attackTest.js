import Creature from "../js/creature/creature.js";
import Range from '../js/range.js';

export default class AttackTest {
    constructor() {
        this.notImportant = 0;
    }
    creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor() {
        let attacker = new Creature("Attack", 10, 5, 100, this.notImportant, new Range(1, 5));
        let defender = new Creature("Defender", 5, 10, 150, this.notImportant, new Range(1, 5));

        attacker.attack(defender);
        attacker.attack(attacker);
        if (this.assertBetween(140, 150, defender)) {
            console.log("~ defender.getCurrentHp()", defender.getCurrentHp())
            throw "Exception: => Creature nie zadala poprawnie obrazen";
        }
    }
    creatureShouldNotSelfHealWhenAttackerHasLowerAttackThenDefenderArmor() {
        let attacker = new Creature("Attack", 20, 5, 100, this.notImportant, new Range(1, 5));
        let defender = new Creature("Defender", 5, 100, 100, this.notImportant, new Range(1, 5));

        attacker.attack(defender);
        if (defender.getCurrentHp() > defender.getMaxHp()) {
            throw "Exception: => Creatura uleczyla sie podczas ataku";
        }
    }
    assertBetween(_low, _high, _creature) {
        if (_creature.getCurrentHp() > _low && _creature.getCurrentHp() < _high) {
            return false;
        }
    }
}
