describe('Test DB Connection setup', function () {
  it('should load local configurations', function (next) {
    var mysql = require('mysql')
    require('dotenv').config()

    var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE
    })

    connection.connect()

    connection.query('SELECT * FROM `' + process.env.TABLE_ANIMALS + '`', function (error, results, fields) {
      if (error) throw error
      expect(results.length).toEqual(16)
    })

    connection.end()
  })
})
