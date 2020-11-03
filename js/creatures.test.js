let mapBoard = require('./creatures')
console.log('mapBoard', mapBoard)

test('Map have a key and value', () => {
    expect(mapBoard.cretureFromBoard).not.toEqual(1);
    expect(mapBoard.cretureFromBoard).toEqual(mapBoard.creature);
})