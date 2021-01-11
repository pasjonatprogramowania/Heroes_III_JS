import AbstractDamageCalculator from "./abstractDamageCalculator";

export default class damageCalculatorDefault extends AbstractDamageCalculator{
constructor(){
    super();
}
changeDamageAfter(_damageToDeal:number) {
    return _damageToDeal;
}
}