export default class Board {
    constructor() {
        this.map = new Map();
        this.boardX = 20;
        this.boardY = 15;
    }
    add(_point, _creature) {
        let mapToString = ``;
        this.map.forEach((val, key) => {
            mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
        });

        if (this.map.has(_point)) {
            throw "Exception: => To pole jest zajete, nie mozesz tam dodac jednostki";
        }
        if (_point.x > this.boardX || _point.y > this.boardY) {
            throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
        }

        this.map.set(_point, _creature);

        if (mapToString.includes(JSON.stringify(_point))) {
            throw "Exception: => Klucz nie jest równy tej wartosci która powinna byc wpisana";
        }
    }
    getVal(_point) {
        return this.map.get(_point);
    }
    getPoint(_creature) {
        for (const [key, val] of this.map.entries()) {
            if (val === _creature) {
                return key;
            }
        }
    }
    movebyCreature(_creature, _newPoint) {
        this.move(this.getPoint(_creature), _newPoint);
    }
    move(_point, _newPoint) {
        let mapToString = ``;
        this.map.forEach((val, key) => {
            mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
        });

        if (_newPoint.x > this.boardX || _newPoint.y > this.boardY) {
            throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
        }
        if (mapToString.includes(JSON.stringify(_newPoint))) {
            throw "Exception: => To pole jest zajete, nie mozesz tam ruszyc jednostki";
        }

        let creature = this.map.get(_point);
        this.map.delete(_point);
        this.map.set(_newPoint, creature);
    }
}
