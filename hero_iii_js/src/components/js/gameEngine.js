import Board from './board';
import CreatureTurnQueue from './creatureTurnQueue';

export default class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures) {
        this.board = new Board();
        this.queue = new CreatureTurnQueue()
        this.twoSidesCreture = [];
        this.twoSidesCreture.push(_myCreatures)
        this.twoSidesCreture.push(_EnnemyCreatures)
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures)
    }
    putCreatureToBoard(_myCreatures, _EnnemyCreatures) {
        _myCreatures.putCreaturesFromeOneSideToBoard(0)
        _EnnemyCreatures.putCreaturesFromeOneSideToBoard(board.boardX - 1)
    }
    putCreaturesFromeOneSideToBoard(leftOrRightSite) {
        this.forEach(((item, index) => {
            this.board.add(new Point(leftOrRightSite, index * 2), item)
        }))
    }
}