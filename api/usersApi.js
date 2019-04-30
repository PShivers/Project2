const UserCollection = require('../models/usersModel')

function createUser(name, age, weight) {
  UserCollection({ name: name, age: age, weight: weight }).save()
}

function findUser(userId) {
  UserCollection.findById(userId)
}

function deleteUser(userId) {
  UserCollection.deleteOne(userId);
}

module.exports = {
  createUser,
  findUser,
  deleteUser
}