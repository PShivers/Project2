

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

let LocationSchema = mongoose.Schema({
    name: String,
    sleepingSurface: String,
    lighting: String,
    UserId: ObjectId
});

let LocationCollection = mongoose.model('Location', LocationSchema);

function createLocation(location) {
    return LocationCollection.create(location);
}

function getLocationByUserId(userId) {
    //these two lines are the same :)
    //return AccountCollection.find({ userId: userId }); 
    return AccountCollection.find({ userId });
}

module.exports = {
    createLocation,
    getLocationByUserId
}