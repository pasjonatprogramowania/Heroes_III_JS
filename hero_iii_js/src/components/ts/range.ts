export default class Range {
    lowerPoint: number;
    upperPoint: number;
    constructor(_lower: number, _upper: number) {
        this.lowerPoint = _lower;
        this.upperPoint = _upper;
    }
    getLowerPoint() {
        return this.lowerPoint;
    }
    getUpperPoint() {
        return this.upperPoint;
    }
}
