const UsersCollection = require('../models/usersModel')

function createUser(name, age, weight) {
  UsersCollection({ name: name, age: age, weight: weight }).save().then(doc => {
    console.log(doc)
  })
    .catch(err => {
      console.error(err)
    })
}

function findUser(userId) {
  UsersCollection.find({ _id: userId });
}

function deleteUser(userId) {
  UsersCollection.deleteOne(userId);
}

module.exports = {
  createUser,
  findUser,
  deleteUser
}