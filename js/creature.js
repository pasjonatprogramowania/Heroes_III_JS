import CreatureStatistics from './creatureStatistics.js'


export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        this.stats = new CreatureStatistics((_name || 'Smok'), (_attack || 1), (_armor || 1), (_maxHp || 10), (_moveRange || 100))
        this.currentHp = this.stats.getMaxHp();
    }
    attack(_defender) {
        console.log('_defender', this.stats.getAttack())
        _defender.currentHp = _defender.currentHp - this.stats.getAttack() + _defender.this.stats.getArmor()
    }
    getCurrentHp() {
        return this.currentHp
    }
}