const mongoose = require("mongoose");

const dbName = "spreadsheet-app";

mongoose.connect("mongodb://127.0.0.1:27017/" + dbName, {
  useNewUrlParser: true,
  useCreateIndex: true
});
