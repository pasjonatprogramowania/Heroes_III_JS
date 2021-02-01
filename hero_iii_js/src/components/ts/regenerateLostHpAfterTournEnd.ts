import Creature from './creature';
export default class RegenerateLostHpAfterTournEnd extends Creature{ 
    constructor(_creature:Creature){
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
    }
    propertyChange(){
        this.stats.currentHp = this.getMaxHp();   
    }
}