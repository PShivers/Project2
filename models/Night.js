let mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

let NightSchema = mongoose.Schema({
    name: String,
    sleepingSurface: String,
    temp: Number,
    fan: Boolean,
    lighting: String,
    UserId: ObjectId
});