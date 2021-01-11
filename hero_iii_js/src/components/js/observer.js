"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class observer {
    constructor() {
        this.observers = [];
    }
    subscribe(_itemInObserver) {
        this.observers.push(_itemInObserver);
    }
    unsubscribe(_itemInObserver) {
        this.observers = this.observers.filter(subscriber => subscriber !== _itemInObserver);
    }
    notify(_dataInObserver) {
        this.observers.forEach(observer => observer(_dataInObserver));
    }
}
exports.default = observer;
