import Creature from './creature';
export default class CreatureTurnQueue {
    creatureMap:any;
    creatureArray:any;
    observersArray:any;
    constructor() {
        this.creatureMap = new Map();
        this.creatureArray = [];
        this.observersArray = [];
    }
    initQueue(list:any = {}) {
        this.creatureMap = new Map(list)
        this.observersArray = Array.from(list.values());
        this.creatureArray = Array.from(list.values());
    }
    getActiveCreature() {
        let [first] = this.creatureArray.filter((el:any) => el);
        return first;
    }
    next(list:any = {}) {
        this.creatureArray.shift()
        this.creatureMap.delete(this.creatureMap.keys().next().value);
        if (this.creatureMap.size == 0) {
            this.notifyObserver();
            this.initQueue(list);
        }
    }
    addObserver(_observer:any) {
        this.observersArray.push(_observer)
    }
    removeObserver(_observer:any) {
        this.observersArray.find(_observer)
    }
    notifyObserver() {
        this.observersArray.forEach((item:any) => item.resetCounterAttack())
    }
}
