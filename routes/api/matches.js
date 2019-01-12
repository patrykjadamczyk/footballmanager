const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post Model
const Match = require("../../models/Match");

// Validation
const validateMatchInput = require("../../validation/match");

// @route GET api/matches/test
// @desc test post route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "matches works" }));

// @route GET api/matches
// @desc get matches
// @access Public
router.get("/", (req, res) => {
  Match.find()
    .sort({ date: -1 })
    .then(matches => res.json(matches))
    .catch(err => res.status(404).json({ nomatchesfound: `No matches found` }));
});

// @route GET api/matches/:id
// @desc get match id
// @access Public
router.get("/:id", (req, res) => {
  Match.findById(req.params.id)
    .then(match => res.json(match))
    .catch(err =>
      res.status(404).json({ nomatchfound: `No match found with id` })
    );
});

// @route GET api/matches/current/:id
// @desc get match id
// @access Public
router.get("/current/:id", (req, res) => {
  Match.findById(req.params.id)
    .then(match => res.json(match))
    .catch(err =>
      res.status(404).json({ nomatchfound: `No match found with id` })
    );
});

// @route POST api/matches/betting/:id
// @desc Add betting to match
// @access Private
router.post(
  "/betting/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMatchInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Match.findById(req.params.id)
      .then(match => {
        // get fields
        const newBetting = {};
        newBetting.userId = req.user.id;
        newBetting.userName = req.user.name;

        if (req.body.firstTeamFirstHalfGoals)
          newBetting.firstTeamFirstHalfGoals = req.body.firstTeamFirstHalfGoals;
        if (req.body.firstTeamSecondHalfGoals)
          newBetting.firstTeamSecondHalfGoals =
            req.body.firstTeamSecondHalfGoals;
        if (req.body.secondTeamFirstHalfGoals)
          newBetting.secondTeamFirstHalfGoals =
            req.body.secondTeamFirstHalfGoals;
        if (req.body.secondTeamSecondHalfGoals)
          newBetting.secondTeamSecondHalfGoals =
            req.body.secondTeamSecondHalfGoals;

        let UserBettingExists = false;

        match.bettings.map(betting => {
          if (req.user.id == betting.userId) {
            UserBettingExists = true;
            UserBettingId = betting._id;
            console.log("user exists");
          }
        });

        if (UserBettingExists == true) {
          //  console.log(match.bettings);
          // Update
          console.log("update");

          // newBetting._id = UserBettingId;
          // match.bettings.unshift(newBetting);
          // match.save().then(match => res.json(match));

          /* match.bettings
            .findOneAndUpdate({ userId: req.user.id }, { $set: newBetting })
            .then(match => res.json(match));*/
        } else {
          console.log("add");
          match.bettings.unshift(newBetting);
          match.save().then(match => res.json(match));
        }

        // Add to betting array

        // ;
        // save
        //  match.save().then(match => res.json(match));
        //      return res.json({ postid: post });
      })
      .catch(err => res.status(404).json({ matchnotfound: "match not found" }));
  }
);

// @route POST api/matches
// @desc create match
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMatchInput(req.body);

    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newMatch = new Match({
      user: req.user.id,
      firstTeamName: req.body.firstTeamName,
      secondTeamName: req.body.secondTeamName,
      firstTeamFirstHalfGoals: req.body.firstTeamFirstHalfGoals,
      firstTeamSecondHalfGoals: req.body.firstTeamSecondHalfGoals,
      secondTeamFirstHalfGoals: req.body.secondTeamFirstHalfGoals,
      secondTeamSecondHalfGoals: req.body.secondTeamSecondHalfGoals
    });

    newMatch.save().then(match => res.json(match));
  }
);

// @route DELETE api/matches/:id
// @desc delete match id
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Match.findById(req.params.id)
      .then(match => {
        /*  toDo
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ noauthorized: "User not found" });
          }  */
        match.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: "No match found" }));
  }
);

module.exports = router;
