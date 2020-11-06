import CreatureStatistics from './creatureStatistics.js'

export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        if (!_name || !_attack || !_armor || !_maxHp || !_moveRange) {
            this.stats = new CreatureStatistics('Smok', 1, 1, 10, 100)
        } else {
            this.stats = new CreatureStatistics(_name, _attack, _armor, _maxHp, _moveRange)
        }
    }
}