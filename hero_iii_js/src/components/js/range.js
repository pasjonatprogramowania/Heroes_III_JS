"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Range {
    constructor(_lower, _upper) {
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
exports.default = Range;
