import Board from './board';
import CreatureTurnQueue from './creatureTurnQueue';

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

        putCreaturesFromeOneSideToBoard(_myCreatures, 0)
        putCreaturesFromeOneSideToBoard(_EnnemyCreatures, board.boardX - 1)
    }
    putCreaturesFromeOneSideToBoard(_creatures, _site) {
        _creatures.forEach(((item, index) => {
            this.board.add(new Point(_site, index * 2), item)
        }))
    }
    // interactions
    move(_targetPoint) {
        this.board.movebyCreature(this.queue.getActiveCreature, _targetPoint)
    }
    pass() {
        this.queue.next();
    }
    attack(x, y) {
        this.queue.getActiveCreature().attack(board.get(x, y))
    }
}