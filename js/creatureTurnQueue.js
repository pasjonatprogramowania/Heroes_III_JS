import Board from './board.js'
import Point from './point.js'
import Creature from './creture.js'
import CreatureTurnQueueTest from './test/creatureTurnQueueTest.js'

export default class CreatureTurnQueue {
    constructor() {
        this.creatureList = [];
        this.copyCreatureList = [];
    }
    initQueue(list) {
        console.log('inicjalizacja')
        this.creatureList = list;
    }
    getActiveCreature() {
        return this.creatureList.shift();
    }
    next() {
        console.log('this.creatureList.length', this.creatureList.length)
        if (this.creatureList.length == 0) {
            return true;
        }
    }
}