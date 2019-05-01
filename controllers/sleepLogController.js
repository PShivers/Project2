// const SleepLogCollection = require('../models/nightsModel');
const SleepLogApi = require('../api/sleepLogApi');
//dummy data 
// data = [{ id: 1, name: "paul", age: 33, weight: 240 }, { id: 2, name: "chris", age: 34, weight: 150 }, { id: 3, name: "John", age: 33, weight: 135 }]

//controller has routes and behaviors
module.exports = function (app) {

  app.get('/sleepLog/', (req, res) => {
    SleepLogApi.listAllNights().then(data => {
      res.render("sleepLog/listOfNights", { nights: data })
    })
  });

  app.get('/sleepLog/createNight/', (req, res) => {
    res.render("sleepLog/createNight")
  });

  app.post('/sleepLog/createNight/', (req, res) => {
    console.log(req.body)
    // let user = req.params.id
    //get data  from the view and pass it to mogodb
    SleepLogApi.createNight(req.body.date, req.body.bedtime, req.body.hoursSlept, req.body.temp);
    res.render('sleepLog/createdNight', { night: req.body })
  });

  app.get('/sleepLog/:id', (req, res) => {
    SleepLogApi
      .findNight(req.params.id)
      .then(doc => {
        res.render('sleepLog/singleNight', { night: doc });
      })
  });

  app.delete('/sleepLog/:id', (req, res) => {
    SleepLogApi
      .deleteNight(req.params.id)
      .then(() => {
        res.redirect('/sleepLog')
      });
  });

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