const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter your name"],
  },
  email: {
    type: String,
    required: [true, "You must enter your email"],
    unique : true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "You must enter a password"],
    minLength: 8,
  },
  date:{
    type: Date,
    required: [true]
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;