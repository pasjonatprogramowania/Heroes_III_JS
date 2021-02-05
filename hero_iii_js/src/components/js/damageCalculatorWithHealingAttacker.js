"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractDamageCalculator_1 = __importDefault(require("./abstractDamageCalculator"));
class damageCalculatorWithHealingAttacker extends abstractDamageCalculator_1.default {
    constructor(_selfHealingPercentage) {
        super();
        this.selfHealingPercentage = _selfHealingPercentage;
    }
    changeDamageAfter(_damageToDeal, _attacker) {
        _attacker.applayDamage(Math.round(_damageToDeal * (100 / this.selfHealingPercentage)) * -1);
        return _damageToDeal;
    }
}
exports.default = damageCalculatorWithHealingAttacker;
