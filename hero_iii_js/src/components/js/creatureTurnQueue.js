export default class CreatureTurnQueue {
    constructor() {
        this.creatureMap = new Map();
        this.creatureArray = [];
        this.observersArray = [];
    }
    initQueue(list = {}) {
        this.creatureMap = list;
        list.forEach(val => this.creatureArray.push(val));
    }
    getActiveCreature() {
        let creatureListArray = [];
        this.creatureMap.forEach((val, key) => creatureListArray[key] = val);

        let [first] = creatureListArray.filter(el => el);
        return first;
    }
    next(list = {}) {
        this.creatureMap.delete(this.creatureMap.keys().next().value);
        if (this.creatureMap.size == 0) {
            this.notifyObserver();
            this.initQueue(list);
            return true;
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
