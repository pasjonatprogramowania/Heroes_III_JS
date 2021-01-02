import CreatureStatistics from "./creatureStatistics.js";
import DamageCalculator from './damageCalculator.js';
import DamageCalculatorMultipleyDamage from './damageCalculatorMultipleyDamage.js';
import DamageCalculatorWithHealingAttacker from './damageCalculatorWithHealingAttacker.js'
import Range from './range.js';
export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount, _calculator) {
        this.stats = this.createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount);
        this.stats.currentHp = this.stats.maxHp;
        this.stats.wasCounterAttack = false;
        this.damageCalculator = _calculator || new DamageCalculator();
    }
    createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount) {
        return new CreatureStatistics(
            _name || "Smok",
            _attack || 5,
            _armor || 5,
            _maxHp || 100,
            _moveRange || 5,
            _damage || new Range(5, 5),
            _amount || 1,
            this.damageCalculator
        );
    }
    setDefaultStats() {
        this.stats.currentHp = this.getCurrentHp() != undefined ? this.getCurrentHp() : this.getMaxHp();
    }
    attack(_defender) {
        _defender.setDefaultStats();
        this.setDefaultStats();
        if (_defender.isAlive()) {
            let damageToDeal = this.damageCalculator.calculate(this, _defender)
            _defender.applayDamage(damageToDeal)
            if (_defender.isAlive() && !_defender.stats.wasCounterAttack) {
                _defender.stats.wasCounterAttack = true;
                let counterAttackDamageToDeal = this.damageCalculator.calculate(_defender, this)
                this.applayDamage(counterAttackDamageToDeal)
            }
        }
    }
    applayDamage(_damageToDeal) {
        let totalAmountHp = (this.getMaxHp() * (this.getAmount() - 1)) + this.stats.currentHp - _damageToDeal
        if (totalAmountHp <= 0) {
            this.stats.amount = 0;
            this.stats.currentHp = 0;
        } else {
            if (totalAmountHp % this.getMaxHp() == 0) {
                this.stats.currentHp = this.getMaxHp()
                this.stats.amount = totalAmountHp / this.getMaxHp();
            } else {
                this.stats.currentHp = totalAmountHp % this.getMaxHp();
                if (_damageToDeal >= 0) {
                    this.stats.amount = parseInt(totalAmountHp / this.getMaxHp()) + 1
                } else {
                    this.stats.amount = parseInt(totalAmountHp / this.getMaxHp())
                }
            }
        }
    }
    isAlive() {
        if (this.stats.currentHp > 0) {
            return true;
        }
        // return false;
    }
    resetCounterAttack() {
        this.stats.wasCounterAttack = false;
    }
    canCounterAttack() {
        return !this.stats.wasCounterAttack
    }
    getName() {
        return this.stats.name;
    }
    getAttack() {
        return this.stats.attack;
    }
    getArmor() {
        return this.stats.armor;
    }
    getMaxHp() {
        return this.stats.maxHp;
    }
    getCurrentHp() {
        return this.stats.currentHp;
    }
    getMoveRange() {
        return this.stats.moveRange;
    }
    getMaxRange() {
        return this.stats.maxRange;
    }
    getDamage() {
        return this.stats.damage;
    }
    getAmount() {
        return this.stats.amount;
    }
}


console.log("~ DamageCalculatorMultipleDamage", DamageCalculatorMultipleyDamage)
console.log("~ DamageCalculatorWithHealingAttacker", DamageCalculatorWithHealingAttacker)