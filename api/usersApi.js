const UserCollection = require('../models/usersModel')

function createUser(name, age, weight) {
  UserCollection({ name: name, age: age, weight: weight }).save().then(doc => {
    console.log(doc)
  })
    .catch(err => {
      console.error(err)
    })
}

function findUser(userId) {
  UserCollection.find({ _id: userId });
}

function deleteUser(userId) {
  UserCollection.deleteOne(userId);
}

module.exports = {
  createUser,
  findUser,
  deleteUser
}