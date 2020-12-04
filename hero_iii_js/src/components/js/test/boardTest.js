import Board from "../board.js";
import Creature from "../creature.js";
import Point from './../point.js';

export default class boardTest {
    mapShouldHaveKeyAndValue() {
        let board = new Board();
        let creature = new Creature();

        let unitTestPoint = new Point(0, 0);
        board.add(unitTestPoint, creature);

        if (board.getVal(unitTestPoint) === undefined) {
            throw "Exception: => Creature dla tego pola zwraca undefined";
        }
    }
    shouldReturnCorrectLocationForCreatureByCreature() {
        let board = new Board()
        let creature = new Creature();

        let unitTestPoint = new Point(0, 0);
        board.add(unitTestPoint, creature);

        if (board.getPoint(creature) !== unitTestPoint) {
            throw "Exception: => getPoint nie poprawnie zwraca Creature";
        }

    }
    cretureShouldMoveCorrectly() {
        let board = new Board();
        let creature = new Creature();

        let unitTestPoint = new Point(0, 0);
        board.add(unitTestPoint, creature);

        let newUnitTestPoint = new Point(1, 1);
        board.move(unitTestPoint, newUnitTestPoint);

        if (board.getVal(unitTestPoint)) {
            throw "Exception: => Creature nie zostala poprawnie usunieta, na jej starym miejscu jest slad po niej";
        }
        if (board.getVal(newUnitTestPoint) !== creature) {
            throw "Exception: => Creature nie zostala poprawnie usunieta, w jej nowym miejscu nie ma tej samej creatury";
        }
    }
    canMoveWhenCreatureHasEnoughtMovingPoint() {
        let board = new Board();
        let creature1 = new Creature('Satan', 1, 1, 1, 1);
        let unitTestPoint = new Point(5, 5)

        board.add(unitTestPoint, creature1)

        let result1 = board.canMove(creature1, 6, 5)
        let result2 = board.canMove(creature1, 4, 5)
        let result3 = board.canMove(creature1, 5, 4)
        let result4 = board.canMove(creature1, 5, 6)

        if (!result1) {
            throw "Exception: => Creature mozee ruszych sie na to pole, a nie rusza sie (6,5)";
        }
        if (!result2) {
            throw "Exception: => Creature mozee ruszych sie na to pole, a nie rusza sie (4,5)";
        }
        if (!result3) {
            throw "Exception: => Creature mozee ruszych sie na to pole, a nie rusza sie (5,4)";
        }
        if (!result4) {
            throw "Exception: => Creature mozee ruszych sie na to pole, a nie rusza sie (5,6)";
        }
    }
    canMoveWhenCreatureHasNotEnoughtMovingPoint() {
        let board = new Board();
        let creature1 = new Creature('Satan', 1, 1, 1, 1);
        let unitTestPoint = new Point(5, 5)

        board.add(unitTestPoint, creature1)

        let result1 = board.canMove(creature1, 9, 9)
        let result2 = board.canMove(creature1, 7, 6)

        if (result1) {
            throw "Exception: => Creature nie mozee ruszych sie na to pole, a rusza sie (9,9)";
        }
        if (result2) {
            throw "Exception: => Creature nie mozee ruszych sie na to pole, a rusza sie (7,6)";
        }

    }
}
