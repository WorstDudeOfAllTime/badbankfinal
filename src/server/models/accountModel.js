const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  type :{
    type: String,
    required: [true]
  },
  company :{
    type: String,
    required: [true]
  }, 
  amount:{
    type: Float,
    required: [true]
  },
  transactionType :{
    type: String,
    required: [true]
  }
})

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;