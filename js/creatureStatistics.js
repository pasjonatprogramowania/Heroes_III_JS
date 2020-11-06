export default class CreatureStatistics {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        this.name = _name;
        this.attack = _attack;
        this.armor = _armor;
        this.maxHp = _maxHp;
        this.moveRange = _moveRange;
    }
    getName() {
        return this.name
    }
    getAttack() {
        return this.attack
    }
    getArmor() {
        return this.armor
    }
    getMaxHp() {
        return this.maxHp
    }
    getMoveRange() {
        return this.moveRange
    }








}