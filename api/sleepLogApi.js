const SleepLogCollection = require('../models/nightsModel')

function listAllNights() {
  return SleepLogCollection.find();
}
function listNights(userId) {
  return SleepLogCollection.find({ userId });
}
function createNight(date, bedtime, hoursSlept, temp) {
  SleepLogCollection({ date: date, bedtime: bedtime, hoursSlept: hoursSlept, temp: temp }).save();
}

function findNight(nightId) {
  return SleepLogCollection.findById({ _id: nightId });
}

function deleteNight(nightId) {
  return SleepLogCollection.findByIdAndRemove({ _id: nightId })
}

// createNight(11/23/2019,10,8,70);

module.exports = {
  listAllNights,
  listNights,
  createNight,
  findNight,
  deleteNight
}