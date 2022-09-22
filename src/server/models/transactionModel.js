const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "You must enter an email"],
      lowercase: true,
    },
    type: {
      type: String,
      required: [true],
    },
    company: {
      type: String,
      required: [true, "There must be a company associated with a transaction"],
    },
    amount: {
      type: Number,
      required: [true],
    },
    transactionType: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

const Transaction = mongoose.model("transactions", transactionSchema);

module.exports = Transaction;
