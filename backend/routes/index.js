var express = require('express');
var router = express.Router();
var { Client } = require('pg');
var client = new Client({
  user:"postgres",
  host:"db",
  database:"incomeandexpenditure",
  password:"postgres",
  port:5432
});

/* GET home page. */
router.get('/', function(req, res, next) {
  client.connect();
  client.query('select * from moneysources;', (error, response) => {
    console.log(error ? error.stack : response.rows)
    client.end()
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
