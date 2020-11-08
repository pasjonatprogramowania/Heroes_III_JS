import CreatureStatistics from './creatureStatistics.js'

export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        this.stats = new CreatureStatistics(
            (_name || 'Smok'),
            (_attack || 1),
            (_armor || 1),
            (_maxHp || 10),
            (_moveRange || 100));
        localStorage.setItem('defenderCurrentHp', this.stats.getMaxHp())
        localStorage.setItem('attackerCurrentHp', this.stats.getMaxHp())
    }
    attack(_defender,) {
        if (this.isAlive()) {
            localStorage.setItem(
                "defenderCurrentHp",
                _defender.stats.getMaxHp() - this.stats.getAttack() + _defender.stats.getArmor() > _defender.stats.getMaxHp()
                    ? _defender.stats.getMaxHp()
                    : _defender.stats.getMaxHp() - this.stats.getAttack() + _defender.stats.getArmor())


        }
    }
    isAlive() {
        if (localStorage.getItem("defenderCurrentHp") > 0) {
            return true
        }
    }
    getCurrentHp() {
        return localStorage.getItem("defenderCurrentHp")
    }

}