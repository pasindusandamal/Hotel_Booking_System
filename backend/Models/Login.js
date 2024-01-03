const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Username is a required field for registration
    unique: true, // Ensures username is unique
  },
  email: {
    type: String,
    required: true, // Email is a required field for registration
    unique: true, // Ensures email is unique
  },
  password: {
    type: String,
    required: true, // Password is a required field for registration
  },
  confirmPassword: {
    type: String,
    required: true, // ConfirmPassword is a required field for registration
  },
});

module.exports = mongoose.model("login", userSchema);
