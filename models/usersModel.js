const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

//Create User Schema
const Users = new Schema({
  name: String,
  age: Number,
  weight: Number
  // sleepLog: { NightsCollection }
});

//create new model, pass that model the  VVV schema created above
let UsersModel = mongoose.model('UsersCollection', Users);
//export model for use in other modules
module.exports = UsersModel;

