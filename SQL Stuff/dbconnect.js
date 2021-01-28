
const fsp = require('fs').promises; // Node.js file system module with promises
// loads the jason file into a java script Array
async function load() {
    console.log('calling load');
    const restaurantFile = './restaurants.json';
    // wait for the restaurant data file to be read
    const buffer = await fsp.readFile(restaurantFile);
    const restaurants = (JSON.parse(String(buffer)));
    return restaurants;
}
// loop through the restaurant data
function loop (restaurants) {
   for (let i=0; restaurants.length; i++) {
      console.log(restaurants[i].name);
   }
}
// main flow
load().then(restaurants => {
    console.log(restaurants);           // this is an array 
    console.log(restaurants.length);    // it's length is 8
    loop(restaurants); // array
})





/*
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  */