import AbstractDamageCalculator from "./abstractDamageCalculator";

export default class damageCalculatorDefault extends AbstractDamageCalculator{
    constructor(){
        super();
    }
    attack(_defender:Creature) {
        _defender.setDefaultStats(); 
        this.setDefaultStats();
        if (_defender.isAlive()) {
            let damageToDeal = _defender.getCalculator().calculate(this, _defender)
            this.performAfterAttack(damageToDeal)
            _defender.applayDamage(damageToDeal)
        }
    }
    changeDamageAfter(_damageToDeal:number) {
        return _damageToDeal;
    }
    performAfterAttack(_damageToDeal:number){
        if(_damageToDeal){
            return this;
        }        
        return this;
    }
}

// Podmien logike aby cratury mialy attackRange I aby to po nim bylo wiaodmo czy mozna zatakowac kogos 