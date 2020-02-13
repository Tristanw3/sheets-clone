const mongoose = require("mongoose");

const dbName = "spreadsheet-app";

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + dbName, {
//   useNewUrlParser: true,
//   useCreateIndex: true
// });
mongoose.connect(
  "mongodb+srv://tristanw2:securetest@cluster0-id0nc.mongodb.net/" +
    dbName +
    "?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
