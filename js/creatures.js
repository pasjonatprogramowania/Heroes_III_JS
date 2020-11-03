class Board {
    constructor() {
        this.map = new Map();
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
}

class Point {
    constructor(aX, aY) {
        this.x = aX;
        this.y = aY;
    }
}

class Creature {

}

function mapShouldHaveKeyAndValue() {
    let board = new Board();
    let creature = new Creature();
    // let creature2 = new Creature();

    let newPoint = new Point(0, 0)
    board.add(newPoint, creature);
    // board.add(newPoint, creature2);

    let cretureFromBoard = board.getVal(newPoint);
    return {
        cretureFromBoard: (cretureFromBoard || 1), //Wysylanie undefined do test.js nie dziala wiec jesli jest undefined to zamiast undefined daj 1
        creature: creature,
    }
}
console.log('mapShouldHaveKeyAndValue', mapShouldHaveKeyAndValue())

module.exports = mapShouldHaveKeyAndValue()