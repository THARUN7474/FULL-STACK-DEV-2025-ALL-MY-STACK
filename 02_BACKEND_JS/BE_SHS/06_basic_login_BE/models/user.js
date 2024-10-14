const mongoose = require('mongoose');


// mongoose.connect("mongodb://127.0.0.1:27017/usersDB");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
