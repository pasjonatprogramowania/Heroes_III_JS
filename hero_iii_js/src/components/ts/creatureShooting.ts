import Creature from "./creature";

export default class CreatureShooting extends Creature{
    constructor(_creature:Creature){
        super(
        _creature.getName(), 
        _creature.getAttack(),
        _creature.getArmor(),
        _creature.getMaxHp(),
        _creature.getMoveRange(),
        _creature.getDamage,
        _creature.getAmount(),
        _creature.getCalculator()
        );
    }
    getMoveRange(){
        return 100;
    }
} 