const { expect } = require("@jest/globals");
const Customer = require('./Customer');

describe('Customer', () => {
    test('have a name', () => {
       // expect(Customer.name).
       // expect(Customer.name).
        expect(Customer.name).Tobeundefined;

    
    });

    test('his constructed successfully', () => {

        const customer = new Customer("fox", 12, false, false);

        expect(customer.name).toBe("fox");
        // TODO - check money... etc
 
    
     });

    //test

})

//npm run test
//