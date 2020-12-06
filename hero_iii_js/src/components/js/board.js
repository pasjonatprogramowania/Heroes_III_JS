import Point from './point.js';
export default class Board {
    constructor() {
        this.map = new Map();
        this.boardX = 20;
        this.boardY = 15;
    }
    add(_point, _creature) {
        this.isThatPointOnMap(_point.x, _point.y)
        this.isThisTileTaken(_point)

        this.map.set(_point, _creature);
        if (this.equals(this.map.get(_point), _creature.stats)) {
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
        this.isThatPointOnMap(_newPoint.x, _newPoint.y)
        this.isThisTileTaken(_newPoint)

        let creature = this.map.get(_point);
        this.map.delete(_point);
        this.map.set(_newPoint, creature);
    }
    canMove(_creature, _x, _y) {
        this.isThatPointOnMap(_x, _y)

        let pointToMoveCreature = new Point(_x, _y);
        let currentCreaturePoint = this.getPoint(_creature)

        let distanse = currentCreaturePoint.distanse(pointToMoveCreature)

        return distanse <= _creature.getMoveRange() && !this.isThisTileTaken(pointToMoveCreature);
    }
    isThatPointOnMap(_x, _y) {
        if (_x > this.boardX || _y > this.boardY) {
            throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
        }
    }
    isThisTileTaken(_point) {
        for (const [key] of this.map.entries()) {
            if (this.equals(key, _point)) {
                // throw "Exception: => To pole jest zajete, nie mozesz tam ruszyc jednostki";
                return true;
            }
        }
        return false
    }
    equals(val, toAssert) {
        if (JSON.stringify(val) === JSON.stringify(toAssert)) {
            return true;
        } else {
            return false;
        }
    }
}