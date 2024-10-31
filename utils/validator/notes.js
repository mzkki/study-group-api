const { body } = require('express-validator');

const noteValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required')
];

module.exports = { noteValidation } 