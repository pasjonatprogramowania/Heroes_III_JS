import Board from '../board.js'
import Point from '../point.js'
import Creature from '../creture.js'

export default class BoardMovingTest {
    cretureShouldMoveCorrectly() {
        let board = new Board();
        let creature = new Creature();

        let unitTestPoint = new Point(0, 0)
        board.add(unitTestPoint, creature);

        let newUnitTestPoint = new Point(1, 1)
        board.move(unitTestPoint, newUnitTestPoint)

        if (board.getVal(unitTestPoint)) {
            throw 'Exception: => Creature nie zostala poprawnie usunieta, na jej starym miejscu jest slad po niej'
        }
        if (board.getVal(newUnitTestPoint) !== creature) {
            throw 'Exception: => Creature nie zostala poprawnie usunieta, w jej nowym miejscu nie ma tej samej creatury'

        }
    }
    creatureShoulCannotMoveToNotEmptyField() {
        let board = new Board();
        let creature = new Creature();

        let unitTestPoint = new Point(0, 0)
        board.add(unitTestPoint, creature);

        // let unitTestPoint2 = new Point(1, 1)
        // board.add(unitTestPoint2, creature);

        let newUnitTestPoint = new Point(1, 1)
        board.move(unitTestPoint, newUnitTestPoint)

        if (board.getVal(unitTestPoint)) {
            throw 'Exception: => Creature nie zostala poprawnie usunieta, na jej starym miejscu jest slad po niej'
        }
        if (board.getVal(newUnitTestPoint) !== creature) {
            throw 'Exception: => Creature nie zostala poprawnie usunieta, w jej nowym miejscu nie ma tej samej creatury'
        }
    }
}