const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const db = process.env.DB;

const client = new MongoClient(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
