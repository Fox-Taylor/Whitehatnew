class Passenger {
    constructor(name) 
    {
        this.name = name
        this.bags = []
       // this.destination = destination
        //this.CurrentAirportName = 'Heathrow'
    }

    addBag(bag) {
        this.bags.push(bag)
    }

}

module.exports = Passenger