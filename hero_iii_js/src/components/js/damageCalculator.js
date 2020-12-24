export default class DamageCalculator {
    calculate(_attacker, _defender) {
        let randValue = Math.floor(Math.random() * (_attacker.getDamage().getUpperPoint() - _attacker.getDamage().getLowerPoint() + 1) + _attacker.getDamage().getLowerPoint())
        let ret;
        if (_attacker.getAttack() >= _defender.getArmor()) {
            let attackPoints = _attacker.getAttack() - _defender.getArmor();
            if (attackPoints > 60) {
                attackPoints = 60;
            }
            ret = randValue * (1 + (attackPoints) * 0.05);
        } else {
            let defencePoint = _defender.getArmor() - _attacker.getAttack()
            if (defencePoint > 12) {
                defencePoint = 12;
            }
            ret = randValue * (1 - defencePoint * 0.025)
        }
        return parseInt(ret);
    }
}