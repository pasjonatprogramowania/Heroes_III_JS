import Board from "../board.js";
import Point from "../point.js";
import Creature from "../creature.js";

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
}
