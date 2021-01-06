import Creature from '../creature.js';
import Range from '../range.js';
export default class AmountDamageTest {
    defenderShouldLoseOneCreatureFromStackAndTheRestShouldHaveFullHp() {
        let attacker = new Creature('Attacker', 5, 5, 9999, 5, new Range(100, 100))
        let defender = new Creature('Defender', 1, 5, 100, 1, new Range(1, 1), 10)

        attacker.attack(defender)
        if (defender.getAmount() !== 9) {
            console.log("~ Stałe zycie", defender.getCurrentHp())
            console.log("~ defender.getAmount()", defender.getAmount())
            throw "Exception: => Nie zgadzaja sie obrazenia zadawane stackom ,creatura powinna stracic równo 1 stack a straciła inna wartosc";
        }
    }
    defenderShouldLoseOneCreatureFromStackAndTheRestHave75CurrnetHp() {
        let attacker = new Creature('Attacker', 10, 5, 100, 5, new Range(100, 100), 10)
        let defender = new Creature('Defender', 1, 5, 100, 1, new Range(1, 1), 10)

        attacker.attack(defender)
        if (defender.getAmount() !== 9 || defender.getCurrentHp() !== 75) {
            console.log("~ Stałe zycie", defender.getCurrentHp())
            console.log("~ defender.getAmount()", defender.getAmount())
            throw "Exception: => Nie zgadzaja sie obrazenia zadawane stackom ,creatura powinna stracic równo 2 stacki i zadac 25Hp Damage a straciła inna wartosc";

        }
    }
    attckerShouldLoseOneCreatureFromStackAndTheRestHave75CurrnetHp() {
        let defender = new Creature('Defender', 10, 5, 9999, 5, new Range(100, 100), 10)
        let attacker = new Creature('Attacker', 1, 5, 100, 1, new Range(100, 100), 10,)

        attacker.attack(defender)
        if (attacker.getAmount() !== 9 || attacker.getCurrentHp() !== 75) {
            console.log("~ Stałe zycie", attacker.getCurrentHp())
            console.log("~ defender.getAmount()", attacker.getAmount())
            throw "Exception: => Nie zgadzaja sie obrazenia zadawane stackom ,Attacker w counter Attacku powinna stracic równo 2 stacki i 25 Hp a straciła inna wartosc";

        }
    }
    defenderSholudLose3UnitAndand50HpAfterTwoAttacks() {
        let attacker = new Creature('Attacker', 10, 5, 9999, 5, new Range(100, 100))
        let defender = new Creature('Defender', 1, 5, 100, 1, new Range(1, 1), 10)

        attacker.attack(defender)
        attacker.attack(defender)
        if (defender.getAmount() !== 8 || defender.getCurrentHp() !== 50) {
            console.log("~ Stałe zycie", defender.getCurrentHp())
            console.log("~ defender.getAmount()", defender.getAmount())
            throw "Exception: => Nie zgadzaja sie obrazenia zadawane stackom ,creatura powinna stracic po 2 attakach równo 3 stacki i 50Hp a straciła inna wartosc";
        }
    }
}
