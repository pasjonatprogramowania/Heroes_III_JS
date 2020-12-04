import Board from './board.js';
import CreatureTurnQueue from './creatureTurnQueue.js';
import Point from './point';

export default class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures) {
        this.board = new Board();
        this.queue = new CreatureTurnQueue()
        this.creaturesOnBoard = [];
        this.creatureObserver = [];
        this.i = 0;
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures)
    }
    putCreatureToBoard(_myCreatures, _EnnemyCreatures) {
        this.putCreaturesFromeOneSideToBoard(_myCreatures, false)
        this.putCreaturesFromeOneSideToBoard(_EnnemyCreatures, true)

        this.queue.initQueue(this.board.map)
    }
    putCreaturesFromeOneSideToBoard(_creatures, _site) {
        _creatures.forEach(((item, index) => {
            let newPoint = new Point(1, index)
            this.board.add(newPoint, item)
            this.creaturesOnBoard.push({
                id: this.i,
                creature: item,
                oldCreature: item,
                player: _site ? 'ennemy' : 'player',
                x: _site ? 20 : 1,
                y: index + 1,
            });
            this.i++;
        }))
    }
    canMove(_x, _y) {
        return this.board.canMove(this.queue.getActiveCreature(), _x, _y)
    }
    move(_targetPoint) {
        this.board.moveByCreature(this.queue.getActiveCreature(), _targetPoint)
    }
    pass() {
        // let oldActiveCreature = this.queue.getActiveCreature()
        this.queue.next(this.board.map);
        // let newActiveCreture = this.queue.getActiveCreature()
    }
    attack(_point) {
        this.queue.getActiveCreature().attack(this.board.getVal(_point))
    }
}