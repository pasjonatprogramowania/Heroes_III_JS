export default class Board {
  constructor() {
    this.map = new Map();
    this.boardX = 20;
    this.boardY = 15;
  }
  add(point, creature) {
    let mapToString = ``;
    this.map.forEach((val, key) => {
      mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
    });

    if (this.map.has(point)) {
      throw "Exception: => To pole jest zajete, nie mozesz tam dodac jednostki";
    }
    if (point.x > this.boardX || point.y > this.boardY) {
      throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
    }

    this.map.set(point, creature);

    if (mapToString.includes(JSON.stringify(point))) {
      throw "Exception: => Klucz nie jest równy tej wartosci która powinna byc wpisana";
    }
  }
  getVal(point) {
    return this.map.get(point);
  }
  move(point, newPoint) {
    let mapToString = ``;
    this.map.forEach((val, key) => {
      mapToString += ` ${JSON.stringify(key)} ${JSON.stringify(val)} `;
    });

    if (newPoint.x > this.boardX || newPoint.y > this.boardY) {
      throw "Exception: => Creature nie zostala ruszona, wskazaany pkt jest poza mapa";
    }
    if (mapToString.includes(JSON.stringify(newPoint))) {
      throw "Exception: => To pole jest zajete, nie mozesz tam ruszyc jednostki";
    }

    let creature = this.map.get(point);
    this.map.delete(point);
    this.map.set(newPoint, creature);
  }
}
