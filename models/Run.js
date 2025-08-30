const mongoose = require("mongoose");

const RunsSchema = new mongoose.Schema({
  classId: { type: Number, required: true },
  placement: { type: Number, required: true },
  legendaryBracket: { type: String, required: true },
  priceWinnings: { type: Number, required: true },
  note: { type: String, required: false }
},{collection: "runs"});

module.exports = mongoose.model("Run", RunsSchema);