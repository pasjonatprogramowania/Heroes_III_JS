"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
class RegenerateConstantHealthValueOnTournEnd extends creature_1.default {
    constructor(_creature, _regenerationValue) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.constantHealthRegenerationValue = _regenerationValue;
    }
    propertyChange() {
        this.stats.currentHp += this.constantHealthRegenerationValue;
        if (this.stats.currentHp > this.stats.maxHp) {
            this.stats.currentHp = this.stats.maxHp;
        }
    }
}
exports.default = RegenerateConstantHealthValueOnTournEnd;
