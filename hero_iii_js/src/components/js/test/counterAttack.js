import Creature from "../creature.js";

export default class CounterAttackTest {
    constructor() {
        this.notImportant = 0;
    }
    creatureShouldCounterAttack() {
        let attacker = new Creature("Attack", 5, 5, 100, this.notImportant);
        let defender = new Creature("Defender", 20, 20, 100, this.notImportant);

        attacker.attack(defender);
        if (this.assertBetween(90, 100, defender)) {
            console.log("~ attacker.getCurrentHp()", attacker.getCurrentHp())
            throw "Exception: => Creatura zle wykonala kontr attack";
        }


    }
    creatureShouldCounterAttackOnlyOnceAtTour() {
        let attacker = new Creature('Attack', 5, 5, 100, this.notImportant);
        let attacker2 = new Creature('Attack2', 5, 5, 100, this.notImportant);
        let defender = new Creature('Defender', 20, 20, 100, this.notImportant);

        attacker.attack(defender)
        if (this.assertBetween(90, 100, defender) || attacker2.getCurrentHp() != 100) {
            console.log("~ attacker.getCurrentHp()", attacker.getCurrentHp())
            throw 'Exception: => Creatura atakuje wiecej niz raz'
        }
    }
    assertBetween(_low, _high, _creature) {
        if (_creature.getCurrentHp() > _low && _creature.getCurrentHp() < _high) {
            return false;
        }
    }
}
