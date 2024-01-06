const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    enum: ['user', 'staff', 'admin'], // Define allowed roles
    default: 'user', // Default role is 'user'
    required: true,
  },
});

module.exports = mongoose.model('login', userSchema);
