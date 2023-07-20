const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  description: String,
  duration: String,
  date: Date,
});

module.exports = mongoose.model("Exercise", exercisesSchema);
