const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Team Model

const Team = require("../../models/Team");

// Validator

const validateTeamInput = require("../../validation/team");

// @route GET api/teams/test
// @desc test teams route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "teams works" }));

// @route GET api/teams
// @desc get teams
// @access Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Team.find()
      .sort({ date: -1 })
      .then(teams => res.json(teams))
      .catch(err => res.status(404).json({ noteamsfound: `No teams found` }));
  }
);

// @route GET api/teams/:id
// @desc get team id
// @access Public
router.get("/current/:id", (req, res) => {
  Team.findById(req.params.id)
    .then(team => res.json(team))
    .catch(err =>
      res.status(404).json({ noteamfound: `No team found with id` })
    );
});

// @route DELETE api/teams/:id
// @desc delete team id
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Team.findById(req.params.id)
      .then(team => {
        /*  toDo
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ noauthorized: "User not found" });
          }  */
        team.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: "No team found" }));
  }
);

// @route POST api/teams
// @desc create team
// @access Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTeamInput(req.body);

    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    // console.log("id:" + req.body._id);
    // return res.json(req.body);
    const newTeam = new Team({
      country: req.body.country,
      avatar: req.body.avatar,
      info: req.body.info,
      year: req.body.year
    });

    newTeam.save().then(team => res.json(team));
  }
);

// @route POST api/teams/update/:id
// @desc update team id
// @access Public
router.post(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //  const { errors, isValid } = validateTeamInput(req.body);

    // Check Validation
    //  if (!isValid) {
    //    return res.status(400).json(errors);
    //  }

    // Get fields
    const teamFields = {};

    if (req.body.country) teamFields.country = req.body.country;
    if (req.body.info) teamFields.info = req.body.info;
    const errors = {};

    // console.log("params id" + req.params.id);

    Team.findOne({ _id: req.params.id }).then(team => {
      if (team) {
        // Update
        Team.findOneAndUpdate(
          { _id: req.params.id },
          { $set: teamFields },
          { new: true }
        ).then(team => res.json(team));
      } else {
        res.status(400).json(errors);
      }
    });

    // team
    // .save()
    // .then(team => res.json(team))
    // .catch(err =>
    //   res.status(404).json({ teamdontsave: "team dont save" })
    // );
  }
);

module.exports = router;
