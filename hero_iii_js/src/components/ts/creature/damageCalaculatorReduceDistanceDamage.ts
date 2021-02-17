import DamageCalculatorDefault from './damageCalculatorDefault';
export default class DamageCalaculatorReduceDistanceDamage extends DamageCalculatorDefault {
    reductionProcent: number;
    constructor(_reductionProcetn: number) {
        super();
        this.reductionProcent = _reductionProcetn / 100;
    }
    changeDamageAfter(_damageToDeal: any) {
        return _damageToDeal - _damageToDeal * this.reductionProcent;
    }
}
