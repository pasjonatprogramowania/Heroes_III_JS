"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
class CreatureShooting extends creature_1.default {
    constructor(_creature) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), 100);
    }
    getAttackRange() {
        return 100;
    }
    counterAttack() { }
}
exports.default = CreatureShooting;
