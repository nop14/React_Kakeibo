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
var data;

/* GET home page. */
// error client has already been connected. you cannot reuse a client
// TODO: 二回目に利用すると上のエラーが出るので、どうにかする
router.get('/users', function(req, res, next) {
  client.connect();
  client.query('select * from users;', (error, response) => {
    if(error){
      console.log(error)
      data = {};
    }else{
      console.log(response.rows)
      data = response.rows;
    }
    client.end()
    res.json(data);
  })
});

router.get('/incomeandexpenditure', function(req, res, next) {
  client.connect();
  client.query('select * from incomeandexpenditure;', (error, response) => {
    if(error){
      console.log(error)
      data = {};
    }else{
      console.log(response.rows)
      data = response.rows;
    }
    client.end()
    res.json(data);
  })
});

router.get('/moneysources', function(req, res, next) {
  client.connect();
  client.query('select * from moneysources;', (error, response) => {
    if(error){
      console.log(error)
      data = {};
    }else{
      console.log(response.rows)
      data = response.rows;
    }
    client.end()
    res.json(data);
  })
});

router.get('/usages', function(req, res, next) {
  client.connect();
  client.query('select * from usages;', (error, response) => {
    if(error){
      console.log(error)
      data = {};
    }else{
      console.log(response.rows)
      data = response.rows;
    }
    client.end()
    res.json(data);
  })
});

module.exports = router;
