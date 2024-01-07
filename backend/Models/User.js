const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  
  adults: String,
  kids: String,
  selectedValue: String,
  checkIn: String,
  checkOut: String,

  username:String,
  email:String,
  password:String
});

module.exports = mongoose.model("users", usersSchema);
