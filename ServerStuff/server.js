const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const { Restaurant } = require('./Restaurant')
const { Menu } = require('./Menu')
const { MenuItem } = require('./MenuItem')
const { loadAndInsert } = require('./populateDB')

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

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// this route matches any GET request to the http://localhost:3000
app.get('/', async (req, res) => {
   const restaurants = await Restaurant.findAll({

        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:MenuItem, as: 'items'}]
            }
        ],
        nest: true
    })
    res.render('home', { restaurants })
})


app.get('/about', async (req, res) => {
      res.render("about")
   })

   app.get('/fox', async (req, res) => {
    const date=new Date()
    res.render("foxpage",{date})
 })

 app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await restaurant.getMenus({
        include: [{model: MenuItem, as: 'items'}],
        nest: true
    }) 
    console.log(restaurant)
    res.render('restaurant', {restaurant,menus})

 })


 app.get('/restaurants/:id/delete', async (req, res) => {
    Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            restaurant.destroy()
            res.redirect('/')
        })
})


 app.get('/new', async (req, res) => {
    res.render("new")
 })

 
 app.post('/new', async (req, res) => {
    await Restaurant.create(req.body)
    res.redirect("/")
 })


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})