import CreatureStatistics from './creatureStatistics';
import DamageCalculatorDefault from './damageCalculatorDefault';
// import CreatureWithSelfHealing from './creatureWithSelfHealing'
import Range from './range';
export default class Creature {
    damageCalculator:any
    stats:CreatureStatistics
    constructor(_name:string, _attack:number, _armor:number, _maxHp:number, _moveRange:number, _damage:any, _amount:number, _calculator:any) {
        this.stats = this.createCreature(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount,_calculator);
    }
    createCreature(_name:string, _attack:number, _armor:number, _maxHp:number, _moveRange:number, _damage:any, _amount:number,_calculator:any) {
        return new CreatureStatistics(
            _name ?? "Smok",
            _attack ?? 5,
            _armor ?? 5,
            _maxHp ?? 100,
            _moveRange ?? 5,
            _damage ?? new Range(5, 5),
            _amount ?? 1,
            _calculator ?? new DamageCalculatorDefault(),
            10,
        );
    }
    setDefaultStats() {
        this.stats.currentHp = this.getCurrentHp() != undefined ? this.getCurrentHp() : this.getMaxHp();
    }
    attack(_defender:Creature) {
        _defender.setDefaultStats(); 
        this.setDefaultStats();
        if (_defender.isAlive()) {
            let damageToDeal = _defender.getCalculator().calculate(this, _defender)
            this.performAfterAttack(damageToDeal)
            _defender.applayDamage(damageToDeal)
            if (_defender.isAlive() && !_defender.stats.wasCounterAttack) {
                _defender.stats.wasCounterAttack = true;
                let counterAttackDamageToDeal = this.getCalculator().calculate(_defender, this)
                _defender.performAfterAttack(counterAttackDamageToDeal)
                this.applayDamage(counterAttackDamageToDeal);
            }
        }
    }
    performAfterAttack(_damageToDeal:number){
        if(_damageToDeal){
            return this;
        }        
        return this;
    }
    applayDamage(_damageToDeal:number) {
        let totalAmountHp = (this.getMaxHp() * (this.getAmount() - 1)) + this.stats.currentHp - _damageToDeal
        if (totalAmountHp <= 0) {
            this.stats.amount = 0;
            this.stats.currentHp = 0;
        } else {
            if (totalAmountHp % this.getMaxHp() == 0) {
                this.stats.currentHp = this.getMaxHp()
                this.stats.amount = totalAmountHp / this.getMaxHp();
            } else {
                this.stats.currentHp = totalAmountHp % this.getMaxHp();
                if (_damageToDeal >= 0) {
                    this.stats.amount = Math.floor(totalAmountHp / this.getMaxHp()) + 1
                } else {
                    this.stats.amount = Math.floor(totalAmountHp / this.getMaxHp())
                }
            }
        }
    }
    isAlive() {
        if (this.getCurrentHp() > 0) {
            return true;
        }
        // return false;
    }
    resetCounterAttack() {
        this.stats.wasCounterAttack = false;
    }
    canCounterAttack() {
        return !this.stats.wasCounterAttack
    }
    getName() {
        return this.stats.name;
    }
    getAttack() {
        return this.stats.attack;
    }
    getArmor() {
        return this.stats.armor;
    }
    getMaxHp() {
        return this.stats.maxHp;
    }
    getCurrentHp() {
        return this.stats.currentHp;
    }
    getMoveRange() {
        return this.stats.moveRange;
    }
    getMaxRange() {
        return this.stats.maxRange;
    }
    getDamage() {
        return this.stats.damage;
    }
    getAmount() {
        return this.stats.amount;
    }
    getCalculator(){
        return this.stats.calculator;
    }
    getAttackRange(){
        return this.stats.attackRange;
    }
    getMaxAttackRange(){
        return this.stats.maxAttackRange;
    }
}
