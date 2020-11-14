import Creature from "../creature.js";
import CreatureTurnQueue from "../creatureTurnQueue.js";

export default class CreatureTurnQueueTest {
    queueShoulChangeActiveCreature() {
        let creatureTurnQueue = new CreatureTurnQueue();

        let creture1 = new Creature("aaaa", 1, 1, 1, 1);
        let creture2 = new Creature("bbbb", 1, 1, 1, 1);
        let creture3 = new Creature("cccc", 1, 1, 1, 1);

        let creatureMap = new Map();
        creatureMap.set(0, creture1);
        creatureMap.set(1, creture2);
        creatureMap.set(2, creture3);

        creatureTurnQueue.initQueue(creatureMap);

        creatureMap.forEach(item => {
            if (item !== creatureTurnQueue.getActiveCreature()) {
                throw `Exception: => Kolejka nie dziala poprawnie`;
            }
            if (creatureTurnQueue.next()) {
                creatureTurnQueue.initQueue(creatureMap);
            }
        });
    }
}
