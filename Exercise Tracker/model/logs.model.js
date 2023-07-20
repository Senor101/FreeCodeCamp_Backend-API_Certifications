const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  count: Number,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  log: {
    type: [mongoose.Types.ObjectId],
    ref: "Exercise",
  },
});

module.exports = mongoose.model("Log", logSchema);
