const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema({
  className: { type: String, required: true },
},{collection: 'classes'});

module.exports = mongoose.model("Class", ClassesSchema);