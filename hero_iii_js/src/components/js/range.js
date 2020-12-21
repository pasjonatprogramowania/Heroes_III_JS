export default class Range {
    constructor(_lower, _upper) {
        this.lowerPoint = _lower
        this.upperPoint = _upper
    }
    getLowerPoint() {
        return this.lowerPoint;
    }
    getUpperPoint() {
        return this.upperPoint;
    }
}