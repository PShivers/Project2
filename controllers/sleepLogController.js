const SleepLogCollection = require('../models/nightsModel');
const SleepLogApi = require('../api/sleepLogApi');
//dummy data 
// data = [{ id: 1, name: "paul", age: 33, weight: 240 }, { id: 2, name: "chris", age: 34, weight: 150 }, { id: 3, name: "John", age: 33, weight: 135 }]

//controller has routes and behaviors
module.exports = function (app) {

  // app.get('/sleepLog/:id', (req, res) => {
  //   let userId = req.params.id;
  //   // SleepLogApi.listNights(userId), (err, data) => {
  //   //   if (err) throw err;
  //   // res.render("sleepLog/listOfNights", { nights: data })
  //   // }
  // });

  app.get('/sleepLog/createNight', (req, res) => {
    // SleepLogApi.createNight();
    // res.send('ready for GET req at sleepLog/createNight')
    res.render("sleepLog/createNight")
  });

  app.post('/sleepLog/createNight', (req, res) => {
    console.log(req.body)
    //get data from the view and pass it to mogodb
    SleepLogApi.createNight(req.body.date, req.body.bedtime, req.body.hoursSlept, req.body.temp);
    res.render('sleepLog/createdNight', { night: req.body })
  });

  // app.get('/users/:id', (req, res) => {
  //   UsersApi
  //     .findUser(req.params.id)
  //     .then(doc => {
  //       res.render('users/userProfile', { user: doc });
  //     })
  // });

  // app.delete('/users/:id', (req, res) => {
  //   res.send('got a DELETE request')
  //   // UsersApi.deleteUser(req.params.id)
  //   //   .then(() => {
  //   //     res.redirect('/users')
  //   //   });
  //   //delete user then
  // });




  // app.get('/users/editUser', (req, res) => {
  //   res.render('users/editUser', { user: req.params.id });
  // });

  // app.patch('/users/editUser', (req, res) => {
  //   res.render('users/editUser', { user: req.params.id });
  // });


  // app.delete('/users', (req, res) => {
  //   console.log(req.body)
  //   UsersApi.deleteUser();
  //   res.render('users/deletedUser')
  // });
};