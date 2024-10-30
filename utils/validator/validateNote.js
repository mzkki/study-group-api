const { validationResult } = require('express-validator');

const validateNote = (payload, res) => {
  const errors = validationResult(payload);

  if (!errors.isEmpty()) {
    res.status(422).json({
      success: false,
      message: 'Your request doesn\'t meet the requirements',
      errors: errors.array()
    })
  }
}

module.exports = validateNote