import Board from "../board.js";
import Creature from "../creature.js";

export default class boardTest {
    mapShouldHaveKeyAndValue() {
        let board = new Board();
        let creature = new Creature();

        let unitTestPoint = 1;
        board.add(unitTestPoint, creature);

        if (board.getVal(unitTestPoint) === undefined) {
            throw "Exception: => Creature dla tego pola zwraca undefined";
        }
    }
    shouldReturnCorrectLocationForCreatureByCreature() {
        let board = new Board()
        let creature = new Creature();

        let unitTestPoint = 0;
        board.add(unitTestPoint, creature);

        if (board.getPoint(creature) !== unitTestPoint) {
            throw "Exception: => getPoint nie poprawnie zwraca Creature";
        }

    }
    cretureShouldMoveCorrectly() {
        let board = new Board();
        let creature = new Creature();

        let unitTestPoint = 0;
        board.add(unitTestPoint, creature);

        let newUnitTestPoint = 1;
        board.move(unitTestPoint, newUnitTestPoint);

        if (board.getVal(unitTestPoint)) {
            throw "Exception: => Creature nie zostala poprawnie usunieta, na jej starym miejscu jest slad po niej";
        }
        if (board.getVal(newUnitTestPoint) !== creature) {
            throw "Exception: => Creature nie zostala poprawnie usunieta, w jej nowym miejscu nie ma tej samej creatury";
        }
    }
}
