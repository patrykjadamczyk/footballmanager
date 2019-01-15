const express = require("express");
const router = express.Router();

// Point Model
const Point = require("../../models/Point");

// @route GET api/points/test
// @desc test point route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "points works" }));

// @route GET api/points
// @desc get points
// @access Public
router.get("/", (req, res) => {
  Point.find()
    .sort({ date: -1 })
    .then(points => res.json(points))
    .catch(err => res.status(404).json({ nopointsfound: `No points found` }));
});

// @route POST api/points
// @desc create point
// @access Private
router.post(
  "/",
  //   passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //  const { errors, isValid } = validateMatchInput(req.body);

    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
    const matchPoint = new Point({
      userId: req.body.userId,
      matchId: req.body.matchId,
      firstHalfPoints: req.body.firstHalfPoints,
      secondHalfPoints: req.body.secondHalfPoints
    });

    matchPoint
      .save()
      .then(pointsData => res.json(pointsData))
      .catch(err =>
        res.status(404).json({ recordstatus: "record doesnt add" })
      );
  }
);

module.exports = router;
