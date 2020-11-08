import Creature from '../creature.js';

export default class AttackTest {
    constructor() {
        this.notImportant = 0
    }
    creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor() {
        let attacker = new Creature('Attack', 20, 5, 100, this.notImportant);
        let defender = new Creature('Defender', 5, 10, 150, this.notImportant);

        attacker.attack(defender)
        if (defender.getCurrentHp() != 140) {
            throw 'Exception: => Creature nie zadala poprawnie obrazen'
        }
    }
    creatureShouldNotSelfHealWhenAttackerHasLowerAttackThenDefenderArmor() {
        let attacker = new Creature('Attack', 20, 5, 100, this.notImportant);
        let defender = new Creature('Defender', 5, 100, 100, this.notImportant);

        attacker.attack(defender)
        if (defender.getCurrentHp() > defender.stats.getMaxHp()) {
            throw 'Exception: => Creatura uleczyla sie podczas ataku'
        }
    }
}