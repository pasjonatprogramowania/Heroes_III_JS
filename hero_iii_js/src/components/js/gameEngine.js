import Board from './board.js';
import CreatureTurnQueue from './creatureTurnQueue.js';
import Point from './point';
// import Observer from './observer.js'

export default class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures) {
        this.board = new Board();
        this.queue = new CreatureTurnQueue()
        // this.observer = new Observer();
        this.creaturesOnBoard = [];
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
            let newPoint = new Point(_site ? 20 : 1, index + 1)
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
        return this.board.canMove(this.queue.getActiveCreature(), _x, _y);
    }
    // addToObservation(_id) {
    //     this.observer.subscribe(this.creaturesOnBoard[_id])
    // }
    // removeObservator(_id) {
    //     this.observer.unsubscribe(this.creaturesOnBoard[_id])
    // }
    // notifyObserver(_id, _creatures, _oldCreature, _player, _x, _y) {
    //     this.observer.notify()
    // }
    canAttack(_attacker, _defender) {
        return this.board.canAttack(_attacker, _defender)
    }
    move(_targetPoint) {
        this.board.moveByCreature(this.queue.getActiveCreature(), _targetPoint)
        this.creaturesOnBoard.forEach(item => {
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
    attack(_point) {
        this.queue.getActiveCreature().attack(this.board.getVal(_point))
    }
}