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
  }
]

express()
  .set('view engine', 'ejs')
  .set('views', 'views')
  .use(express.static('static'))
  .get('/', all)
  .get('/:index', get)
  .listen(port)

// Get all countries (related to step 3).
function all(req, res) {
  res.render('list.ejs', {
    title: 'Countries',
    data: data
  })
}

// Get one country (step 4, todo: finish).
function get(req, res) {

}
