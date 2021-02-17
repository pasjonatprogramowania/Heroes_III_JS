"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
class ReduceDistanceDamage extends creature_1.default {
    constructor(_creature, _reductionProcent) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.reductionProcent = _reductionProcent / 100;
    }
    calculateDamge(_attacker, _defender) {
        if (_attacker.getAttackRange() > 1) {
            let damageToDeal = this.getCalculator().calculate(_attacker, _defender);
            console.log('~ damageToDeal - damageToDeal * 0.15', damageToDeal - damageToDeal * 0.15);
            return damageToDeal - damageToDeal * this.reductionProcent;
        }
        return this.getCalculator().calculate(_attacker, _defender);
    }
}
exports.default = ReduceDistanceDamage;
