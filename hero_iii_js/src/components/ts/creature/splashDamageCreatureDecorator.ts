import Creature from './creature';
export default class SplashDamageCreatureDecorator extends Creature {
    splashDamageRange: any;
    constructor(_creature: Creature, _splashRange: any) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.splashDamageRange = _splashRange;
    }
    getSplashRange() {
        return this.splashDamageRange;
    }
}
