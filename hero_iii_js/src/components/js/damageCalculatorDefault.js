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
    changeDamageAfter(_damageToDeal) {
        return _damageToDeal;
    }
}
exports.default = damageCalculatorDefault;
