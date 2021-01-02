export default class CreatureStatistics {
    constructor(_name, _attack, _armor, _maxHp, _moveRange, _damage, _amount, _calculator) {
        this.name = _name;
        this.attack = _attack;
        this.armor = _armor;
        this.maxHp = _maxHp;
        this.moveRange = _moveRange;
        this.maxRange = _moveRange;
        this.damage = _damage;
        this.amount = _amount;
        this.calculator = _calculator;
    }
    getName() {
        return this.name;
    }
    getAttack() {
        return this.attack;
    }
    getArmor() {
        return this.armor;
    }
    getMaxHp() {
        return this.maxHp;
    }
    getMoveRange() {
        return this.moveRange;
    }
    getMaxRange() {
        return this.maxRange;
    }
    getAmount() {
        return this.amount;
    }
}
