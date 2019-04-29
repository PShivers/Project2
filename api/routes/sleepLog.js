const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('sleepLog/nightsRead');
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