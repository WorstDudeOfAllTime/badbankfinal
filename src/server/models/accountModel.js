const mongoose = require("mongoose");
const accountSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: [true],
    },
    date: {
      type: Date,
      required: [true],
    },
    accountNum: {
      type: Number,
      required: [true],
    },
    routingNum: {
      type: Number,
      required: [true],
    },
  },
  { versionKey: false }
);

const Account = mongoose.model("accounts", accountSchema);

module.exports = Account;
