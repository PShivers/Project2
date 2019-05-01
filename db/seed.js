const UserModel = require('../models/usersModel');
const MorningReportModel = require('../models/morningReportModel');

var user = UserModel({ name: "Rachael", age: 21, weight: 140 }).save(function (err) {
  if (err) throw err;
  console.log('user saved');
});

var MR = MorningReportModel({ date: "today", mood: "great", notes: "slept great", rating: 10, user: "Paul" }).save(function (err) {
  if (err) throw err;
  console.log('MR saved');
});