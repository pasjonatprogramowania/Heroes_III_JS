import DamageCalculatorMultipleyDamage from '../damageCalculatorMultipleyDamage.js';
import Creature from './../creature.js';
import Range from './../range.js';
export default class SpecialAbilitiesTest {
    DreadKnightShouldDealDoubleDamage() {
        let attacker = new Creature('DreadKnight', 5, 5, 9999, 5, new Range(100, 100), 1, new DamageCalculatorMultipleyDamage(0.2, 2, 100))
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 1, new DamageCalculatorMultipleyDamage(0.2, 2, 0))
        let result = new DamageCalculatorMultipleyDamage(0.2, 2, 100).calculate(attacker, defender)
        if (result !== 200) {
            console.log("~ result", result)
            throw "Exception: => DreadKnight powienien zadac 200dmg ";
        }
    }
    DreadKnightShouldDealNormalDamage() {
        let attacker = new Creature('DreadKnight', 5, 5, 9999, 5, new Range(100, 100), 1, new DamageCalculatorMultipleyDamage(20, 2, 0))
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 1, new DamageCalculatorMultipleyDamage(20, 2, 0))

        let result = new DamageCalculatorMultipleyDamage(20, 2, 0).calculate(attacker, defender)
        if (result !== 100) {
            console.log("~ result", result)
            throw "Exception: => DreadKnight powienien zadac 100dmg ";
        }
    }
    VampireLordShouldHealAfterDealDamage() {
        let attacker = new Creature('DreadKnight', 5, 5, 100, 5, new Range(100, 100), 1, new DamageCalculatorMultipleyDamage(20, 2, 0))
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 1, new DamageCalculatorMultipleyDamage(20, 2, 0))

        attacker.attack(defender)
        if (attacker.getCurrentHp() !== 110) {
            throw "Exception: => VampireLord powienien uleczyc sie za  ";
        }
    }
}