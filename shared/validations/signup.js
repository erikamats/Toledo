const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

function validateInput(data) {
  let errors = {}

  if(Validator.isEmpty(data.fullName)){
      errors.fullName = 'We need your full name'
  }
  if(Validator.isEmpty(data.email)){
      errors.email = 'You must provide your email'
  }
  if(!Validator.isEmail(data.email)){
      errors.email = 'The email you provided is not a valid email'
  }
  if(Validator.isEmpty(data.username)){
      errors.username = 'We need a username for your account'
  }
  if(Validator.isEmpty(data.passwordConfirmation)){
      errors.passwordConfirmation = 'You must provide a password'
  }
  
  if(!Validator.equals(data.password, data.passwordConfirmation)){
      errors.passwordConfirmation = 'Passwords did not match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports.validateInput = validateInput;