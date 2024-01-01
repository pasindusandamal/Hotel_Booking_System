const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  adults: String,
  kids: String,
  selectedValue: String,
  checkInDate: String,
  checkOutDate: String
});

module.exports = mongoose.model("users", usersSchema);
