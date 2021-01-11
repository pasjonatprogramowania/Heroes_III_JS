import Board from './board';
import CreatureTurnQueue from './creatureTurnQueue';
import Point from './point';
import Creature from './creature'

export default class GameEngine {
    board:Board;
    queue:CreatureTurnQueue;
    creaturesOnBoard:any;
    i:number;

    constructor(_myCreatures:Creature, _EnnemyCreatures:Creature) {
        this.board = new Board();
        this.queue = new CreatureTurnQueue()
        this.creaturesOnBoard = [];
        this.i = 0;
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures)
    }
    putCreatureToBoard(_myCreatures:Creature, _EnnemyCreatures:Creature) {
        this.putCreaturesFromeOneSideToBoard(_myCreatures, false)
        this.putCreaturesFromeOneSideToBoard(_EnnemyCreatures, true)

        this.queue.initQueue(this.board.map)
    }
    putCreaturesFromeOneSideToBoard(_creatures:any, _site:boolean) {
        _creatures.forEach(((item:any, index:number) => {
            let newPoint = new Point(_site ? 20 : 1, index + 1)
            this.board.add(newPoint, item)
            this.creaturesOnBoard.push({
                id: this.i,
                creature: item,
                player: _site ? 'ennemy' : 'player',
                x: _site ? 20 : 1,
                y: index + 1,
            });
            this.i++;
        }))
    }
    canMove(_x:number, _y:number) {
        return this.board.canMove(this.queue.getActiveCreature(), _x, _y);
    }
    canAttack(_attacker:Creature, _defender:Creature) {
        return this.board.canAttack(_attacker, _defender)
    }
    move(_targetPoint:Point) {
        this.board.moveByCreature(this.queue.getActiveCreature(), _targetPoint)
        this.creaturesOnBoard.forEach((item:any) => {
            if (item.creature === this.queue.getActiveCreature()) {
                item.x = _targetPoint.x
                item.y = _targetPoint.y
            }
        })
    }
    pass() {
        this.queue.next(this.board.map);
        this.board.pass(this.queue.getActiveCreature());
    }
    attack(_point:Point) {
        this.queue.getActiveCreature().attack(this.board.getVal(_point))
    }
}