import AbstractDamageCalculator from './abstractDamageCalculator';

export default class DamageCalculatorDefault extends AbstractDamageCalculator {
    constructor() {
        super();
    }
    changeDamageAfter(_damageToDeal: number) {
        return _damageToDeal;
    }
}
