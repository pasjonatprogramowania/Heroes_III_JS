import Creature from '../creature.js';

export default class AttackTest {
    creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor() {
        let attacker = new Creature('Attack', 20, 5, 100, 5);
        let defender = new Creature('Defender', 5, 10, 100, 5);

        attacker.attack(defender)
        if (defender.getCurrentHp() != 90) {
            throw 'Exception: => Creature nie zadala poprawnie obrazen'
        }
    }
    creatureShouldNotSelfHealWhenAttackerHasLowerAttackThenDefenderArmor() {
        let attacker = new Creature('Attack', 20, 5, 100, 5);
        let defender = new Creature('Defender', 5, 100, 100, 5);

        attacker.attack(defender)
        if (defender.getCurrentHp() > defender.stats.getMaxHp()) {
            throw 'Exception: => Creatura uleczyla sie podczas ataku'
        }
    }
}