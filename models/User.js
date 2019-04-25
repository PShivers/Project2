const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
const Night = require('./Night');

//Create schemas and model

const UserSchema = new Schema({
    name: String,
    age: Number,
    locations: String,
    Nights: Night
});

const User = mongoose.model('user', UserSchema)
module.exports = User;