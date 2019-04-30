const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/', (req, res) => {
  res.status(200);
  res.render("users/users")
});

router.get('/createUser', (req, res) => {
  res.render("users/createUser")
});

router.post('/createUser', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('users/createdUser', { user: req.body })
})

router.get('/:name', (req, res) => {
  var data = { name: req.params.name, age: 33, weight: 240, sleepLog: ["night1", "night2", "night3"] }
  res.render("users/user", { data });
})

// router.post('/', (req, res) => {
//   res.render(req.body)
// })

module.exports = router;