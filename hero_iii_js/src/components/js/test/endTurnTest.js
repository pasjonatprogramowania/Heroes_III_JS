import Creature from "../creature";
import GameEngine from './../gameEngine';

export default class EndTurnTest {
    shouldResetCounterAttackAtTurnEnd() {
        let defender = new Creature('endD')
        let attacker = new Creature('endA')

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