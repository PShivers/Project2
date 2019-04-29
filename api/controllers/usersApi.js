const User = require('../models/User');

let UserCollection = mongoose.model('User', UserSchema);

// index: function (req, res) {
//     User.find().then(users => {
//         res.render('users/index', { users });
//     });


// newUser: function (req, res) {
//     res.render('users/new');


function createUser() {
    return UserCollection.create();
}

module.exports = {
    createUser
}