import Creature from './creature'; 
export default abstract class DamageCalculator {
    calculate(_attacker:any, _defender:any) {
        let randValue = Math.floor(Math.random() * (_attacker.getDamage().getUpperPoint() - _attacker.getDamage().getLowerPoint() + 1) + _attacker.getDamage().getLowerPoint())
        let oneCreatureToDeal:number;
        if (_attacker.getAttack() >= _defender.getArmor()) {
            let attackPoints = _attacker.getAttack() - _defender.getArmor();
            if (attackPoints > 60) {
                attackPoints = 60;
            }
            oneCreatureToDeal = randValue * (1 + (attackPoints) * 0.05);
        } else {
            let defencePoint = _defender.getArmor() - _attacker.getAttack()
            if (defencePoint > 12) {
                defencePoint = 12;
            }
            oneCreatureToDeal = randValue * (1 - defencePoint * 0.025)
        }
        if (oneCreatureToDeal < 0) {
            oneCreatureToDeal = 0;
        }
        // let wholeStackDamageToDeal:number = Math.floor(_attacker.getAmount() * oneCreatureToDeal); 
        let wholeStackDamageToDealAfterChange = this.changeDamageAfter(oneCreatureToDeal,_attacker)

        return Math.round(wholeStackDamageToDealAfterChange);
    }
    abstract changeDamageAfter(_damageToDeal:number,_attacker:Creature):any;
}
