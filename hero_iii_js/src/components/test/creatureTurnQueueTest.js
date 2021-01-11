import Creature from "../js/creature.js";
import CreatureTurnQueue from "../js/creatureTurnQueue.js";
import Point from '../js/point.js';

export default class CreatureTurnQueueTest {
    queueShoulChangeActiveCreature() {
        let creatureTurnQueue = new CreatureTurnQueue();

        let creture1 = new Creature("aaaa", 1, 1, 1, 1);
        let creture2 = new Creature("bbbb", 1, 1, 1, 1);
        let creture3 = new Creature("cccc", 1, 1, 1, 1);

        let point1 = new Point(1, 0)
        let point2 = new Point(2, 0)
        let point3 = new Point(3, 0)

        let creatureMap = new Map();
        creatureMap.set(point1, creture1);
        creatureMap.set(point2, creture2);
        creatureMap.set(point3, creture3);

        creatureTurnQueue.initQueue(creatureMap);

        creatureMap.forEach(item => {
            if (JSON.stringify(item) !== JSON.stringify(creatureTurnQueue.getActiveCreature())) {
                throw `Exception: => Kolejka nie dziala poprawnie zwracana aktywna creatura jest inna`;
            }
            creatureTurnQueue.next(creatureMap)
        });
    }
}
