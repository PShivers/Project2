const SleepLogCollection = require('../models/nightsModel')

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
  return SleepLogCollection.findByIdAndRemove({ _id: objectId(nightId) })
}


module.exports = {
  listNights,
  createNight,
  findNight,
  deleteNight
}