const UserModel = require('../models/usersModel')

var user = UserModel({ name: "Rachael", age: 21, weight: 140 }).save(function (err) {
  if (err) throw err;
  console.log('user saved');
});