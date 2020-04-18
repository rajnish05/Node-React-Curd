const Validator = require("validator");
const isEmpty = require("is-empty");

// module used for validating User input
exports.addUserValidation = function (data) {

  let errors = {}
  // Validating userName
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "Name is required";
  }
  else if (typeof data.userName) {
    if (!(data.userName.match(/^[a-zA-Z ]{2,30}$/))) {
      errors.userName = "Invalid Name";
    }
  }
  else {
    errors.userName = "Name can't be Array or Object"
  }

  // Validating userAge
  if (Validator.isEmpty(data.userAge)) {
    errors.userAge = "userAge is required";
  }
  else if (typeof data.userAge == "string") {
    if (!(data.userAge.match(/^(?=.*[0-9])[- +()0-9]{1,2}$/))) {
      errors["userAge"] = "userAge is Invalid";
    }
  }
  else {
    errors.userAge = "userAge cant be  object or Array";
  }
  // Validating Salary
  if (Validator.isEmpty(data.userSalary)) {
    errors.userAgeuserSalary = "userSalary is required";
  }
  else if (typeof data.userSalary == "string") {
    if (!(data.userSalary.match(/^(?=.*[0-9])[- +()0-9]{5,7}$/))) {
      errors["userSalary"] = "userSalary is Invalid";
    }
  }
  else {
    errors.userSalary = "userSalary cant be  object or Array";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
}

