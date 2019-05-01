const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//Create User Schema
const Nights = new Schema({
  date: Date,
  hoursSlept: Number,
  bedtime: Number,
  temp: Number,
  user: ObjectId,
  morningReport: ObjectId
});

//create new model, pass that model the  VVV schema created above
let NightsModel = mongoose.model('SleepLogCollection', Nights);
//export model for use in other modules
module.exports = NightsModel;

