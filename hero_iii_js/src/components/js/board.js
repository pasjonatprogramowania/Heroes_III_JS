"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = __importDefault(require("./point"));
class Board {
    constructor() {
        this.map = new Map();
        this.boardX = 20;
        this.boardY = 15;
    }
    add(_point, _creature) {
        this.isThatPointOnMap(_point.getX(), _point.getY());
        this.isThisTileTaken(_point);
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
            if (this.equals(val, _creature)) {
                return key;
            }
        }
    }
    moveByCreature(_creature, _newPoint) {
        this.move(this.getPoint(_creature), _newPoint);
    }
    move(_point, _newPoint) {
        this.isThatPointOnMap(_newPoint.getX(), _newPoint.getY());
        this.isThisTileTaken(_newPoint);
        let creature = this.map.get(_point);
        this.map.delete(_point);
        this.map.set(_newPoint, creature);
    }
    pass(_creature) {
        for (const [key, val] of this.map.entries()) {
            if (val === _creature) {
                this.map.delete(key);
                this.map.set(key, _creature);
                break;
            }
        }
    }
    canMove(_creature, _x, _y) {
        this.isThatPointOnMap(_x, _y);
        let pointToMoveCreature = new point_1.default(_x, _y);
        let currentCreaturePoint = this.getPoint(_creature);
        let distanse = currentCreaturePoint.distanse(pointToMoveCreature);
        return distanse <= _creature.getMoveRange() && !this.isThisTileTaken(pointToMoveCreature);
    }
    canAttack(_attacker, _defender) {
        this.isThatPointOnMap(this.getPoint(_defender).getX(), this.getPoint(_defender).getY());
        let attackerPoint = this.getPoint(_attacker);
        let defenderPoint = this.getPoint(_defender);
        let distanse = attackerPoint.distanse(defenderPoint);
        return Math.floor(distanse) <= 1;
    }
    reduseMovment(_creature, _x, _y) {
        this.isThatPointOnMap(_x, _y);
        let pointToMoveCreature = new point_1.default(_x, _y);
        let currentCreaturePoint = this.getPoint(_creature);
        let distanse = currentCreaturePoint.distanse(pointToMoveCreature);
        _creature.stats.moveRange -= distanse;
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
        return false;
    }
    equals(val, toAssert) {
        if (JSON.stringify(val) === JSON.stringify(toAssert)) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Board;
