import Board from '../board.js'
import Point from '../point.js'
import Creature from '../creture.js'
import CreatureTurnQueue from '../creatureTurnQueue.js'

export default class CreatureTurnQueueTest {
    queueShoulChangeActiveCreature() {
        let creatureTurnQueue = new CreatureTurnQueue();

        let creture1 = new Creature();
        let creture2 = new Creature();
        let creture3 = new Creature();

        let creatureList = [];
        let copyCreatureList = [];

        creatureList.push(creture1)
        creatureList.push(creture2)
        creatureList.push(creture3)

        creatureTurnQueue.initQueue(creatureList)

        if (creture1 !== creatureTurnQueue.getActiveCreature()) {
            throw `Exception: => Kolejka nie dziala poprawnie`
        }
        if (creatureTurnQueue.next()) {
            creatureTurnQueue.initQueue(creatureList)
        }

        if (creture2 !== creatureTurnQueue.getActiveCreature()) {
            throw `Exception: => Kolejka nie dziala poprawnie`
        }
        if (creatureTurnQueue.next()) {
            creatureTurnQueue.initQueue(creatureList)
        }

        if (creture3 !== creatureTurnQueue.getActiveCreature()) {
            throw `Exception: => Kolejka nie dziala poprawnie`
        }
        if (creatureTurnQueue.next()) {
            creatureTurnQueue.initQueue(creatureList)
        }

    }
}