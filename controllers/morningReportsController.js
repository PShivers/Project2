
const MorningReportsApi = require('../api/morningReportsApi');

//controller has routes and behaviors
module.exports = function (app) {

  app.get('/morningReports', (req, res) => {
    MorningReportsApi.listAllMorningReports().then(data => {
      res.render("morningReports/listOfMorningReports", { morning: data })
    })
  });

  app.get('/morningReports/createMorningReport', (req, res) => {
    res.render("morningReports/createMorningReport")
  });

  // app.post('/sleepLog/createNight/:id', (req, res) => {
  //   console.log(req.body)
  //   let user = req.params.id
  //   //get data  from the view and pass it to mogodb
  //   SleepLogApi.createNight(req.body.date, req.body.bedtime, req.body.hoursSlept, req.body.temp, user);
  //   res.render('sleepLog/singleNight', { night: req.body })
  // });

  // app.get('/sleepLog/:id', (req, res) => {
  //   SleepLogApi
  //     .findNight(req.params.id)
  //     .then(doc => {
  //       res.render('sleepLog/singleNight', { night: doc });
  //     })
  // });

  // app.delete('/sleepLog/:id', (req, res) => {
  //   SleepLogApi
  //     .deleteNight(req.params.id)
  //     .then(() => {
  //       res.redirect('/sleepLog')
  //     });
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