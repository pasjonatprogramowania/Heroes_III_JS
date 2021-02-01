import Creature from './creature';
export default class CreatureWithSelfHealing extends Creature{
    selfHealingChance:number;
    constructor(_creature:Creature,_selfHealingChance:number){
        // super('Smok',5,5,100,5,new Range(5,5),5,new DamageCalculator);
        super(_creature.getName(),
        _creature.getAttack(),
        _creature.getArmor(),
        _creature.getMaxHp(),
        _creature.getMoveRange(),
        _creature.getDamage(),
        _creature.getAmount(),
        _creature.getCalculator(),
        _creature.getAttackRange()
        )
        this.selfHealingChance =_selfHealingChance
    }
    performAfterAttack(_damageToDeal:number):any{
       this.applayDamage((Math.round(_damageToDeal * (100 / this.selfHealingChance))) * -1)
    }
}