const express = require('express');
const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.status('200')
//   res.render('user')
// })

router.get('/', (req, res) => {
  res.render("users/users")
});

// router.post('/', (req, res) => {
//   res.render(req.body)
// })

module.exports = router;