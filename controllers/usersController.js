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
    // let id = req.params.id;
    console.log(UsersApi.findUser(req.params.id));
    let user = UsersApi.findUser(req.params.id)
      res.render('users/userProfile', { user: user });
  });

  app.get('/users/editUser', (req, res) => {
    res.render('users/editUser', { user: req.params.id });
  });

  app.patch('/users/editUser', (req, res) => {
    res.render('users/editUser', { user: req.params.id });
  });

  app.delete('/users/editUser', (req, res) => {
    UsersApi.deleteUser(_id);
    res.render('users/deletedUser')
  });

  // app.delete('/users', (req, res) => {
  //   console.log(req.body)
  //   UsersApi.deleteUser();
  //   res.render('users/deletedUser')
  // });
}