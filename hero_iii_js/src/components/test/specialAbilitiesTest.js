import DamageCalculatorMultipleyDamage from '../js/damageCalculatorMultipleyDamage.js';
import Creature from '../js/creature.js';
import Range from '../js/range.js';
import DamageCalculatorDefault from '../js/damageCalculatorDefault';
export default class SpecialAbilitiesTest {
    DreadKnightShouldDealDoubleDamage() {
        let attacker = new Creature('DreadKnight', 5, 5, 9999, 5, new Range(100, 100), 1, new DamageCalculatorMultipleyDamage(0.2, 2, 100))
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 1, new DamageCalculatorMultipleyDamage(0.2, 2, 0))
        let result = new DamageCalculatorMultipleyDamage(0.2, 2, 100).calculate(attacker, defender)
        if (result !== 200) {
            console.log("~ result", result)
            throw `Exception: => DreadKnight powienien zadac 200dmg zadała ${result}dmg`;
        }
    }
    DreadKnightShouldDealNormalDamage() {
        let attacker = new Creature('DreadKnight', 5, 5, 9999, 5, new Range(100, 100), 1, new DamageCalculatorMultipleyDamage(20, 2, 0))
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 1, new DamageCalculatorMultipleyDamage(20, 2, 0))

        let result = new DamageCalculatorMultipleyDamage(20, 2, 0).calculate(attacker, defender)
        if (result !== 100) {
            console.log("~ result", result)
            throw `Exception: => DreadKnight powienien zadac 100dmg zadała ${result}dmg`;
        }
    }
    VampireLordShouldHealAfterDealDamage() {
        let attacker = new Creature('VampireLord', 5, 5, 100, 5, new Range(100, 100), 10, new DamageCalculatorDefault(), 100, 100)
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 10, new DamageCalculatorDefault(), 100, 100)

        attacker.attack(defender)
        // if (attacker.getCurrentHp() !== 100 || attacker.getAmount() !== 11) {
        //     console.log("~ attacker.getAmount()", attacker.getAmount())
        //     console.log("~ attacker.getCurrentHp()", attacker.getCurrentHp())
        //     throw `Exception: => VampireLord powienien miec powyzej 100 zdrowa a ma ${attacker.getCurrentHp()}HP i ${attacker.getAmount()} Staków`;
        // }
    }
}