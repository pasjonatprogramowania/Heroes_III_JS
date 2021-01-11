"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("./board"));
const creatureTurnQueue_1 = __importDefault(require("./creatureTurnQueue"));
const point_1 = __importDefault(require("./point"));
class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures) {
        this.board = new board_1.default();
        this.queue = new creatureTurnQueue_1.default();
        this.creaturesOnBoard = [];
        this.i = 0;
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures);
    }
    putCreatureToBoard(_myCreatures, _EnnemyCreatures) {
        this.putCreaturesFromeOneSideToBoard(_myCreatures, false);
        this.putCreaturesFromeOneSideToBoard(_EnnemyCreatures, true);
        this.queue.initQueue(this.board.map);
    }
    putCreaturesFromeOneSideToBoard(_creatures, _site) {
        _creatures.forEach(((item, index) => {
            let newPoint = new point_1.default(_site ? 20 : 1, index + 1);
            this.board.add(newPoint, item);
            this.creaturesOnBoard.push({
                id: this.i,
                creature: item,
                player: _site ? 'ennemy' : 'player',
                x: _site ? 20 : 1,
                y: index + 1,
            });
            this.i++;
        }));
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
                item.x = _targetPoint.x;
                item.y = _targetPoint.y;
            }
        });
    }
    pass() {
        this.queue.next(this.board.map);
        this.board.pass(this.queue.getActiveCreature());
    }
    attack(_point) {
        this.queue.getActiveCreature().attack(this.board.getVal(_point));
    }
}
exports.default = GameEngine;
