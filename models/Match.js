const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MatchSchema = new Schema({
  firstTeamName: {
    type: String,
    required: true
  },
  secondTeamName: {
    type: String,
    required: true
  },
  firstTeamFirstHalfGoals: {
    type: String
  },
  firstTeamSecondHalfGoals: {
    type: String
  },
  secondTeamFirstHalfGoals: {
    type: String
  },
  secondTeamSecondHalfGoals: {
    type: String
  },
  bettings: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      userName: {
        type: String
      },
      firstTeamFirstHalfGoals: {
        type: String
      },
      firstTeamSecondHalfGoals: {
        type: String
      },
      secondTeamFirstHalfGoals: {
        type: String
      },
      secondTeamSecondHalfGoals: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Match = mongoose.model("match", MatchSchema);
