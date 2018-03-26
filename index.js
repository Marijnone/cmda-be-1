'use strict'

var express = require('express')

// Port to start web server on.
var port = 1904

// List of countries (related to step 2).
var data = [
  {
    name: 'The Netherlands',
    continent: 'Europe',
    capital: 'Amsterdam',
    description: 'It’s where I live.'
  },
  {
    name: 'United States',
    continent: 'North America',
    capital: 'Washington, D.C.',
    description: 'Never been to Washington D.C. but NYC is nice.'
  },
  {
    name: 'Cape Verde',
    continent: 'Africa',
    capital: 'Praia',
    description: 'Interested in going there.'
  },
  {
  name: 'United States',
  continent: 'America',
  capital: 'New York',
  description: 'Ive been there.',
  },
  {
  name: 'Zadar',
  continent: 'Europe',
  capital: 'Croatia',
  description: 'Ive been there.'
  },
  {
    name: 'Berlin',
    continent: 'Europe',
    capital: 'Croatia',
    description: 'Ive been there.'
    },
]

express()
  .set('view engine', 'ejs')
  .set('views', 'views')
  .use(express.static('static'))
  .get('/', all)
  .get('/:index', get)
  .get('/0', detail)
  .listen(port)
   //.get is not a function this is weird i cant figure out why this is not working...
 
 function detail(res,req){
 res.render('detail.ejs', {data: data})
}
  

  

  

// Get all countries (related to step 3).
// removed the title seems like the only fix to get the weird error out of the way.
// it now should render the data object
function all(req, res) {
  res.render('list.ejs', {data: data})
}


// Get one country (step 4, todo: finish).
function get(req, res) {

}
