const { MongoClient } = require("mongodb");
const db = process.env.DB;

const client = new MongoClient(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      if (db) {
        _db = db.db("users");
        console.log("Successfully connected");
      }
      return callback(err);
    });
  },
  getDb: () => {
    return _db;
  },
};
