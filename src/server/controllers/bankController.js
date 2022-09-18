const dbo = require("./../db/conn");
const { faker } = require("@faker-js/faker");

exports.getAccount = async (req, res) => {
  let db_connect = dbo.getDb();
  let person = { email: req.params.user, type: req.params.type };

  db_connect.collection("accounts").findOne(person, (err, result) => {
    res.send(result);
    res.end();
  });
};

exports.getBalance = async (req, res) => {
  console.log(req.params);
  const accountType = req.params.type.toLowerCase();
  const email = req.params.email.toLowerCase();
  if (accountType === "savings" || accountType === "checking") {
    let db_connect = dbo.getDb();
    const accountArray = [];
    const collection = db_connect.collection("transactions");
    const transactionList = [
      {
        $match: {
          email: `${email}`,
          type: `${accountType}`,
        },
      },
    ];
    const aggCursor = collection.aggregate(transactionList);
    for await (const doc of aggCursor) {
      accountArray.push(doc);
    }

    res.send(accountArray);
  } else {
    res.end("That is not a proper account");
  }
};

exports.transferFunds = (req, res) => {
  let db_connect = dbo.getDb();
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
  db_connect
    .collection("transactions")
    .insertMany([transferSend, transferReceive], (err, result) => {
      if (err) throw err;
    });
  res.end();
};

exports.depositFunds = (req, res) => {
  let db_connect = dbo.getDb();
  let deposit = {
    email: req.body.email,
    type: req.body.type,
    company: "WBAT",
    amount: Math.abs(req.body.amount),
    transactionType: "deposit",
    date: new Date(),
  };
  db_connect.collection("transactions").insert(deposit, (id, result) => {
    res.end();
  });
};
exports.withdrawFunds = (req, res) => {
  let db_connect = dbo.getDb();
  let withdraw = {
    email: req.body.email,
    type: req.body.type,
    company: "WBAT",
    amount: -Math.abs(req.body.amount),
    transactionType: "withdraw",
    date: new Date(),
  };
  db_connect.collection("transactions").insert(withdraw, (id, result) => {
    res.end();
  });
};

exports.deleteAll = (req, res) => {
  let db_connect = dbo.getDb();
  db_connect.collection("transactions").deleteMany({});
  db_connect.collection("users").deleteMany({});
  db_connect.collection("accounts").deleteMany({});
  res.status(200).end();
};
