"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const damageCalculatorDefault_1 = __importDefault(require("./damageCalculatorDefault"));
class DamageCalaculatorReduceDistanceDamage extends damageCalculatorDefault_1.default {
    constructor(_reductionProcetn) {
        super();
        this.reductionProcent = _reductionProcetn / 100;
    }
    changeDamageAfter(_damageToDeal) {
        return _damageToDeal - _damageToDeal * this.reductionProcent;
    }
}
exports.default = DamageCalaculatorReduceDistanceDamage;
