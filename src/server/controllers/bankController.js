const { faker } = require("@faker-js/faker");
const User = require("./../models/userModel");
const Transaction = require("./../models/transactionModel");
const Account = require("./../models/accountModel");

exports.getAccount = async (req, res) => {
  let person = { email: req.params.user, type: req.params.type };

  Account.findOne(person, (err, result) => {
    res.send(result);
    res.end();
  });
};

exports.getBalance = async (req, res) => {
  const accountType = req.params.type.toLowerCase();
  const email = req.params.email.toLowerCase();
  let balance = 0;
  Transaction.aggregate([
    {
      $match: {
        email: `${email}`,
        type: `${accountType}`,
      },
    },
  ]).exec((err, response) => {
    if (err) res.send("This is not a proper account");
    res.send(response);
  });
};

exports.transferFunds = (req, res) => {
  let transferSend = {
    email: req.body.send,
    type: req.body.sendType,
    company: req.body.receive,
    amount: -Math.abs(req.body.amount),
    transactionType: "transfer",
    date: new Date(),
  };
  let transferReceive = {
    email: req.body.receive,
    type: req.body.receiveType,
    company: req.body.send,
    amount: Math.abs(req.body.amount),
    transactionType: "transfer",
    date: new Date(),
  };
  Transaction.insertMany([transferSend, transferReceive], (err, result) => {
    if (err) throw err;
  });
  res.end();
};

exports.depositFunds = (req, res) => {
  let deposit = {
    email: req.body.email,
    type: req.body.type,
    company: "WBAT",
    amount: Math.abs(req.body.amount),
    transactionType: "deposit",
    date: new Date(),
  };
  Transaction.create(deposit, (err, result) => {
    res.send({ message: "Deposit Successful" });
  });
};
exports.withdrawFunds = (req, res) => {
  let withdraw = {
    email: req.body.email,
    type: req.body.type,
    company: "WBAT",
    amount: -Math.abs(req.body.amount),
    transactionType: "withdraw",
    date: new Date(),
  };
  Transaction.create(withdraw, (id, result) => {
    res.end();
  });
};

exports.deleteAll = (req, res) => {
  User.deleteMany({}, (err, response) => {
    if (err) console.log(err);
    console.log(response);
  });
  Transaction.deleteMany({}, (err, response) => {
    if (err) console.log(err);
    console.log(response);
  });
  Account.deleteMany({}, (err, response) => {
    if (err) console.log(err);
    console.log(response);
  });
  res.end();
};
