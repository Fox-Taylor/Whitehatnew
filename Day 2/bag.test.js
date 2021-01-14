const Bag = require('./Bag');

describe('bag', () => {
    test('Succeeds consturctor', () => {
        const bag = new Bag(6);
        expect(bag.Weight).toEqual(6);
    })
})

