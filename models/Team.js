mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  info: {
    type: String
  },
  years: [
    {
      date: {
        type: Date,
        required: true
      },
      player: {
        name: {
          type: String
        },
        surname: {
          type: String
        }
      },
      coatch: {
        name: {
          type: String
        },
        surname: {
          type: String
        }
      }
    }
  ]
});
module.exports = Team = mongoose.model("team", TeamSchema);
