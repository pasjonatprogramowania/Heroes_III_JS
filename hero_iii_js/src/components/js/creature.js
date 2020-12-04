import CreatureStatistics from "./creatureStatistics.js";

export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        this.stats = this.createCreature(_name, _attack, _armor, _maxHp, _moveRange);
        this.stats.currentHp = this.stats.maxHp;
        this.stats.wasCounterAttack = false;
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
    setDefaultStats() {
        // this.stats.wasCounterAttack == true ? this.stats.wasCounterAttack = false : this.stats.wasCounterAttack = true
        this.stats.currentHp = this.stats.currentHp != undefined ? this.stats.currentHp : this.stats.maxHp;
    }
    // popraw counter atack
    attack(_defender) {
        _defender.setDefaultStats();
        this.setDefaultStats();

        if (_defender.isAlive()) {
            _defender.stats.currentHp = this.calculateDamage(_defender);
            if (_defender.isAlive() && !_defender.stats.wasCounterAttack) {
                _defender.stats.wasCounterAttack = true;
                this.stats.currentHp = _defender.calculateDamage(this);
            }
        }
    }
    calculateDamage(attackedCreature) {
        return attackedCreature.stats.currentHp - this.stats.getAttack() + attackedCreature.stats.getArmor() > attackedCreature.stats.getMaxHp()
            ? attackedCreature.stats.currentHp
            : attackedCreature.stats.currentHp - this.stats.getAttack() + attackedCreature.stats.getArmor();
    }
    isAlive() {
        if (this.stats.currentHp > 0) {
            return true;
        }
    }
    getCurrentHp() {
        return this.stats.currentHp;
    }
    getMoveRange() {
        return this.stats.moveRange;
    }
    resetCounterAttack() {
        this.stats.wasCounterAttack = false;
    }
    canCounterAttack() {
        return !this.stats.wasCounterAttack
    }

}

