const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

const MorningReportSchema = new Schema({
    howYouFeel: String,
    sleepRating: Number,
    notes: String
});

const MorningReport = mongoose.model('morningreport', MorningReportSchema);
module.exports = MorningReport;