const path = require('path')
const express = require('express')
const hbs = require('hbs')
    
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials') 

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ryan Davey'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ryan Davey'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Text for the Help page.',
        title: 'Help',
        name: 'Ryan Davey'
    })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }
  console.log(req.query)
  res.send({
    address: req.query.address,
    forecast: 'It is snowing',
    location: 'Philadelphia'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    error: 'Help article not found.',
    title: '404 ',
    name: 'Ryan Davey'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    error: 'Page not found.',
    title: '404',
    name: 'Ryan Davey'
  })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})