const MorningReportCollection = require('../models/morningReportsModel')

function listAllMorningReports() {
  return MorningReportCollection.find();
}
function readMorningReport(userId) {
  return MorningReportCollection.find({ userId });
}
function createMorningReport(date, bedtime, hoursSlept, temp) {
  MorningReportCollection({ date: date, bedtime: bedtime, hoursSlept: hoursSlept, temp: temp }).save();
}

function findMorningReport(nightId) {
  return MorningReportCollection.findById({ _id: nightId });
}

function deleteMorningReport(nightId) {
  return MorningReportCollection.findByIdAndRemove({ _id: nightId })
}

// createNight(11/23/2019,10,8,70);

module.exports = {
  listAllMorningReports,
  readMorningReport,
  createMorningReport,
  findMorningReport,
  deleteMorningReport
}