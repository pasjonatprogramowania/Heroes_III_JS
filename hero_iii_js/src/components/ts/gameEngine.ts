import Board from './board';
import CreatureTurnQueue from './creatureTurnQueue';
import Point from './point';
import Creature from './creature/creature';

export default class GameEngine {
    board: Board;
    queue: CreatureTurnQueue;
    creaturesOnBoard: any;
    constructor(_myCreatures: Creature, _EnnemyCreatures: Creature, _board: Board | undefined = undefined) {
        if (_board) {
            this.board = _board;
        } else {
            this.board = new Board();
        }
        this.queue = new CreatureTurnQueue();
        this.creaturesOnBoard = [];
        this.putCreatureToBoard(_myCreatures, _EnnemyCreatures);
    }
    putCreatureToBoard(_myCreatures: Creature, _EnnemyCreatures: Creature) {
        this.putCreaturesFromOneSideToBoard(_myCreatures, false);
        this.putCreaturesFromOneSideToBoard(_EnnemyCreatures, true);

        this.queue.initQueue(this.board.map);
    }
    putCreaturesFromOneSideToBoard(_creatures: any, _site: boolean) {
        // Zapytaj przemka jak mozna zastapic takiego pojaczka
        _creatures.forEach((item: any, index: number) => {
            let newPointX = _site ? 20 : 1;
            let newPointY = index + 1;
            let creatureSite = _site ? 'ennemy' : 'player';

            let newPoint = new Point(newPointX, newPointY);
            this.board.add(newPoint, item);
            this.creaturesOnBoard.push({
                creature: item,
                player: creatureSite,
                point: newPoint,
            });
        });
    }
    canMove(_x: number, _y: number) {
        return this.board.canMove(this.queue.getActiveCreature(), _x, _y);
    }
    canAttack(_attacker: Creature, _defender: Creature) {
        return this.board.canAttack(_attacker, _defender);
    }
    move(_targetPoint: Point) {
        this.board.moveByCreature(this.queue.getActiveCreature(), _targetPoint);
        this.creaturesOnBoard.forEach((item: any) => {
            if (item.creature === this.queue.getActiveCreature()) {
                item.point.x = _targetPoint.getX();
                item.point.y = _targetPoint.getY();
            }
        });
    }
    pass() {
        this.queue.next(this.board.map);
        this.board.pass(this.queue.getActiveCreature());
    }
    attack(_point: Point) {
        const activeCreature = this.queue.getActiveCreature();
        let splashRange = activeCreature.getSplashRange();
        for (let x = 0; x < splashRange.length; x++) {
            for (let y = 0; y < splashRange.length; y++) {
                if (splashRange[x][y] && this.board.isThisTileTaken(new Point(_point.getX() - x + 1, _point.getY() - y + 1))) {
                    activeCreature.attack(this.board.getCreatureByPoint(new Point(_point.getX() - x + 1, _point.getY() - y + 1)));
                }
            }
        }
    }
    unitTestAttack(_point: Point, _attacker: any) {
        const activeCreature = _attacker;
        let splashRange = activeCreature.getSplashRange();
        for (let x = 0; x < splashRange.length; x++) {
            for (let y = 0; y < splashRange.length; y++) {
                if (splashRange[x][y] && this.board.isThisTileTaken(new Point(_point.getX() - x + 1, _point.getY() - y + 1))) {
                    activeCreature.attack(this.board.getCreatureByPoint(new Point(_point.getX() - x + 1, _point.getY() - y + 1)));
                }
            }
        }
    }
}
