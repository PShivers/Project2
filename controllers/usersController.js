const UserCollection = require('../models/usersModel');
const UsersApi = require('../api/usersApi');


module.exports = function (app) {


  app.get('/', (req, res) => {
    res.render("users/home")
  });

  app.get('/users', (req, res) => {
    //get data from mongodb and pass it to view listofusers
    UserCollection.find({}, function (err, data) {
      if (err) throw err;
      res.render("users/listOfUsers", { users: data })
    })
  });

  app.get('/users/createUser', (req, res) => {
    res.render("users/createUser")
  });

  app.post('/users/createUser', (req, res) => {
    //get data from the view and pass it to mogodb
    UsersApi.createUser(req.body.name, req.body.age, req.body.weight);
    res.render('users/createdUser', { user: req.body })
  });

  app.get('/users/:id', (req, res) => {
    UsersApi
      .findUser(req.params.id)
      .then(doc => {
        res.render('users/userProfile', { user: doc });
      })
  });

  app.delete('/users/:id', (req, res) => {
    // res.send('got a DELETE req ready')
    UsersApi.deleteUser(req.params.id)
      .then(() => {
        res.redirect('/users')
      });
  });

  app.get('/editUser/:id', (req, res) => {
    UsersApi.findUser(req.params.id)
      .then(user => {
        res.render('users/editUser', { user: user });
      })
  });

  app.put('/editUser/:id', (req, res) => {
    UsersApi.findUser(req.params.id)
      .then(user => {
        let updatedUser = {
          name: req.body.name,
          age: req.body.age,
          weight: req.body.weight
        }
        UsersApi.updateUser(user, updatedUser)
          .then(() => {
            res.render("users/updatedUser")
          })
      })
  });

}