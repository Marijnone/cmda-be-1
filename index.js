'use strict'

var express = require('express')

// Port to start web server on.
var port = 1904




// List of countries (related to step 2).
var data = [
  {
    id: 0,
    name: 'The Netherlands',
    continent: 'Europe',
    capital: 'Amsterdam',
    description: 'It’s where I live.'
  },
  {
    id: 2,
    name: 'United States',
    continent: 'North America',
    capital: 'Washington, D.C.',
    description: 'Never been to Washington D.C. but NYC is nice.'
  },
  {
    id: 3,
    name: 'Cape Verde',
    continent: 'Africa',
    capital: 'Praia',
    description: 'Interested in going there.'
  },
  {
  id: 2,
  name: 'United States',
  continent: 'America',
  capital: 'New York',
  description: 'Ive been there.',
  },
  {
  id: 4,
  name: 'Croatia',
  continent: 'Europe',
  capital: 'Zagreb',
  description: 'Ive been there.'
  },
  {
    id: 5,
    name: 'Germany',
    continent: 'Europe',
    capital: 'Berlin',
    description: 'Ive been there.'
    },
]

var app = express()
  app.set('view engine', 'ejs')
  app.set('views', 'views')
  app.use(express.static('static'))
  app.get('/', all)
  app.get('/:index', get)
  app.get('/:id', detail)
  app.listen(1904, onServerStart) //starts the server
  
   //.get is not a function this is weird i cant figure out why this is not working... ah moved it above the listen function
 //try to render the page with the data:data i was trying to find the method to bind it with req.params to use te right id
 function detail(req,res){
 res.render('detail.ejs', {data: id})

}
  

  

  

// Get all countries (related to step 3).
// removed the title seems like the only fix to get the weird error out of the way.
// it now should render the data object
function all(req, res) {
  res.render('list.ejs', {data: data})
  var id = req.params.id
}

function add(req, res){

}


// Get one country (step 4, todo: finish).
function get(req, res, data) {
  res.render('detail.ejs', {data: data})

}
function onServerStart() {
  console.log("🌐  Server started. http://localhost:1904");
  console.log(data.length)
  // console.log(req.params);
  console.log()
  
}
