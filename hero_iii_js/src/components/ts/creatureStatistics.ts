export default class CreatureStatistics {
    name:string;
    attack:number;
    armor:number;
    maxHp:number;
    moveRange:number;
    maxRange:number;
    damage:any;
    amount:number;
    calculator:any;
    currentHp:number;
    wasCounterAttack:boolean;

    constructor(_name:string, _attack:number, _armor:number, _maxHp:number, _moveRange:number, _damage:any, _amount:number, _calculator:any) {
        this.name = _name;
        this.attack = _attack;
        this.armor = _armor;
        this.maxHp = _maxHp;
        this.moveRange = _moveRange;
        this.maxRange = _moveRange;
        this.damage = _damage;
        this.amount = _amount;
        this.calculator = _calculator;
        this.currentHp = _maxHp;
        this.wasCounterAttack= false;
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
