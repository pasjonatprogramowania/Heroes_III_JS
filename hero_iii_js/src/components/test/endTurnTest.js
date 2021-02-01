import Creature from "../js/creature.js";
import GameEngine from '../js/gameEngine.js';

export default class EndTurnTest {
    shouldResetCounterAttackAtTurnEnd() {
        let defender = new Creature('endD', undefined, undefined, 99999, undefined, undefined, undefined, undefined, undefined)
        let attacker = new Creature('endA', undefined, undefined, 99999, undefined, undefined, undefined, undefined, undefined)

        let arr = []
        let arr2 = []

        arr.push(defender)
        arr2.push(attacker)
        let gameEngine = new GameEngine(arr, arr2)

        if (!defender.canCounterAttack()) {
            throw 'Exception: => canCounterAttack powinno zwrócic true przy pierwszym odwecie'
        }
        attacker.attack(defender)
        if (defender.canCounterAttack()) {
            throw 'Exception: => canCounterAttack powinno zwrócic false po pierwszym ataku'
        }

        gameEngine.pass()
        gameEngine.pass()

        if (!defender.canCounterAttack()) {
            throw 'Exception: => canCounterAttack powinno zwrócic true na poczatku nowej tury'
        }
    }
} 