import AbstractDamageCalculator from "./abstractDamageCalculator";
import Creature from './creature';

export default class damageCalculatorWithHealingAttacker extends AbstractDamageCalculator{
    selfHealingPercentage:number;
    constructor(_selfHealingPercentage:number){
        super();
        this.selfHealingPercentage = _selfHealingPercentage;
    }
    changeDamageAfter(_damageToDeal:number,_attacker:Creature) {
        _attacker.applayDamage((Math.round(_damageToDeal * (100 / this.selfHealingPercentage))) * -1)
        return _damageToDeal;
    }
} 