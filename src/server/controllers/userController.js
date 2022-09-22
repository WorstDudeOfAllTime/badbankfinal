const { faker } = require("@faker-js/faker");
const User = require("./../models/userModel");
const Transaction = require("./../models/transactionModel");
const Account = require("./../models/accountModel");

exports.allUsers = (req, res) => {
  User.find({}, (err, result) => {
    if (err) console.log(err);
    res.send(result);
    res.end();
  });
};
exports.findAccount = (req, res) => {
  let id = { _id: ObjectId(req.body._id) };
  Account.findOne(id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.loginUser = (req, res) => {
  let loginInfo = { email: req.params.email, password: req.params.password };
  User.findOne(loginInfo, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
exports.createUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (await User.findOne({ email: email })) {
      console.log("User already exists");
      res.send({ message: "User Already Exists" });
    } else {
      const accountType = ["checking", "savings"];
      let transArray = [];
      const personObj = {
        name: name,
        email: email,
        password: password,
        date: new Date(),
      };
      for (let i = 0; i <= 10; i++) {
        let transactionObj = {
          email: email,
          type: accountType[Math.floor(Math.random() * accountType.length)],
          company: faker.company.name(),
          amount: parseFloat(faker.finance.amount(-2500, 10000)),
          transactionType: faker.finance.transactionType(),
          date: new Date(),
        };
        transArray.push(transactionObj);
      }
      let savAccountObj = {
        email: email,
        type: "savings",
        date: new Date(),
        accountNum: faker.finance.account(12),
        routingNum: faker.finance.routingNumber(),
      };
      let chkAccountObj = {
        email: email,
        type: "checking",
        date: new Date(),
        accountNum: faker.finance.account(12),
        routingNum: faker.finance.routingNumber(),
      };

      User.create(personObj, (err, response) => {
        if (err) throw err;
      });
      Account.insertMany([savAccountObj, chkAccountObj], (err, response) => {
        if (err) throw err;
      });
      Transaction.create(transArray, (err, response) => {
        if (err) throw err;
      });
      res.send({ message: "Success!" });
      res.status(200).end();
    }
  } catch (err) {
    console.log(err);
  }
};
