import Board from './board.js';
import CreatureTurnQueue from './creatureTurnQueue.js';
// import Creature from './creature.js';

export default class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures) {
        this.board = new Board();
        this.queue = new CreatureTurnQueue()
        this.twoSidesCretures = [];
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures)
    }
    putCreatureToBoard(_myCreatures, _EnnemyCreatures) {
        _myCreatures.forEach(item => this.twoSidesCretures.push(item))
        _EnnemyCreatures.forEach(item => this.twoSidesCretures.push(item))

        this.putCreaturesFromeOneSideToBoard(_myCreatures, 'left')
        this.putCreaturesFromeOneSideToBoard(_EnnemyCreatures, 'right')
    }
    putCreaturesFromeOneSideToBoard(_creatures, _site) {
        _creatures.forEach(((item, index) => {
            this.board.add((_site === 'right' ? index + 285 : index), item)
        }))
        console.log('this.board', this.board)
    }
    move(_targetPoint) {
        this.board.moveByCreature(this.queue.getActiveCreature, _targetPoint)
    }
    pass() {
        this.queue.next();
    }
    attack(_point) {
        this.queue.getActiveCreature().attack(this.board.getVal(_point))
    }
}