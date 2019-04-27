//mine
const mongoose = require('mongoose');

// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/project2', { useNewUrlParser: true });
}
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
}
);
mongoose.connection.once('open', function () {
  console.log("Mongoose has connected to a MongoDB!");
});

//mine
module.exports = mongoose;


