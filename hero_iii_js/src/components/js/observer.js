export default class observer {
    constructor() {
        this.observer = []
    }
    subscribe(_itemInObserver) {
        this.observer.push(_itemInObserver)
    }
    unsubscribe(_itemInObserver) {
        this.observers = this.observers.filter(subscriber => subscriber !== _itemInObserver);
    }
    notify(_dataInObserver) {
        this.observers.forEach(observer => observer(_dataInObserver));
    }
}