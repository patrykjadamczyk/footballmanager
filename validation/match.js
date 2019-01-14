const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMatchInput(data) {
  let errors = {};
  /*
  data.firstTeamName = !isEmpty(data.firstTeamName) ? data.firstTeamName : "";

  if (Validator.isEmpty(data.firstTeamName)) {
    errors.firstTeamName = "firstTeamName is required";
  }

  data.secondTeamName = !isEmpty(data.secondTeamName)
    ? data.secondTeamName
    : "";

  if (Validator.isEmpty(data.secondTeamName)) {
    errors.secondTeamName = "secondTeamName is required";
  }
*/
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
