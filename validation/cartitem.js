const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCartInput(data){
    let errors = {};

    data.user = validText(data.user_id) ? data.user : '';
    data.cartItem = validText(data.product_id) ? data.cartItem : '';

    if (Validator.isEmpty(data.user_id)){
        debugger
        errors.user = 'User Id is required.';
    }

    if (Validator.isEmpty(data.product_id)){
        debugger
        errors.cartItem = 'Product Id is required.';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}