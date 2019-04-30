const UsersCollection = require('../models/UsersModel');

//write functions here
function createUser() {
    return UsersCollection.create();
}

function getUsersList() {
    return UsersCollection.find({ users });
}

function getUserById(userId) {
    return UsersCollection.findOne(userId);
}

//export functions here
module.exports = {
    createUser,
    getUserById,
    getUsersList
}