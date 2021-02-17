import Creature from './creature';
export default class RegenerateConstantHealthValueOnTournEnd extends Creature {
    constantHealthRegenerationValue: number;
    constructor(_creature: Creature, _regenerationValue: number) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());
        this.constantHealthRegenerationValue = _regenerationValue;
    }
    propertyChange() {
        this.stats.currentHp += this.constantHealthRegenerationValue;
        if (this.stats.currentHp > this.stats.maxHp) {
            this.stats.currentHp = this.stats.maxHp;
        }
    }
}
