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

        putCreaturesFromeOneSideToBoard(0, _myCreatures)
        putCreaturesFromeOneSideToBoard(board.boardX - 1, _EnnemyCreatures)
    }
    move(_targetPoint) {
        this.board.movebyCreature(this.queue.getActiveCreature, _targetPoint)
    }
    putCreaturesFromeOneSideToBoard(_leftOrRightSite, _creatures) {
        _creatures.forEach(((item, index) => {
            this.board.add(new Point(_leftOrRightSite, index * 2), item)
        }))
    }
}