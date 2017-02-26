var express = require('express')
var bodyParser = require('body-parser')
var base = require('./routes/base')
var animals = require('./routes/animals')
var app = express()

require('dotenv').config()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', base)
app.use('/', animals)

var server = app.listen(process.env.ENV_PORT, function () {
  console.log('Corriendo: ' + process.env.ENV_NAME)
  console.log('Escuchando puerto %s...', server.address().port)
})
