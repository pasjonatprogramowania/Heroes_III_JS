import Creature from "../creature.js";

export default class CounterAttackTest {
  constructor() {
    this.notImportant = 0;
  }
  creatureShouldCounterAttack() {
    let attacker = new Creature("Attack", 5, 5, 100, this.notImportant);
    let defender = new Creature("Defender", 20, 20, 100, this.notImportant);

    attacker.attack(defender);
    if (attacker.getCurrentHp() > 85) {
      throw "Exception: => Creatura zle wykonala kontr attack";
    }
  }
  // creatureShouldCounterAttackOnlyOnceAtTour() {
  //     let attacker = new Creature('Attack', 5, 5, 100, this.notImportant);
  //     let attacker2 = new Creature('Attack', 5, 5, 100, this.notImportant);
  //     let defender = new Creature('Defender', 20, 20, 100, this.notImportant);

  //     attacker.attack(defender)
  //     attacker2.attack(defender)
  //     if (attacker.getCurrentHp() != 85 || attacker2.getCurrentHp() != 100) {
  //         throw 'Exception: => Creatura atakuje wiecej niz raz'
  //     }
  // }
}
