//Bag
class Bag {
    constructor(weight) {
if (!weight) {
    throw new Error('Bag has no Weight!!!!!!!!!!')
}
        this.weight = weight
    }
}

const bag = new Bag(16)
console.log(bag.weight)

/*
class Passenger {
    constructor(Passenger) {
if (!Passenger) {
    throw new Error('Passenger')
}
        this.Passenger = Passenger
    }
}

const passenger = new passenger(16)
console.log(Passenger.passenger)
*/


//Person

const Human = new Passenger('Person')
const HumanCabinBag = new Bag(9)
const HumanHullBag = new Bag(23)
Human.addBag(bobsCabinBag)
Human.addBag(bobsHullBag)
console.log(Human.bags)

class Passenger {
    constructor(name) {
        this.name = name
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = Passenger


//Plane



//Airport

