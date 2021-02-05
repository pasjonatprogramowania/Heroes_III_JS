"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractDamageCalculator_1 = __importDefault(require("./abstractDamageCalculator"));
class DamageCalculatorMultipleyDamage extends abstractDamageCalculator_1.default {
    constructor(_min, _multiplayer, _unitTestProcentChance = 0) {
        super();
        this.min = _min;
        this.multiplayer = _multiplayer;
        this.unitTestProcentChance = _unitTestProcentChance;
    }
    changeDamageAfter(_damageToDeal) {
        let specialRandValue;
        let max = 100;
        if (this.unitTestProcentChance === 0) {
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
exports.default = DamageCalculatorMultipleyDamage;
