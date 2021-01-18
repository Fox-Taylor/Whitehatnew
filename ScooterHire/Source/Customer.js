class Customer {

    name;
    money;
    driving;
    returning;

    constructor(name,money,driving,returning){ // this is what gets called when new Customer() is called
        this.name = name
        this.money = money
        this.driving = driving
        this.returing = returning
    }
}


module.exports = Customer
//