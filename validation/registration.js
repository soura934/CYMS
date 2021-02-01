const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegistrationInput(data){
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : ""
    data.lastName = validText(data.lastName) ? data.lastName : ""
    data.email = validText(data.email) ? data.email : ""
    data.password = validText(data.password) ? data.password : ""
    data.confirm = validText(data.confirm) ? data.confirm : ""

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "name field cannot be empty."
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "name field cannot be empty."
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid Email";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field cannot be empty."
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required.";
    }

    if (!Validator.isLength(data.password, {min: 8})){
        errors.password = "Password must contain at least 8 characters."
    }

    if (!Validator.equals(data.password, data.confirm)) {
        errors.confirm = "Entry doesn't match password field."
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}