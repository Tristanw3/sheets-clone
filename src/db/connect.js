const mongoose = require("mongoose");

const dbName = "spreadsheet-app";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + dbName, {
  useNewUrlParser: true,
  useCreateIndex: true
});
