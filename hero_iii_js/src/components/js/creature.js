import CreatureStatistics from "./creatureStatistics.js";

export default class Creature {
    constructor(_name, _attack, _armor, _maxHp, _moveRange) {
        this.stats = this.createCreature(
            _name,
            _attack,
            _armor,
            _maxHp,
            _moveRange
        );
        localStorage.setItem(`${this.stats.name}CurrentHp`, this.stats.getMaxHp());
        localStorage.setItem(`${this.stats.name}CurrentHp`, this.stats.getMaxHp());
        window.var = false;
        //zamien wszystkie localStroydze na window. s
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
        if (_defender.isAlive()) {
            let defenderDamageToDeal = this.calculateDamage(_defender);
            localStorage.setItem(
                `${_defender.stats.name}CurrentHp`,
                defenderDamageToDeal
            );
            if (_defender.isAlive()) {
                let attackerDamegeToDeal = _defender.calculateDamage(this);
                localStorage.setItem(
                    `${this.stats.name}CurrentHp`,
                    attackerDamegeToDeal
                );
            }
        }
        window.var = true;
    }
    calculateDamage(creatureToAttack) {
        return creatureToAttack.stats.getMaxHp() -
            this.stats.getAttack() +
            creatureToAttack.stats.getArmor() >
            creatureToAttack.stats.getMaxHp()
            ? creatureToAttack.stats.getMaxHp()
            : creatureToAttack.stats.getMaxHp() -
            this.stats.getAttack() +
            creatureToAttack.stats.getArmor();
    }
    isAlive() {
        if (localStorage.getItem(`${this.stats.name}CurrentHp`) > 0) {
            return true;
        }
    }
    getCurrentHp() {
        console.log("aaa", window.var);

        return localStorage.getItem(`${this.stats.name}CurrentHp`);
    }
}
// TODO
// CounterAttack powinien wykonywac sie tylko raz na tuer dodaj te logike
