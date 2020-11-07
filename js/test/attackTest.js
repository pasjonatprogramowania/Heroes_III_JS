import Board from '../board.js'
import Point from '../point.js'
import CreatureTurnQueue from '../creatureTurnQueue.js'
import Creature from '../creature.js';

export default class AttackTest {
    creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor() {
        let attacker = new Creature('Attack', 20, 5, 110, 5);
        let defender = new Creature('Defender', 5, 10, 100, 5);

        attacker.attack(defender)
        console.log('defender.getCurrentHp', defender.getCurrentHp)
        if (defender.getCurrentHp() !== 10) {
            throw 'Exception: => Creature nie zadala poprawnie obrazen'
        }
    }
}