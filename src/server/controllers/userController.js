const dbo = require("./../db/conn");
const jwt = require("jsonwebtoken");
const { faker } = require("@faker-js/faker");
const User = require("./../models/userModel");

exports.allUsers = (req, res) => {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray((id, result) => {
      res.send(result);
      res.end();
    });
};
exports.findAccount = (req, res) => {
  let id = { _id: ObjectId(req.body._id) };
  let db_connect = dbo.getDb();
  db_connect.collection("accounts").findOne(id, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.loginUser = (req, res) => {
  let loginInfo = { email: req.params.email, password: req.params.password };
  console.log(loginInfo);
  let db_connect = dbo.getDb();
  db_connect.collection("users").findOne(loginInfo, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};
exports.createUser = async (req, res) => {
  let db_connect = dbo.getDb();
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (await db_connect.collection("users").findOne({ email: email })) {
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

    db_connect.collection("users").insertOne(personObj, (err, response) => {
      if (err) throw err;
    });
    db_connect
      .collection("accounts")
      .insertOne(savAccountObj, (err, response) => {
        if (err) throw err;
      });
    db_connect
      .collection("accounts")
      .insertOne(chkAccountObj, (err, response) => {
        if (err) throw err;
      });
    db_connect
      .collection("transactions")
      .insertMany(transArray, (err, response) => {
        if (err) throw err;
      });
    res.send({ message: "Success!" });
    res.status(200).end();
  }
};
