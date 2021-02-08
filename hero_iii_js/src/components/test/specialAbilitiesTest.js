import Range from '../js/range.js';
import Board from '../js/board.js';
import Point from '../js/point.js';
import CreatureTurnQueue from '../js/creature/creatureTurnQueue.js';
import DamageCalculatorMultipleyDamage from '../js/creature/damageCalculatorMultipleyDamage.js';
import DamageCalculatorDefault from '../js/creature/damageCalculatorDefault.js';
import Creature from "../js/creature/creature.js";
import CreatureWithSelfHealing from '../js/creature/creatureWithSelfHealing.js';
import CreatureShooting from '../js/creature/creatureShooting.js';
import BlockCreatureCounterAttack from '../js/creature/blockCreatureCounterAttack.js';
import RegenerateLostHpAfterTournEnd from '../js/creature/regenerateLostHpAfterTournEnd.js';
import NecropolisFactory from '../js/creature/necropolisFactory';
import GameEngine from '../js/gameEngine';

export default class SpecialAbilitiesTest {
    DreadKnightShouldDealDoubleDamage() {
        let attacker = new Creature('DreadKnight', 5, 5, 9999, 5, new Range(100, 100), 1, new DamageCalculatorMultipleyDamage(0.2, 2, 100))
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 1, new DamageCalculatorMultipleyDamage(0.2, 2, 0))
        let result = new DamageCalculatorMultipleyDamage(0.2, 2, 100).calculate(attacker, defender)
        if (result !== 200) {
            console.log("~ result", result)
            throw `Exception: => DreadKnight powienien zadac 200dmg zadała ${result}dmg`;
        }
    }
    VampireLordShouldHealAfterDealDamage() {
        let attacker = new Creature('VampireLord', 5, 5, 100, 5, new Range(100, 100), 10, new DamageCalculatorDefault())
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 10, new DamageCalculatorDefault())

        let VampireLord = new CreatureWithSelfHealing(attacker, 100)

        VampireLord.attack(defender)
        if (VampireLord.getCurrentHp() !== 100 || VampireLord.getAmount() !== 11) {
            console.log("~ attacker.getAmount()", attacker.getAmount())
            console.log("~ attacker.getCurrentHp()", attacker.getCurrentHp())
            throw `Exception: => VampireLord powienien miec powyzej 100 zdrowa a ma ${attacker.getCurrentHp()}HP i ${attacker.getAmount()} Staków`;
        }
    }
    ShootingCreatureShouldHaveUnlimitedRange() {
        let attacker = new Creature('Archer', 5, 5, 100, 5, new Range(50, 50), 10, new DamageCalculatorDefault())
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(0, 0), 10, new DamageCalculatorDefault())
        let Archer = new CreatureShooting(attacker)

        let board = new Board();
        board.add(new Point(1, 1), Archer)
        board.add(new Point(6, 6), defender)

        if (!board.canAttack(Archer, defender)) {
            console.log("~ defender.getMaxHp()", defender.getMaxHp())
            console.log("~ defender.getCurrentHp()", defender.getCurrentHp())
            throw `Exception: => Archer powienien miec nielimitowany zasieg`;
        }

    }
    ShootingCreatureShouldNotTakeCounterAttack() {
        let attacker = new Creature('Archer', 5, 5, 100, 5, new Range(50, 50), 10, new DamageCalculatorDefault())
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(10, 10), 10, new DamageCalculatorDefault())
        let Archer = new BlockCreatureCounterAttack(new CreatureShooting(attacker))

        let board = new Board();
        board.add(new Point(1, 1), Archer)
        board.add(new Point(6, 6), defender)

        if (Archer.getMaxHp() !== Archer.getCurrentHp()) {
            console.log("~ defender.getMaxHp()", Archer.getMaxHp())
            console.log("~ defender.getCurrentHp()", Archer.getCurrentHp())
            throw `Exception: => Archer powienien nie otrzymac counterAttacku`;
        }
    }
    VampireShouldNotTakeCounterAttackAndHaveUnlimitedRange() {
        let attacker = new Creature('Archer', 5, 5, 100, 5, new Range(50, 50), 10, new DamageCalculatorDefault())
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(50, 50), 10, new DamageCalculatorDefault())

        let Vampire = new BlockCreatureCounterAttack(new CreatureShooting(new BlockCreatureCounterAttack(attacker)));

        Vampire.attack(defender)

        if (Vampire.getMaxHp() !== Vampire.getCurrentHp()) {
            console.log("~ defender.getMaxHp()", Vampire.getMaxHp())
            console.log("~ defender.getCurrentHp()", Vampire.getCurrentHp())
            throw `Exception: => Vampir powienien ulezyc sie przy ataku`;
        }

        let board = new Board();
        board.add(new Point(1, 1), Vampire)
        board.add(new Point(6, 6), defender)

        if (!board.canAttack(Vampire, defender)) {
            throw `Exception: => Vampir powienien miec nielimitowany zasieg`;
        }
    }
    LichShouldHaveRegenHpInNewTour() {
        let attacker = new Creature('Archer', 5, 5, 100, 5, new Range(50, 50), 10, new DamageCalculatorDefault())
        let defender = new Creature('Defender', 5, 5, 100, 1, new Range(50, 50), 10, new DamageCalculatorDefault())

        let Lich = new RegenerateLostHpAfterTournEnd(attacker)

        let board = new Board();
        board.add(new Point(1, 1), Lich)
        board.add(new Point(1, 2), defender)

        defender.attack(Lich);

        let queue = new CreatureTurnQueue();
        queue.initQueue(board.map);

        queue.pass();
        queue.pass();
        queue.pass();

        if (Lich.getCurrentHp() !== Lich.getMaxHp()) {
            console.log("~ defender.getMaxHp()", Lich.getMaxHp())
            console.log("~ defender.getCurrentHp()", Lich.getCurrentHp())
            throw `Exception: => lICH powienien uleczyc sie przy kocu tury`;
        }
    }
    LichShouldDealSplashDamage() {
        let factory = new NecropolisFactory();

        let attakcerArray = [];
        let defenderArray = [];

        let attacker = factory.create(true, 5)
        attakcerArray.push(attacker)

        let ns1 = factory.createdDefCreature();
        let s2 = factory.createdDefCreature();
        let ns3 = factory.createdDefCreature();
        let s4 = factory.createdDefCreature();
        let s5 = factory.createdDefCreature();
        let s6 = factory.createdDefCreature();
        let ns7 = factory.createdDefCreature();
        let s8 = factory.createdDefCreature();
        let ns9 = factory.createdDefCreature();
        defenderArray.push(ns1, s2, ns3, s4, s5, s6, ns7, s8, ns9)

        let board = new Board();
        board.add(new Point(17, 0), ns1)
        board.add(new Point(18, 0), s2)
        board.add(new Point(19, 0), ns3)

        board.add(new Point(17, 1), s4)
        board.add(new Point(18, 1), s5)
        board.add(new Point(19, 1), s6)

        board.add(new Point(17, 2), ns7)
        board.add(new Point(18, 2), s8)
        board.add(new Point(19, 2), ns9)

        let gameEngine = new GameEngine(attakcerArray, defenderArray, board);
        gameEngine.attack(new Point(18, 1));

        if ((s8.getCurrentHp() === s8.getMaxHp() || s6.getCurrentHp() === s6.getMaxHp() || s5.getCurrentHp() === s5.getMaxHp() || s4.getCurrentHp() === s4.getMaxHp()) || s2.getCurrentHp() === s2.getMaxHp()) {
            console.log("~ s8.getMaxHp()", s8.getMaxHp())
            console.log("~ s8.getCurrentHp()", s8.getCurrentHp())
            console.log("~ s6.getCurrentHp()", s6.getCurrentHp())
            console.log("~ s5.getCurrentHp()", s5.getCurrentHp())
            console.log("~ s4.getCurrentHp()", s4.getCurrentHp())
            console.log("~ s2.getCurrentHp()", s2.getCurrentHp())
            throw `Exception: => Creatura która powinna otrzymac obrazenia nie otrzymala ich`;
        }
        if (ns1.getCurrentHp() !== ns1.getMaxHp() || ns3.getCurrentHp() !== ns3.getMaxHp() || ns7.getCurrentHp() !== ns7.getMaxHp() || ns9.getCurrentHp() !== ns9.getMaxHp()) {
            console.log("~ ns9.getMaxHp()", ns9.getMaxHp())
            console.log("~ ns9.getCurrentHp()", ns9.getCurrentHp())
            console.log("~ ns7.getCurrentHp()", ns7.getCurrentHp())
            console.log("~ ns3.getCurrentHp()", ns3.getCurrentHp())
            console.log("~ ns1.getCurrentHp()", ns1.getCurrentHp())
            throw `Exception: => Creatura która nie powinna otrzymac obrazenia otrzymala je`;
        }

    }
}