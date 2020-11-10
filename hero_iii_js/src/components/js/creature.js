import CreatureStatistics from "./creatureStatistics.js";

export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        this.stats = this.createCreature(_name, _attack, _armor, _maxHp, _moveRange);
    }
    createCreature(_name, _attack, _armor, _maxHp, _moveRange) {
        return new CreatureStatistics(
            _name || "Smok",
            _attack || 1,
            _armor || 1,
            _maxHp || 100,
            _moveRange || 10
        );
    }
    attack(_defender) {
        _defender.stats.wasCounterAttack = false
        _defender.stats.currentHp = _defender.stats.maxHp;
        this.stats.wasCounterAttack = false
        this.stats.currentHp = this.stats.maxHp;

        if (_defender.isAlive()) {
            _defender.stats.currentHp = this.calculateDamage(_defender);
            if (_defender.isAlive() && !_defender.wasCounterAttack) {
                _defender.wasCounterAttack = true;
                this.stats.currentHp = _defender.calculateDamage(this);
            }
        }
    }
    calculateDamage(attackedCreature) {
        return attackedCreature.stats.getMaxHp() - this.stats.getAttack() + attackedCreature.stats.getArmor() > attackedCreature.stats.getMaxHp()
            ? attackedCreature.stats.getMaxHp()
            : attackedCreature.stats.getMaxHp() - this.stats.getAttack() + attackedCreature.stats.getArmor();
    }
    isAlive() {
        if (this.stats.currentHp > 0) {
            return true;
        }
    }
    getCurrentHp() {
        return this.stats.currentHp;
    }
}
