"use strict";
// import DamageCalculator from "./damageCalculator";
Object.defineProperty(exports, "__esModule", { value: true });
class damageCalculatorMultipleyDamage {
    constructor(_min, _multiplayer, _unitTestProcentChance) {
        this.min = _min;
        this.multiplayer = _multiplayer;
        this.unitTestProcentChance = _unitTestProcentChance;
    }
    changeDamageAfter(_damageToDeal) {
        let specialRandValue;
        let max = 100;
        if (this.unitTestProcentChance === undefined) {
            specialRandValue = Math.floor(Math.random() * (max - this.min + 1)) + this.min;
        }
        else {
            specialRandValue = this.unitTestProcentChance;
        }
        if (specialRandValue >= 80) {
            _damageToDeal *= this.multiplayer;
            return Math.round(_damageToDeal);
        }
        else {
            return Math.round(_damageToDeal);
        }
    }
}
exports.default = damageCalculatorMultipleyDamage;
