import CreatureTurnQueue from './creatureTurnQueue';
export default class Board {
    constructor() {
        this.map = new Map();
        this.boardSize = 300;
        this.boardX = 20;
        this.boardY = 15;
        this.creatureTurnQueue = new CreatureTurnQueue();
    }
    add(_point, _creature) {
        if (this.map.has(_point)) {
            throw "Exception: => To pole jest zajete, nie mozesz tam dodac jednostki";
        }
        if (_point.x > this.boardX || _point.y > this.boardY) {
            throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
        }
        this.map.set(_point, _creature);
        if (JSON.stringify(this.map.get(_point)) === JSON.stringify(_creature.stats)) {
            throw "Exception: => Klucz nie jest równy tej wartosci która powinna byc wpisana";
        }
    }
    getVal(_point) {
        return this.map.get(_point);
    }
    getPoint(_creature) {
        for (const [key, val] of this.map.entries()) {
            if (val === _creature) {
                return key;
            }
        }
    }
    moveByCreature(_creature, _newPoint) {
        this.move(this.getPoint(_creature), _newPoint);
    }
    move(_point, _newPoint) {
        if (_newPoint.x > this.boardX || _newPoint.y > this.boardY) {
            throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
        }
        if (JSON.stringify(this.map.keys().next().value) === JSON.stringify(_newPoint)) {
            throw "Exception: => To pole jest zajete, nie mozesz tam ruszyc jednostki";
        }

        let creature = this.map.get(_point);
        this.map.delete(_point);
        this.map.set(_newPoint, creature);
    }
    // canMove(_creature, _point) {

    // }
}
