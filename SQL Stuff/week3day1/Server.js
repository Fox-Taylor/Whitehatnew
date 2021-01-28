const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const app = express();
const port = 3000;

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));

// this route matches any GET request to the top level URL
app.get('/', (request, response) => {
    response.render('restaurants', {date: new Date()})
})

app.get('/about', (request, response) => {
    response.render('about', {date: new Date()})
})



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})









/*
const express = require('express');

const app = express();
const port = 3000;
// why port 3000?
// serve static assets from the public/ folder
//app.use(express.static('public'));

app.get('/', (request, response) => {
    const date = new Date()
    response.send(date)})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
}) 
*/