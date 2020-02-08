const mongoose = require("mongoose");

const cellSchema = new mongoose.Schema({
  ref: {
    type: String,
    required: true,
    trim: true
  },
  Sheet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sheet"
  },
  value: {
    type: String
  },
  font: {
    type: String
  },
  fontSize: {
    type: Number
  }
});

const Cell = mongoose.model("Cell", cellSchema);

module.exports = Cell;
