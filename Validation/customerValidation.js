const Validator = require("validator");
const isEmpty = require("is-empty");

exports.addCustomerValidation = function (data) {
  
  let errors = {}
  // Validating userName
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "firstName is required";
  }
  else if (typeof data.firstName) {
    if (!(data.firstName.match(/^[a-zA-Z ]{2,30}$/))) {
      errors.firstName = "Invalid Name";
    }
  }
  else {
    errors.firstName = "Name can't be Array or Object"
  }

    // Validating lastName
  
    if (Validator.isEmpty(data.lastName)) {
      errors.lastName = "lastName is required";
    }
    else if (typeof data.lastName) {
      if (!(data.lastName.match(/^[a-zA-Z ]{2,30}$/))) {
        errors.lastName = "Invalid Name";
      }
    }
    else {
      errors.lastName = "Name can't be Array or Object"
    }
 

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

