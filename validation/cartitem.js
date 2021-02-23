const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCartInput(data){
    let errors = {};

    data.user = validText(data.user) ? data.user : '';
    data.product = validText(data.product) ? data.product : '';

    if (Validator.isEmpty(data.user)){
        errors.user = 'User Id is required.';
    }

    if (Validator.isEmpty(data.product)){
        errors.product = 'Product Id is required.';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}