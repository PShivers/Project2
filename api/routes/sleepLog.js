const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('nights');
})

router.get('/:nightId', (req, res) => {
  res.render("nightGet");
});

module.exports = router;