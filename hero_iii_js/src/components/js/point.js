export default class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    distanse(_point) {
        let x = Math.abs(this.x - _point.x)
        let y = Math.abs(this.y - _point.y)
        return x > y ? x : y
    }
}