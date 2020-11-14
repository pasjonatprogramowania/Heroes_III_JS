import GameEngine from './../js/gameEngine';
import Point from './../js/point';

export default class Start {
    constructor() {
        let game = new GameEngine()
        game.move(new Point(5, 5))
    }
}