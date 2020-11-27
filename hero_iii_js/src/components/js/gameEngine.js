import Board from './board.js';
import CreatureTurnQueue from './creatureTurnQueue.js';
// import Creature from './creature.js';

export default class GameEngine {
    constructor(_myCreatures, _EnnemyCreatures) {
        this.board = new Board();
        this.queue = new CreatureTurnQueue()
        this.creaturesOnBoard = [];
        this.i = 0;
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures)
    }
    putCreatureToBoard(_myCreatures, _EnnemyCreatures) {
        this.putCreaturesFromeOneSideToBoard(_myCreatures, false)
        this.putCreaturesFromeOneSideToBoard(_EnnemyCreatures, true)
        
        this.queue.initQueue(this.board.map)
        this.board.map.forEach(val => this.queue.addObserver(val));
    }
    putCreaturesFromeOneSideToBoard(_creatures, _site) {
        _creatures.forEach(((item, index) => {
            this.board.add((_site ? (index + 285).toString() : index.toString()), item)
            this.creaturesOnBoard.push({
                id: this.i,
                creature: item,
                position: _site ? index + 285 : index,
                player: _site ? 'ennemy' : 'player'
            });
            this.i++;
        }))
    }
    move(_targetPoint) {
        this.board.moveByCreature(this.queue.getActiveCreature, _targetPoint)
    }
    pass() {
        this.queue.next(this.board.map);
    }
    attack(_point) {
        this.queue.getActiveCreature().attack(this.board.getVal(_point))
    }
}