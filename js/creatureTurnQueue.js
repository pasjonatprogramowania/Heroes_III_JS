import Board from './board.js'
import Point from './point.js'
import Creature from './creture.js'
import CreatureTurnQueueTest from './test/creatureTurnQueueTest.js'

export default class CreatureTurnQueue {
    constructor() {
        this.creatureList = [];
        this.copyCreatureList = [];
    }
    initQueue(list, copyList) {
        console.log('inicjalizacja')
        this.creatureList = list;
        this.copyCreatureList = copyList;
    }
    getActiveCreature() {
        //kolejka powinna byc podawana odwrtornie bo usuwany jest ostani element
        return this.creatureList.pop();
    }
    next() {
        console.log('this.creatureList.length', this.creatureList.length)
        if (this.creatureList.length == 0) {
            return true;
        }
    }
}