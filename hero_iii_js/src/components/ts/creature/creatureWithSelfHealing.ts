import Creature from './creature';
export default class CreatureWithSelfHealing extends Creature {
    selfHealingChance: number;
    constructor(_creature: Creature, _selfHealingChance: number) {
        super(_creature.getName(), _creature.getAttack(), _creature.getArmor(), _creature.getMaxHp(), _creature.getMoveRange(), _creature.getDamage(), _creature.getAmount(), _creature.getCalculator(), _creature.getAttackRange());

        this.selfHealingChance = _selfHealingChance;
    }
    performAfterAttack(_damageToDeal: number): any {
        this.applayDamage(Math.round(_damageToDeal * (100 / this.selfHealingChance)) * -1);
    }
}
