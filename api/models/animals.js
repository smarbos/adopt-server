var db = require('../dbconnection') // reference of dbconnection.js
var async = require('async')

var Animals = {

  getAllAnimals: function (callback) {
    return db.query('SELECT * FROM `' + process.env.TABLE_ANIMALS + '`', callback)
  },

  getAnimalById: function (id, callback) {
    return db.query('SELECT * FROM `' + process.env.TABLE_ANIMALS + '` where Id = ?', [id], callback)
  },

  addAnimal: function (Animal, callback) {
    return db.query('INSERT INTO `' + process.env.TABLE_ANIMALS + '` values (`id`, `nombre`, `genero`, `fecha_nacimiento`, `desc`, `fecha_ingreso`, `etapa`, `estado`, `ubicacion`)', [Animal.id, Animal.nombre, Animal.genero, Animal.fecha_nacimiento, Animal.desc, Animal.fecha_ingreso, Animal.etapa, Animal.ubicacion], callback)
  },

  deleteAnimal: function (id, callback) {
    return db.query('DELETE FROM `' + process.env.TABLE_ANIMALS + '` WHERE Id=?', [id], callback)
  },

  updateAnimal: function (id, Animal, callback) {
    // TODO: Fix this
    return db.query('UPDATE `' + process.env.TABLE_ANIMALS + '` SET Title=?,Status=? where Id=?', [Animal.Title, Animal.Status, id], callback)
  },

  getAnimalPhotos: function (id, Animal, callback) {
    return new Promise((resolve, reject) => {
      resolve()
    });
  },

  getAnimalPhotos: function (id, Animal, callback) {
    var promise = new Promise(function(resolve, reject) {


      db.query('SELECT * FROM `' + process.env.TABLE_ANIMAL_PHOTOS + '` where Id = ?', [id], function(err, result){
        if (err)
            reject(Error("It broke")),null;
        else
            resolve(result);
      })

    });
    return promise
  },

}

module.exports = Animals
