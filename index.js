'use strict'
var find = require('array-find')
var express = require('express')
var slug = require('slug')
var bodyParser = require('body-parser')

// Port to start web server on.
var port = 1904




// List of countries (related to step 2).
var data = [{
    id: "0",
    name: 'The Netherlands',
    continent: 'Europe',
    capital: 'Amsterdam',
    description: 'It’s where I live.'
  },
  {
    id: "2",
    name: 'United States',
    continent: 'North America',
    capital: 'Washington, D.C.',
    description: 'Never been to Washington D.C. but NYC is nice.'
  },
  {
    id: "3",
    name: 'Cape Verde',
    continent: 'Africa',
    capital: 'Praia',
    description: 'Interested in going there.'
  },
  {
    id: "2",
    name: 'United States',
    continent: 'America',
    capital: 'New York',
    description: 'Ive been there.',
  },
  {
    id: "4",
    name: 'Croatia',
    continent: 'Europe',
    capital: 'Zagreb',
    description: 'Ive been there.'
  },
  {
    id: "5",
    name: 'Germany',
    continent: 'Europe',
    capital: 'Berlin',
    description: 'Ive been there.'
  },
]

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('static'))
app.get('/', all)
app.get('/:index', get)
app.get('/:id', get)
app.delete('/:id', remove) //remove works due to pre writtin client side script
app.post('/', add)
app.get('/add',form)
app.listen(1904, onServerStart) //starts the server


// Get all countries (related to step 3).
// removed the title seems like the only fix to get the weird error out of the way.
// it now should render the data object
function all(req, res) {
  res.render('list.ejs', {
    data: data
  })
}

function form(req, res) {
  res.render('form1.ejs')
}

function add(req, res) {
  var newCountry = {
    id:req.body.id,
    name:req.body.name,
    continent:req.body.continent,
    capital:req.body.capital,
    description:req.body.description
  }

  data.push(newCountry)
    

  res.redirect('/' + newCountry.id)
  

}
// Get one country (step 4, todo: finish).
function get(req, res, next) {


  var id = req.params.id
  var country = find(data, function (value) {
    return value.id === id
  })

  if (!country) {

    next()
    res.render('error.ejs')
    return
  }
  res.render('detail.ejs', {
    data: country
  }) //add the right data to the template
}

function remove(req, res) {
  var id = req.params.id

  data = data.filter(function (value) {
    return value.id !== id
  })

  res.json({
    status: 'ok'
  })
  
}



function onServerStart() {
  console.log("🌐  Server started. http://localhost:1904");
  console.log();

  // console.log(data.length)
  // console.log(id);
}

