"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creatureStatistics_1 = __importDefault(require("./creatureStatistics"));
const damageCalculatorDefault_1 = __importDefault(require("./damageCalculatorDefault"));
const range_1 = __importDefault(require("./range"));
class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount, _calculator, _attackRange) {
        this.stats = this.createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount, _calculator, _attackRange);
    }
    createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount, _calculator, _attackRange) {
        //prettier-ignore
        return new creatureStatistics_1.default(_name !== null && _name !== void 0 ? _name : "Smok", _attack !== null && _attack !== void 0 ? _attack : 5, _armor !== null && _armor !== void 0 ? _armor : 5, _maxHp !== null && _maxHp !== void 0 ? _maxHp : 100, _moveRange !== null && _moveRange !== void 0 ? _moveRange : 5, _damage !== null && _damage !== void 0 ? _damage : new range_1.default(1, 1), _amount !== null && _amount !== void 0 ? _amount : 1, _calculator !== null && _calculator !== void 0 ? _calculator : new damageCalculatorDefault_1.default(), _attackRange !== null && _attackRange !== void 0 ? _attackRange : 1);
    }
    setDefaultStats() {
        this.stats.currentHp = this.getCurrentHp() != undefined ? this.getCurrentHp() : this.getMaxHp();
    }
    attack(_defender) {
        _defender.setDefaultStats();
        this.setDefaultStats();
        if (_defender.isAlive()) {
            let damageToDeal = _defender.calculateDamge(this, _defender);
            _defender.applayDamage(damageToDeal);
            this.performAfterAttack(damageToDeal);
            this.counterAttack(_defender);
        }
    }
    calculateDamge(_attacker, _defender) {
        return this.getCalculator().calculate(_attacker, _defender);
    }
    counterAttack(_defender) {
        if (_defender.isAlive() && !_defender.stats.wasCounterAttack) {
            let counterAttackDamageToDeal = this.calculateDamge(_defender, this);
            this.applayDamage(counterAttackDamageToDeal);
            _defender.stats.wasCounterAttack = true;
            _defender.performAfterAttack(counterAttackDamageToDeal);
        }
    }
    performAfterAttack(_damageToDeal) {
        if (_damageToDeal) {
            return this;
        }
        return this;
    }
    applayDamage(_damageToDeal) {
        let totalAmountHp = this.getMaxHp() * (this.getAmount() - 1) + this.stats.currentHp - _damageToDeal;
        if (totalAmountHp <= 0) {
            this.stats.amount = 0;
            this.stats.currentHp = 0;
        }
        else {
            if (totalAmountHp % this.getMaxHp() == 0) {
                this.stats.currentHp = this.getMaxHp();
                this.stats.amount = totalAmountHp / this.getMaxHp();
            }
            else {
                this.stats.currentHp = totalAmountHp % this.getMaxHp();
                if (_damageToDeal >= 0) {
                    this.stats.amount = Math.floor(totalAmountHp / this.getMaxHp()) + 1;
                }
                else {
                    this.stats.amount = Math.floor(totalAmountHp / this.getMaxHp());
                }
            }
        }
    }
    propertyChange() { }
    isAlive() {
        return this.getAmount() > 0;
    }
    resetCounterAttack() {
        this.stats.wasCounterAttack = false;
    }
    canCounterAttack() {
        return !this.stats.wasCounterAttack;
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
    getCalculator() {
        return this.stats.calculator;
    }
    getAttackRange() {
        return this.stats.attackRange;
    }
}
exports.default = Creature;
