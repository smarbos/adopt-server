var express = require('express')
var router = express.Router()
var Animals = require('../models/animals')

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

router.get('/animals/get/:id?', function (req, res, next) {
  if (req.params.id) {
    Animals.getAnimalById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err)
      } else {
        animalPhotos = Animals.getAnimalPhotos(req.params.id).then(function(response){
          rows.push(response)
          res.json(rows)
        }).catch(function(error){
          rows.push(error)
          res.json(rows)
        });
      }
    })
  } else {
    Animals.getAllAnimals(function (err, rows) {
      if (err) {
        res.json(err)
      } else {
        res.json(rows)
      }
    })
  }
})

router.post('/animals/create', function (req, res, next) {
  Animals.addTask(req.body, function (err, count) {
    if (err) {
      res.json(err)
    } else {
      res.json(req.body) // or return count for 1 &amp;amp;amp; 0
    }
  })
})

router.delete('/animals/delete/:id', function (req, res, next) {
  Animals.deleteAnimal(req.params.id, function (err, count) {
    if (err) {
      res.json(err)
    } else {
      res.json(count)
    }
  })
})

router.put('/animals/edit/:id', function (req, res, next) {
  Animals.updateAnimal(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err)
    } else {
      res.json(rows)
    }
  })
})

module.exports = router
