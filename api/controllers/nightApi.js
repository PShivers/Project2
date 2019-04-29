const mongoose = require('../../db/connection');


// let NightCollection = mongoose.model('Night', NightSchema);

function createNight(night) {
    return NightCollection.create(night);
}

function getNightById(nightId) {
    //these two lines are the same :)
    //return AccountCollection.find({ userId: userId }); 
    return NightCollection.find({ nightId });
}

module.exports = {
    createNight,
    getNightById
}