const User = require('../models/User')

const userController = {


    index: function (req, res) {
        User.find().then(users => {
            res.render('users/index', { users });
        });
    },

    newUser: function (req, res) {
        res.render('users/new');
    },

    create: function (req, res) {
        console.log(req);
        User.create(req.body).then(() => { res.redirect('/') });
    }

}

module.exports = userController

