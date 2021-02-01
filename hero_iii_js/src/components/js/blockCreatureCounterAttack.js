"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __importDefault(require("./creature"));
class blockCreatureCounterAttack extends creature_1.default {
    constructor(_creature) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.decoratedCreature = _creature;
    }
    attack(_defender) {
        _defender.setDefaultStats();
        this.decoratedCreature.setDefaultStats();
        if (this.decoratedCreature.isAlive()) {
            let damageToDeal = this.decoratedCreature.calculateDamge(this, _defender);
            _defender.applayDamage(damageToDeal);
            this.decoratedCreature.performAfterAttack(damageToDeal);
        }
    }
    calculateDamge(_attacker, _defender) {
        return this.getCalculator().calculate(_attacker, _defender);
    }
}
exports.default = blockCreatureCounterAttack;
