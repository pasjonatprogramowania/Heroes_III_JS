"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
class SplashDamageCreatureDecorator extends creature_1.default {
    constructor(_creature, _splashRange) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.splashDamageRange = _splashRange;
    }
    getSplashRange() {
        return this.splashDamageRange;
    }
}
exports.default = SplashDamageCreatureDecorator;
