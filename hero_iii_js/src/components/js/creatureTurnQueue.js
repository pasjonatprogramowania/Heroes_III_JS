export default class CreatureTurnQueue {
    constructor() {
        this.creatureMap = new Map();
        this.creatureArray = [];
        this.observersArray = [];
    }
    initQueue(list = {}) {
        this.creatureMap = new Map(list)
        this.observersArray = Array.from(list.values());
        this.creatureArray = Array.from(list.values());
    }
    getActiveCreature() {
        let [first] = this.creatureArray.filter(el => el);
        return first;
    }
    next(list = {}) {
        this.creatureArray.shift()
        this.creatureMap.delete(this.creatureMap.keys().next().value);
        if (this.creatureMap.size == 0) {
            this.notifyObserver();
            this.initQueue(list);
        }
    }
    addObserver(_observer) {
        this.observersArray.push(_observer)
    }
    removeObserver(_observer) {
        this.observersArray.pull(_observer)
    }
    notifyObserver() {
        this.observersArray.forEach(item => item.resetCounterAttack())
    }
}
