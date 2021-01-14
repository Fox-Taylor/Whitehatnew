//available planes to got to JFK and GLASGOW
class CurrentOutboundPlanes {
    constructor(JFK,GLASGOW) {
    this.JFK = JFK
    this.GLASGOW = GLASGOW
    }
}

//Check runway clean at destination airport
RunwayclearJFK = true
RunwayclearGLASGOW = false


class Bag {
    constructor(Weight,Height,Width,Depth,Contraband) {
        this.Weight = Weight
        this.Height = Height
        this.Width = Width
        this.Depth = Depth
        this.contraband = Contraband
    }
}


//Passengers
//Number of passengers

class Passenger {
    constructor(name) 
    {
        this.name = name
        this.bags = []
       // this.destination = destination
        this.CurrentAirportName = 'Heathrow'
    }

    addBag(bag) {
        this.bags.push(bag)
    }

}

// Passenger Bags
// Weight - Height - Width - Depth - Contra
const Mario = new Passenger ('Mario')
const MariosBag = new Bag (5+' Kilos',100+'cm',20+'cm',30+'cm',false)
Mario.addBag(MariosBag)
//Mario.destination = Hello

const Luigi = new Passenger ('Luigi')
const LuigisBag = new Bag (9+' Kilos',500+'cm',50+'cm',55+'cm',true)
Luigi.addBag(LuigisBag)


//const Luigi = {firstname: 'Luigi',}


//Check if luggage dimensions are too big.
//optional, check for contraband!


//check if airport is available
//check if a plane is available
//board passengers to plane
//check if plane has passenger(s)
//




//console.log(MariosBag)
//console.log(LuigisBag)
console.log(Mario.bags)
//module.exports = Bag




//const MariosBag = new Bag (5+' Kilos',100+'cm',20+'cm',30+'cm',false)