const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

//Create User Schema
const MorningReports = new Schema({
  date: Date,
  mood: String,
  rating: Number,
  notes: String,
  night: ObjectId,
  user: ObjectId
});

//create new model, pass that model the  VVV schema created above
let MorningReportsModel = mongoose.model('MornginReportCollection', MorningReports);
//export model for use in other modules
module.exports = MorningReportsModel;

