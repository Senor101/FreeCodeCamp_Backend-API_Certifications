const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  count: Number,
  log: {
    type: [mongoose.Types.ObjectId],
    ref: "Exercise",
  },
});

module.exports = mongoose.model("Log", logSchema);
