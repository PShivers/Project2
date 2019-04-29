const mongoose = require("./connection");
const User = require("../models/User")

const paul = new User({
    name: "Paul",
    age: 33,
    weight: 240
});

