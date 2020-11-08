import BoardMovingTest from './test/boardMovingTest.js'
import BoardTest from './test/boardTest.js'
import CreatureTurnQueueTest from './test/creatureTurnQueueTest.js'
import CreatureTurnQueue from './creatureTurnQueue.js'
import AttackTest from './test/attackTest.js';

export default class Board {
    constructor() {
        this.map = new Map();
        this.boardX = 20
        this.boardY = 15
    }
    add(point, creature) {
        let mapToString = ``;
        this.map.forEach((val, key) => {
            mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
        })

        if (this.map.has(point)) {
            throw 'Exception: => To pole jest zajete, nie mozesz tam dodac jednostki'
        }
        if (point.x > this.boardX || point.y > this.boardY) {
            throw 'Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa'
        }

        this.map.set(point, creature)

        if (mapToString.includes(JSON.stringify(point))) {
            throw 'Exception: => Klucz nie jest równy tej wartosci która powinna byc wpisana'
        }

    }
    getVal(point) {
        return this.map.get(point)
    }
    move(point, newPoint) {
        let mapToString = ``;
        this.map.forEach((val, key) => {
            mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
        })

        if (newPoint.x > this.boardX || newPoint.y > this.boardY) {
            throw 'Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa'
        }
        if (mapToString.includes(JSON.stringify(newPoint))) {
            throw 'Exception: => To pole jest zajete, nie mozesz tam ruszyc jednostki'
        }

        let creature = this.map.get(point);
        this.map.delete(point);
        this.map.set(newPoint, creature)
    }
}



let boardMovingTest = new BoardMovingTest();
let boardTest = new BoardTest();
let creatureTurnQueueTest = new CreatureTurnQueueTest()
let attackTest = new AttackTest();

attackTest.creatureShouldLost10HpWhenAttackerHas20AttackAndDefenderHas10Armor();
attackTest.creatureShouldNotSelfHealWhenAttackerHasLowerAttackThenDefenderArmor();
creatureTurnQueueTest.queueShoulChangeActiveCreature()
boardTest.mapShouldHaveKeyAndValue()
boardMovingTest.cretureShouldMoveCorrectly()

// module.exports = new Board();

// **Testy jednostkowe**
// Ruszenie 
// -> Czy pole na które chce sie ruszyc jest zajete ?
// -> Czy ruszenie sie na wybrane pole przebieglo pomyslnie ?
// -> Czy po ruszeniu sie na wybrane pole zostalem usuniety z poprzedniego pola ?
// Tworzenie 
// -> Czy postacie dodaja sie na odpowiednie pola ?


