const mongoose = require("mongoose");

const sheetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Sheet = mongoose.model("Sheet", sheetSchema);

module.exports = Sheet;
