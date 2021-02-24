const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.content = validText(data.content) ? data.content : '';

    if(Validator.isEmpty(data.content)) {
        errors.content = "Sorry, content can't be empty"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}