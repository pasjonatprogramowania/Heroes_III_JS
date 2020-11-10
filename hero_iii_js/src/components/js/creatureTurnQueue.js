export default class CreatureTurnQueue {
    constructor() {
        this.creatureList = new Map();
        this.counterToRemove;
    }
    initQueue(list) {
        this.creatureList = list;
        this.counterToRemove = 0;
    }
    getActiveCreature() {
        let creatureListArray = [];
        this.creatureList.forEach((val, key) => (creatureListArray[key] = val));
        this.creatureList.delete(this.counterToRemove);
        this.counterToRemove++;
        let [first] = creatureListArray.filter(el => el);
        return first;
    }
    next() {
        if (this.creatureList.size == 0) {
            return true;
        }
    }
    pass() {
        return;
    }
}
