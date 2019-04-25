const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foo', () => {
  console.log('mongodb connected!');
});

module.exports = mongoose;
