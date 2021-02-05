"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
class CreatureWithSelfHealing extends creature_1.default {
    constructor(_creature, _selfHealingChance) {
        // super('Smok',5,5,100,5,new Range(5,5),5,new DamageCalculator);
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.selfHealingChance = _selfHealingChance;
    }
    performAfterAttack(_damageToDeal) {
        this.applayDamage(Math.round(_damageToDeal * (100 / this.selfHealingChance)) * -1);
    }
}
exports.default = CreatureWithSelfHealing;
