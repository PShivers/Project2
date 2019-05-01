const UsersCollection = require('../models/usersModel')

function listUsers() {
  return UsersCollection.find({});
}
function createUser(name, age, weight) {
  UsersCollection({ name: name, age: age, weight: weight }).save();
}

function findUser(userId) {
  return UsersCollection.findById({ _id: userId });
}

function updateUser(old, update) {
  return UsersCollection.updateOne(old, update);
}

function deleteUser(userId) {
  return UsersCollection.findByIdAndRemove({ _id: userId })
}


module.exports = {
  updateUser,
  listUsers,
  createUser,
  findUser,
  deleteUser
}