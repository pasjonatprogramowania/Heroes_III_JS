class Board {
    constructor() {
        this.map = new Map();
    }
    returnMap() {
        return this.map;
    }
    add(point, creature) {
        if (this.map.has(point)) {
            throw 'Exception: => To pole jest zajete'
        }
        this.map.set(point, creature)
    }
    getVal(point) {
        return this.map.get(point)
    }
    move(point, newPoint) {
        let creature = this.map.get(point);
        this.map.delete(point);
        this.map.set(newPoint, creature)
        console.log('this.map', this.map)
    }
}

class Point {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
    }
}

class Creature {

}

class BoardMovingTest {

}

function mapShouldHaveKeyAndValue() {
    let board = new Board();
    let creature = new Creature();

    let unitTestPoint = new Point(0, 0)
    board.add(unitTestPoint, creature);

    // let unitTestPoint2 = new Point(1, 0)
    // board.add(unitTestPoint2, creature);

    // let creature2 = new Creature();
    // board.add(newPoint, creature2);

    let newUnitTestPoint = new Point(1, 1)
    board.move(unitTestPoint, newUnitTestPoint)


    let cretureFromBoard = board.getVal((newUnitTestPoint || unitTestPoint));
    console.log('cretureFromBoard', cretureFromBoard)
    return {
        //Wysylanie undefined do test.js nie dziala wiec jesli jest undefined to zamiast undefined daj 1
        cretureFromBoard: (cretureFromBoard || 1),
        creature: creature,
        map: board.returnMap()
    }
}
console.log('mapShouldHaveKeyAndValue', mapShouldHaveKeyAndValue())

module.exports = mapShouldHaveKeyAndValue()