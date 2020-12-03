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
    // canMoveWhenCreatureHasEnoughtMovingPoint() {
    //     let board = new Board();
    //     let creature = new Creature();

    //     let unitTestPoint = [0, 0]
    //     let creature1 = new creature('Satan', 1, 1, 1, 1)
    //     board.add(unitTestPoint, creature1)


    //     let result = board.canMove(creature1, 0)
    //     if (!result) {
    //         throw "Exception: => Creature nie mozee ruszych sie na to pole, a rusza sie";
    //     }
    // }
}
