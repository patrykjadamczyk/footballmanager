const express = require("express");
const router = express.Router();

// MatchFinal Model
const MatchFinal = require("../../models/MatchFinal");

// Match Model
const Match = require("../../models/Match");

// @route GET api/match_final/test
// @desc test match final route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "match final works" }));

// @route GET api/match_finals
// @desc get match final
// @access Public
router.get("/", (req, res) => {
  MatchFinal.find()
    //.sort({ date: -1 })
    .then(matchFinal => res.json(matchFinal))
    .catch(err =>
      res.status(404).json({ nomatchfinalfound: `No match final found` })
    );
});

// @route POST api/match_finals
// @desc create point
// @access Private
router.post(
  "/",
  //   passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Match.findById(req.body.matchId)
      .then(match => {
        if (match) {
          //whitch team won first half in match

          let firstHalfWinner = "";

          if (match.firstTeamFirstHalfGoals > match.secondTeamFirstHalfGoals) {
            firstHalfWinner = "firstTeam";
          } else if (
            match.firstTeamFirstHalfGoals < match.secondTeamFirstHalfGoals
          ) {
            firstHalfWinner = "secondTeam";
          } else {
            firstHalfWinner = "draw";
          }

          //whitch team won second half in match

          let secondHalfWinner = "";

          if (
            match.firstTeamSecondHalfGoals > match.secondTeamSecondHalfGoals
          ) {
            secondHalfWinner = "firstTeam";
          } else if (
            match.firstTeamSecondHalfGoals < match.secondTeamSecondHalfGoals
          ) {
            secondHalfWinner = "secondTeam";
          } else {
            secondHalfWinner = "draw";
          }

          //  bettings

          match.bettings.map(betting => {
            if (betting) {
              //  set default points
              const pointsSchema = {
                FirstHalTargetWinner: 1, // when user quest witch team won first half match
                FirstHalfTargetResult: 2, // when user quest exactly result for first half match
                SecondHalfTargetWinner: 2, // when user quest witch team won second half match
                SecondHalfTargetResult: 3 // when user quest exactly result for second half match
              };

              //  set default values
              const matchFinalData = {
                userId: betting.userId,
                matchId: match._id,
                firstHalfPoints: 0,
                secondHalfPoints: 0,
                firstHalfHitWinner: 0,
                secondHalfHitWinner: 0,
                firstHalfHitResult: 0,
                secondHalfHitResult: 0,
                totalPoints: 0
              };

              //whitch team won first half in betting

              let firstHalfBettingWinner = "";

              if (
                betting.firstTeamFirstHalfGoals >
                betting.secondTeamFirstHalfGoals
              ) {
                firstHalfBettingWinner = "firstTeam";
              } else if (
                betting.firstTeamFirstHalfGoals <
                betting.secondTeamFirstHalfGoals
              ) {
                firstHalfBettingWinner = "secondTeam";
              } else {
                firstHalfBettingWinner = "draw";
              }

              //whitch team won second half in betting

              let secondHalfBettingWinner = "";

              if (
                betting.firstTeamSecondHalfGoals >
                betting.secondTeamSecondHalfGoals
              ) {
                secondHalfBettingWinner = "firstTeam";
              } else if (
                betting.firstTeamSecondHalfGoals <
                betting.secondTeamSecondHalfGoals
              ) {
                secondHalfBettingWinner = "secondTeam";
              } else {
                secondHalfBettingWinner = "draw";
              }

              //compare whose team won first half in match and betting

              // when user quest exactly result for first half match
              if (
                match.firstTeamFirstHalfGoals ==
                  betting.firstTeamFirstHalfGoals &&
                match.secondTeamFirstHalfGoals ==
                  betting.secondTeamFirstHalfGoals
              ) {
                matchFinalData.firstHalfPoints =
                  pointsSchema.FirstHalfTargetResult;
                matchFinalData.firstHalfHitResult = 1;
              } else if (firstHalfWinner == firstHalfBettingWinner) {
                // when user quest witch team won first half match
                matchFinalData.firstHalfPoints =
                  pointsSchema.FirstHalTargetWinner;
                matchFinalData.firstHalfHitWinner = 1;
              } else {
              }

              // when user quest exactly result for second half match
              if (
                match.firstTeamSecondHalfGoals ==
                  betting.firstTeamSecondHalfGoals &&
                match.secondTeamSecondHalfGoals ==
                  betting.secondTeamSecondHalfGoals
              ) {
                matchFinalData.secondHalfPoints =
                  pointsSchema.SecondHalfTargetResult;
                matchFinalData.secondHalfHitResult = 1;
              } else if (secondHalfWinner == secondHalfBettingWinner) {
                // when user quest witch team won second half match
                matchFinalData.secondHalfPoints =
                  pointsSchema.SecondHalfTargetWinner;
                matchFinalData.secondHalfHitWinner = 1;
              } else {
              }

              matchFinalData.totalPoints =
                matchFinalData.firstHalfPoints +
                matchFinalData.secondHalfPoints;

              const matchFinal = new MatchFinal(matchFinalData);
              console.log(matchFinalData);
              matchFinal
                .save()
                .then(matchFinal => res.json(matchFinal))
                .catch(err =>
                  res
                    .status(404)
                    .json({ recordstatus: "metch final record doesnt add" })
                );
            }
          });
        }
      })
      .catch(err =>
        res.status(404).json({ nomatchesfound: `No matches found` })
      );
  }
);

module.exports = router;
