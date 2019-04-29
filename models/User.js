const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
// const Night = require('./Night');

//Create schemas and model

const User = new Schema({
    name: String,
    age: Number,
    weight: Number
    // sleepLog: { NightsCollection }
});



module.exports = mongoose.model('User', User)