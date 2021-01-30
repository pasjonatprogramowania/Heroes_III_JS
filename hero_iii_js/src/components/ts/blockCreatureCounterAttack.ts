import Creature from './creature';
export default class blockCreatureCounterAttack extends Creature {

    decorated:any;
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
    counterAttack(){
        return;
    }
}