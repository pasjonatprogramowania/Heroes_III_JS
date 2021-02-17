import ForgeFactory from '../js/creature/forgeFactory';
import CreatureShooting from '../js/creature/creatureShooting';
import Point from '../js/point';
import Board from '../js/board';
import GameEngine from '../js/gameEngine';

export default class forgeSpecialAbilitiesTest {
    // przepisz dekorator na kalkulator 
    ObroncaShouldTake15lessRangeDamage() {
        let forgeFactory = new ForgeFactory();

        let obronca = forgeFactory.create(false, 1)
        let dummyCreature = forgeFactory.createdDefCreature();
        let archer = new CreatureShooting(forgeFactory.createdDefCreature());

        if (dummyCreature.calculateDamge(archer, obronca) - obronca.calculateDamge(archer, dummyCreature) < dummyCreature.calculateDamge(archer, obronca) * 0.10) {
            console.log("~  archer.calculateDamge(archer, obronca)", dummyCreature.calculateDamge(archer, obronca))
            console.log("~ archer.calculateDamge(archer, dummyCreature)", obronca.calculateDamge(archer, dummyCreature))
            throw `Exception: => Obronca powienien otrzymac o 15% mniej damaga a otrzymal ${dummyCreature.calculateDamge(archer, obronca) - obronca.calculateDamge(archer, dummyCreature)}%`;
        }
    }
    ElitarnyTarczownikShouldTake30LessRangeDamage() {
        let forgeFactory = new ForgeFactory();

        let ElitarnyTarczownik = forgeFactory.create(true, 1)
        let dummyCreature = forgeFactory.createdDefCreature();
        let archer = new CreatureShooting(forgeFactory.createdDefCreature());

        if (dummyCreature.calculateDamge(archer, ElitarnyTarczownik) - ElitarnyTarczownik.calculateDamge(archer, dummyCreature) < dummyCreature.calculateDamge(archer, ElitarnyTarczownik) * 0.25) {
            console.log("~  dummyCreature.calculateDamge(archer, obronca)", dummyCreature.calculateDamge(archer, ElitarnyTarczownik))
            console.log("~  ElitarnyTarczownik.calculateDamge(archer, dummyCreature)", ElitarnyTarczownik.calculateDamge(archer, dummyCreature))
            throw `Exception: => Obronca powienien otrzymac o 30% mniej damaga a otrzymal ${dummyCreature.calculateDamge(archer, ElitarnyTarczownik) - ElitarnyTarczownik.calculateDamge(archer, dummyCreature)}%`;
        }
    }
    PodpalaczShouldDealDamageforTwoTiles() {
        let factory = new ForgeFactory();

        let attakcerArray = [];
        let defenderArray = [];

        let attacker = factory.create(false, 3)
        attakcerArray.push(attacker)

        let s1 = factory.createdDefCreature();
        let s2 = factory.createdDefCreature();
        let ns3 = factory.createdDefCreature();
        let ns4 = factory.createdDefCreature();
        let ns5 = factory.createdDefCreature();
        let ns6 = factory.createdDefCreature();

        defenderArray.push(s1, s2, ns3, ns4, ns5, ns6)

        let board = new Board();
        board.add(new Point(17, 0), ns3)
        board.add(new Point(18, 0), s1)
        board.add(new Point(19, 0), s2)
        board.add(new Point(17, 1), ns4)
        board.add(new Point(18, 1), ns5)
        board.add(new Point(19, 1), ns6)

        let gameEngine = new GameEngine(attakcerArray, defenderArray, board);
        gameEngine.unitTestAttack(new Point(18, 0), attacker);

        if (
            s1.getCurrentHp() === s1.getMaxHp() ||
            s2.getCurrentHp() === s2.getMaxHp()
        ) {
            console.log("~ s1.getCurrentHp() === s1.getMaxHp()", s1.getCurrentHp() === s1.getMaxHp())
            console.log("~ s2.getCurrentHp() === s2.getMaxHp()", s2.getCurrentHp() === s2.getMaxHp())
            throw `Exception: => Creatura która powinna otrzymac obrazenia nie otrzymala ich`;
        }
        if (
            ns4.getCurrentHp() !== ns4.getMaxHp() ||
            ns3.getCurrentHp() !== ns3.getMaxHp() ||
            ns5.getCurrentHp() !== ns5.getMaxHp() ||
            ns6.getCurrentHp() !== ns6.getMaxHp()
        ) {
            console.log("~ ns4.getCurrentHp() === ns4.getMaxHp()", ns4.getCurrentHp() === ns4.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns3.getCurrentHp() === ns3.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns5.getCurrentHp() === ns5.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns6.getCurrentHp() === ns6.getMaxHp())
            throw `Exception: => Creatura nie która powinna otrzymac obrazeni ale otrzymala je`;
        }


    }
    PiromaniakShouldDealDamageforTwoTiles() {
        let factory = new ForgeFactory();

        let attakcerArray = [];
        let defenderArray = [];

        let attacker = factory.create(true, 3)
        attakcerArray.push(attacker)

        let s1 = factory.createdDefCreature();
        let s2 = factory.createdDefCreature();
        let ns3 = factory.createdDefCreature();
        let ns4 = factory.createdDefCreature();
        let ns5 = factory.createdDefCreature();
        let ns6 = factory.createdDefCreature();

        defenderArray.push(s1, s2, ns3, ns4, ns5, ns6)

        let board = new Board();
        board.add(new Point(17, 0), ns3)
        board.add(new Point(17, 1), ns4)
        board.add(new Point(18, 0), s1)
        board.add(new Point(19, 0), s2)
        board.add(new Point(18, 1), ns5)
        board.add(new Point(19, 1), ns6)

        let gameEngine = new GameEngine(attakcerArray, defenderArray, board);
        gameEngine.unitTestAttack(new Point(18, 0), attacker);

        if (
            s1.getCurrentHp() === s1.getMaxHp() ||
            s2.getCurrentHp() === s2.getMaxHp()
        ) {
            console.log("~ s1.getCurrentHp() === s1.getMaxHp()", s1.getCurrentHp() === s1.getMaxHp())
            console.log("~ s2.getCurrentHp() === s2.getMaxHp()", s2.getCurrentHp() === s2.getMaxHp())
            throw `Exception: => Creatura która powinna otrzymac obrazenia nie otrzymala ich`;
        }
        if (
            ns4.getCurrentHp() !== ns4.getMaxHp() ||
            ns3.getCurrentHp() !== ns3.getMaxHp() ||
            ns5.getCurrentHp() !== ns5.getMaxHp() ||
            ns6.getCurrentHp() !== ns6.getMaxHp()
        ) {
            console.log("~ ns4.getCurrentHp() === ns4.getMaxHp()", ns4.getCurrentHp() === ns4.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns3.getCurrentHp() === ns3.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns5.getCurrentHp() === ns5.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns6.getCurrentHp() === ns6.getMaxHp())
            throw `Exception: => Creatura nie która powinna otrzymac obrazeni ale otrzymala je`;
        }


    }
    WysysaczDuszShouldDealSplashDamage() {
        let factory = new ForgeFactory();

        let attakcerArray = [];
        let defenderArray = [];

        let attacker = factory.create(true, 4)
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
        gameEngine.unitTestAttack(new Point(18, 1), attacker);

        if (
            s2.getCurrentHp() === s2.getMaxHp() ||
            s4.getCurrentHp() === s4.getMaxHp() ||
            s5.getCurrentHp() === s5.getMaxHp() ||
            s6.getCurrentHp() === s6.getMaxHp() ||
            s8.getCurrentHp() === s8.getMaxHp()
        ) {
            console.log("~ s2.getCurrentHp() === s2.getMaxHp()", s2.getCurrentHp() === s2.getMaxHp())
            console.log("~ s4.getCurrentHp() === s4.getMaxHp()", s4.getCurrentHp() === s4.getMaxHp())
            console.log("~ s5.getCurrentHp() === s5.getMaxHp()", s5.getCurrentHp() === s5.getMaxHp())
            console.log("~ s6.getCurrentHp() === s6.getMaxHp()", s6.getCurrentHp() === s6.getMaxHp())
            console.log("~ s8.getCurrentHp() === s8.getMaxHp()", s8.getCurrentHp() === s8.getMaxHp())

            throw `Exception: => Creatura która powinna otrzymac obrazenia nie otrzymala ich`;
        }
        if (
            ns1.getCurrentHp() !== ns1.getMaxHp() ||
            ns3.getCurrentHp() !== ns3.getMaxHp() ||
            ns9.getCurrentHp() !== ns9.getMaxHp() ||
            ns7.getCurrentHp() !== ns7.getMaxHp()
        ) {

            console.log("~ ns1.getCurrentHp() === ns1.getMaxHp()", ns1.getCurrentHp() === ns1.getMaxHp())
            console.log("~ ns3.getCurrentHp() === ns3.getMaxHp()", ns3.getCurrentHp() === ns3.getMaxHp())
            console.log("~ ns7.getCurrentHp() === ns7.getMaxHp()", ns7.getCurrentHp() === ns7.getMaxHp())
            console.log("~ ns9.getCurrentHp() === ns9.getMaxHp()", ns9.getCurrentHp() === ns9.getMaxHp())
            throw `Exception: => Creatura nie która powinna otrzymac obrazeni ale otrzymala je`;
        }
    }
    JugernautShouldHeal30HpOnTournEnd() {
        let factory = new ForgeFactory();

        let attakcerArray = [];
        let defenderArray = [];

        let attacker = factory.create(false, 7)
        attakcerArray.push(attacker)

        let defender = factory.createdDefCreature()
        defenderArray.push(defender)

        let gameEngine = new GameEngine(attakcerArray, defenderArray);
        gameEngine.unitTestAttack(gameEngine.board.getPointByCreature(attacker), defender)

        let attacerHpAfterAttack = attacker.getCurrentHp();

        gameEngine.pass();
        gameEngine.pass();
        gameEngine.pass();
        gameEngine.pass();

        if (attacker.getCurrentHp() === attacerHpAfterAttack) {
            console.log("~ attacker.getCurrentHp()", attacker.getCurrentHp())
            console.log("~ attacerHpAfterAttack", attacerHpAfterAttack)
            throw `Exception: => Jugernaut nie uleczył sie 30Hp pod koniec tury`;
        }
    }
    NiszczycielShouldHeal30HpOnTournEnd() {
        let factory = new ForgeFactory();

        let attakcerArray = [];
        let defenderArray = [];

        let attacker = factory.create(true, 7)
        attakcerArray.push(attacker)

        let defender = factory.createdDefCreature()
        defenderArray.push(defender)

        let gameEngine = new GameEngine(attakcerArray, defenderArray);
        gameEngine.unitTestAttack(gameEngine.board.getPointByCreature(attacker), defender)

        let attacerHpAfterAttack = attacker.getCurrentHp();

        gameEngine.pass();
        gameEngine.pass();
        gameEngine.pass();
        gameEngine.pass();

        if (attacker.getCurrentHp() === attacerHpAfterAttack) {
            console.log("~ attacker.getCurrentHp()", attacker.getCurrentHp())
            console.log("~ attacerHpAfterAttack", attacerHpAfterAttack)
            throw `Exception: => Niszczyciel nie uleczył sie 30Hp pod koniec tury`;
        }
    }
}