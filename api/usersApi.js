const UsersCollection = require('../models/usersModel')

function createUser(name, age, weight) {
  UsersCollection({ name: name, age: age, weight: weight }).save();
}

function findUser(userId) {
  return UsersCollection.findById({ _id: userId });
}

function deleteUser(userId) {
  return UsersCollection.deleteOne(userId);
}

// console.log(findUser('5cc8c72a2b1124640db519b0'));

module.exports = {
  createUser,
  findUser,
  deleteUser
}