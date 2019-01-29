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
    type: Number
  },
  firstTeamSecondHalfGoals: {
    type: Number
  },
  secondTeamFirstHalfGoals: {
    type: Number
  },
  secondTeamSecondHalfGoals: {
    type: Number
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
        type: Number
      },
      firstTeamSecondHalfGoals: {
        type: Number
      },
      secondTeamFirstHalfGoals: {
        type: Number
      },
      secondTeamSecondHalfGoals: {
        type: Number
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  disabled: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Match = mongoose.model("match", MatchSchema);
