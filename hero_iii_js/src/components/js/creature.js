import CreatureStatistics from "./creatureStatistics.js";
import DamageCalculator from './damageCalculator.js';
import Range from './range.js';
export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange, _damage) {
        this.stats = this.createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage);
        this.stats.currentHp = this.stats.maxHp;
        this.stats.wasCounterAttack = false;
        this.damageCalculator = new DamageCalculator();
    }
    createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage) {
        return new CreatureStatistics(
            _name || "Smok",
            _attack || 1,
            _armor || 1,
            _maxHp || 100,
            _moveRange || 5,
            _damage || new Range(1, 5)
        );
    }
    setDefaultStats() {
        this.stats.currentHp = this.getCurrentHp() != undefined ? this.getCurrentHp() : this.getMaxHp();
    }
    attack(_defender) {
        _defender.setDefaultStats();
        this.setDefaultStats();

        if (_defender.isAlive()) {
            _defender.stats.currentHp = _defender.getCurrentHp() - this.damageCalculator.calculate(this, _defender)
            if (_defender.isAlive() && !_defender.stats.wasCounterAttack) {
                _defender.stats.wasCounterAttack = true;
                this.stats.currentHp = _defender.getCurrentHp() - this.damageCalculator.calculate(_defender, this)
            }
        }
    }
    isAlive() {
        if (this.stats.currentHp > 0) {
            return true;
        }
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
}

