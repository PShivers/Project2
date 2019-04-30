const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/nightsRead/:name', (req, res, next) => {
  var data = { name: req.params.name, age: 33, weight: 240, sleepLog: ["night1", "night2", "night3"] };
  res.render('sleepLog/nightsRead', { data });
});

router.get('/nightGet', (req, res, next) => {
  res.render('sleepLog/nightGet');
});

router.get('/nightPost', (req, res, next) => {
  res.render('sleepLog/nightPost');
});

router.get('/nightPatch', (req, res, next) => {
  res.render('sleepLog/nightPatch');
});


// router.get('/:nightId', (req, res) => {
//   res.render("");
// });

module.exports = router;