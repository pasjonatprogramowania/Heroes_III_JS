// import DamageCalculator from "./damageCalculator";


export default class damageCalculatorMultipleyDamage {
    min:number;
    multiplayer:number;
    unitTestProcentChance:number;
    constructor(_min:number, _multiplayer:number, _unitTestProcentChance:number) {
        this.min = _min
        this.multiplayer = _multiplayer
        this.unitTestProcentChance = _unitTestProcentChance
    }
    changeDamageAfter(_damageToDeal:number) {
        let specialRandValue
        let max = 100;
        if (this.unitTestProcentChance === undefined) {
            specialRandValue = Math.floor(Math.random() * (max - this.min + 1)) + this.min
        } else {
            specialRandValue = this.unitTestProcentChance
        }
        if (specialRandValue >= 80) {
            _damageToDeal *= this.multiplayer
            return Math.round(_damageToDeal);
        } else {
            return Math.round(_damageToDeal);
        }
    }
} 