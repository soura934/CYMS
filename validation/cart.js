const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCartInput(data){
    let errors = {};

    data.price = validText(data.price) ? data.price : '';

    if (Validator.isEmpty(data.price)){
        errors.price = 'Item needs a price.';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}