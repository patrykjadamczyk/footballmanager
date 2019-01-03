const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateTeamInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.country)) {
    errors.country = "Country name is required";
  }

  if (Validator.isEmpty(data.info)) {
    errors.info = "Information is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
