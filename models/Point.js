const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  matchId: {
    type: String,
    require: true
  },
  userId: {
    type: String,
    require: true
  },
  firstHalfPoints: {
    type: Number,
    require: true
  },
  secondHalfPoints: {
    type: Number,
    require: true
  }
});

module.exports = Point = mongoose.model("point", PointSchema);
