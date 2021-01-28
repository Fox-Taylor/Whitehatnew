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
function loop(restaurants) {

    for (let i = 0; i < restaurants.length; i++) {
      //  const currentrestaurant=restaurants[i]

        console.log(restaurants[i].name);

        for (let j = 0; j < restaurants[i].menus.length; j++) {
           console.log(restaurants[i].menus[j].title);
//it works yay!
            for (let k = 0; k < restaurants[i].menus[j].items.length; k++) {
                console.log(restaurants[i].menus[j].items[k].name);

           }
        }
    }

}


// main flow
load().then(restaurants => {
    console.log(restaurants);           // this is an array 
    console.log(restaurants.length);    // it's length is 8
    loop(restaurants); // array
})