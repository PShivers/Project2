const UserCollection = require('../models/usersModel');
const UsersApi = require('../api/usersApi');
//dummy data 
// data = [{ id: 1, name: "paul", age: 33, weight: 240 }, { id: 2, name: "chris", age: 34, weight: 150 }, { id: 3, name: "John", age: 33, weight: 135 }]

//controller has routes and behaviors
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
    UsersApi.createUser()
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

  app.delete('users/:id', (req, res) => {
    res.send('got a DELETE')
    // UsersApi.deleteUser(req.params.id)
    //   .then(() => {
    //     res.redirect('/users')
    //   });
    //delete user then
  });




  app.get('/users/editUser', (req, res) => {
    res.render('users/editUser', { user: req.params.id });
  });

  app.patch('/users/editUser', (req, res) => {
    res.render('users/editUser', { user: req.params.id });
  });


  // app.delete('/users', (req, res) => {
  //   console.log(req.body)
  //   UsersApi.deleteUser();
  //   res.render('users/deletedUser')
  // });
}