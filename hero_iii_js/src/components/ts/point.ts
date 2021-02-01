export default class Point {
    x:number;
    y:number;
    constructor(_x:number, _y:number) {
        this.x = _x;
        this.y = _y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    distanse(_point:Point) {
        let x = Math.abs(this.x - _point.x)
        let y = Math.abs(this.y - _point.y)

        return Math.sqrt(x * x + y * y);
    }
}