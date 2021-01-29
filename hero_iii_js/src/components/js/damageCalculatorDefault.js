"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractDamageCalculator_1 = __importDefault(require("./abstractDamageCalculator"));
class damageCalculatorDefault extends abstractDamageCalculator_1.default {
    constructor() {
        super();
    }
    attack(_defender) {
        _defender.setDefaultStats();
        this.setDefaultStats();
        if (_defender.isAlive()) {
            let damageToDeal = _defender.getCalculator().calculate(this, _defender);
            this.performAfterAttack(damageToDeal);
            _defender.applayDamage(damageToDeal);
        }
    }
    changeDamageAfter(_damageToDeal) {
        return _damageToDeal;
    }
    performAfterAttack(_damageToDeal) {
        if (_damageToDeal) {
            return this;
        }
        return this;
    }
}
exports.default = damageCalculatorDefault;
// Podmien logike aby cratury mialy attackRange I aby to po nim bylo wiaodmo czy mozna zatakowac kogos 
