const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateProductInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.description = validText(data.description) ? data.description : '';
  data.price = validText(data.price) ? data.price : '';

  if (!Validator.isLength(data.title, { min: 1, max: 100 })) {
    errors.title = 'Product Title must be less than 100 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isLength(data.description, { min: 0, max: 255 })) {
    errors.description = 'Product Description must be less than 255 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};