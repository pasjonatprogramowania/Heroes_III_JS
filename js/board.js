import Point from './point.js'
import Creature from './creture.js'
import BoardMovingTest from './test/boardMovingTest.js'
import BoardTest from './test/boardTest.js'

export default class Board {
    constructor() {
        this.map = new Map();
    }
    returnMap() {
        return this.map;
    }
    add(point, creature) {
        if (this.map.has(point)) {
            throw 'Exception: => To pole jest zajete, nie mozesz tam dodac jednostki'
        }
        this.map.set(point, creature)
    }
    getVal(point) {
        return this.map.get(point)
    }
    move(point, newPoint) {
        let mapToString = ``;
        this.map.forEach((val, key, map) => {
            mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
        })
        if (mapToString.includes(JSON.stringify(newPoint))) {
            throw 'Exception: => To pole jest zajete, nie mozesz tam ruszyc jednostki'
        }
        let creature = this.map.get(point);
        this.map.delete(point);
        this.map.set(newPoint, creature)
    }
}


let borad = new Board();
let boardMovingTest = new BoardMovingTest();
let boardTest = new BoardTest();

boardTest.mapShouldHaveKeyAndValue()
boardMovingTest.cretureShouldMoveCorrectly()
boardMovingTest.creatureShoulCannotMoveToNotEmptyField()

// module.exports = new Board();

// **Testy jednostkowe**
// Ruszenie 
// -> Czy pole na które chce sie ruszyc jest zajete ?
// -> Czy ruszenie sie na wybrane pole przebieglo pomyslnie ?
// -> Czy po ruszeniu sie na wybrane pole zostalem usuniety z poprzedniego pola ?
// Tworzenie 
// -> Czy postacie dodaja sie na odpowiednie pola ?


