/*const { timeStamp } = require('console')
const { describe } = require('yargs')
const person = require('./person')
describe('person, 0=> {
    tes('check name',0 => {
        expect(person.william.firstname).toequal('William');
        expect(person.william.Lastname).toequal('Windsor');

    });
});
*/

const person = require('./person');

describe('person', () => {

    test('check name', () => {
        expect(person.william.firstName).toEqual('William');
        expect(person.william.lastName).toEqual('Windsor');
    });
});
