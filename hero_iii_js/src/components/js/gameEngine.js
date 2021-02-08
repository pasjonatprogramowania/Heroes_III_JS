"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("./board"));
const creatureTurnQueue_1 = __importDefault(require("./creatureTurnQueue"));
const point_1 = __importDefault(require("./point"));
class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures, _board = undefined) {
        if (_board) {
            this.board = _board;
        }
        else {
            this.board = new board_1.default();
        }
        this.queue = new creatureTurnQueue_1.default();
        this.creaturesOnBoard = [];
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures);
    }
    putCreatureToBoard(_myCreatures, _EnnemyCreatures) {
        this.putCreaturesFromOneSideToBoard(_myCreatures, false);
        this.putCreaturesFromOneSideToBoard(_EnnemyCreatures, true);
        this.queue.initQueue(this.board.map);
    }
    putCreaturesFromOneSideToBoard(_creatures, _site) {
        _creatures.forEach((item, index) => {
            let newPointX = _site ? 20 : 1;
            let newPointY = index + 1;
            let creatureSite = _site ? 'ennemy' : 'player';
            let newPoint = new point_1.default(newPointX, newPointY);
            this.board.add(newPoint, item);
            this.creaturesOnBoard.push({
                creature: item,
                player: creatureSite,
                point: newPoint,
            });
        });
    }
    canMove(_x, _y) {
        return this.board.canMove(this.queue.getActiveCreature(), _x, _y);
    }
    canAttack(_attacker, _defender) {
        return this.board.canAttack(_attacker, _defender);
    }
    move(_targetPoint) {
        this.board.moveByCreature(this.queue.getActiveCreature(), _targetPoint);
        this.creaturesOnBoard.forEach((item) => {
            if (item.creature === this.queue.getActiveCreature()) {
                item.point.x = _targetPoint.getX();
                item.point.y = _targetPoint.getY();
            }
        });
    }
    pass() {
        this.queue.next(this.board.map);
        this.board.pass(this.queue.getActiveCreature());
    }
    attack(_point) {
        const activeCreature = this.queue.getActiveCreature();
        let splashRange = activeCreature.getSplashRange();
        for (let x = 0; x < splashRange.length; x++) {
            for (let y = 0; y < splashRange.length; y++) {
                if (splashRange[x][y] && this.board.isThisTileTaken(new point_1.default(_point.getX() - x + 1, _point.getY() - y + 1))) {
                    activeCreature.attack(this.board.getCreatureByPoint(new point_1.default(_point.getX() - x + 1, _point.getY() - y + 1)));
                }
            }
        }
    }
    unitTestAttack(_point, _attacker) {
        const activeCreature = _attacker;
        let splashRange = activeCreature.getSplashRange();
        for (let x = 0; x < splashRange.length; x++) {
            for (let y = 0; y < splashRange.length; y++) {
                if (splashRange[x][y] && this.board.isThisTileTaken(new point_1.default(_point.getX() - x + 1, _point.getY() - y + 1))) {
                    activeCreature.attack(this.board.getCreatureByPoint(new point_1.default(_point.getX() - x + 1, _point.getY() - y + 1)));
                }
            }
        }
    }
}
exports.default = GameEngine;
