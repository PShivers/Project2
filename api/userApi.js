const mongoose = require('../db/connection');

// const UserCollection = require("../models/User");

// function getUserById(userId) {
//   return UserCollection.findById(userId);
// }

// function createUser(newUser) {
//   return UserCollection.create(newUser);
// }

function changeUserName() {
    return UserCollection.findById(userId);
}

function addLocation() {
    return UserCollection.create();
}

module.exports = {
    // createUser,
    // changeUserName
}

