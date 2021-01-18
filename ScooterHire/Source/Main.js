
// Scooter Kiosk, Imports file, assigns data.
const Scooterkiosk = require("./ScooterKiosk");
//totalscooters, money
scooters = 3;
cash = 100;
operating = true;
kiosk = new Scooterkiosk(scooters,cash,operating);
//console.log(kiosk);
//----------------------------------------------

// Charging Station, Imports file, assigns data x3, all scooters are set to 2=fully charged
const Station = require("./ChargingStation");
// Station, Charging 0 = no 1=yes 2=fully charged
onestatus=2
stationone = new Station(1,onestatus);
twostatus=2
stationtwo = new Station(2,twostatus);
threestatus=2
stationthree = new Station(3,threestatus);
//console.log(stationone,stationtwo,stationthree);
//-------------------------------------------------------------------------------------------

// Customer, Imports file, assigns data x3
const Customer = require("./Customer");
// name, money, driving scooter 0=no 1=yes, returning scooter 0=no 1=yes
customerone = new Customer('Tom',50,0,0);
customertwo = new Customer('Richard',20,0,0);
customerthree = new Customer('Harry',5,0,0);
//console.log(customerone,customertwo,customerthree);
//------------------------------------------

//
const Scooter = require("./Scooter")
//Scooterid, charge
scooterone = new Scooter ('Red',100);
scootertwo = new Scooter ('Yellow',100);
scooterthree = new Scooter ('Green',100)
//console.log(scooterone,scootertwo,scooterthree)
//-----------------------------------------------


// Customer interacts with the kiosk
    //if the kiosk has no scooters then display message
    //Kisok cash ---------------------------------------------------------------------
    if (cash > 0) {console.log('The Kiosk has enough cash to operate'),operating=true}
   else 
   if (cash == 0) { console.log('The Kiosk has run out of cash!'),operating=false
 }
 if (cash < 0) {console.log('The Kiosk is overdrawn!'),operating=false
 }
    
//Kiosk scooters ----------------------------------------------------------------------
if (scooters == 0) {console.log('The Kiosk has run out of Scooters!'),operating=false}
else {console.log('The kiosk has scooters'),operating = true}



console.log('The Kiosk has '+cash+'$')
console.log('Is the Kiosk open? ',operating)
console.log(' ')
console.log('Hello Customer! what is you name?')
console.log('My name is '+customerone.name)
console.log('Hello '+customerone.name+', Would you like to hire a scooter for 10$?')

choice=true

if (choice==true) {
console.log('Yes')}
else {console.log('No'),console.log('Ok goodbye '+customerone.name)}
if (choice==true) {console.log('Ok we will now process your payment.'),console.log('You currently have '+customerone.money+'$')}
console.log('We are now deducting 10$ ...')
customerone.money=customerone.money-10
cash=cash+10
console.log('Your balance is now '+customerone.money+'$')
console.log('')
console.log('The Kiosk now has '+cash+'$')
console.log('')

//customer one takes a scooter from station one
console.log(customerone.name+' Has taken the '+scooterone.scooterid+' Scooter from Station '+stationone.station)
stationone.charging=0
customerone.driving=1

// customer one is driving
console.log('')


//console.log(customerone.name)