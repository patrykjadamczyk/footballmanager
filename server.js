const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const matches = require("./routes/api/matches");
const teams = require("./routes/api/teams");
const match_finals = require("./routes/api/match_finals");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config

require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

// Use Routes
app.use("/api/users", users);
app.use("/api/matches", matches);
app.use("/api/teams", teams);
app.use("/api/match_finals", match_finals);

// serv assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
