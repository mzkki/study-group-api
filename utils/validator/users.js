const { body } = require('express-validator');
const userModel = require('../../models/users');

const registerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email is invalid')
    .custom(async (value) => {
      const [user] = await userModel.getUserByEmail(value);
      if (user.length > 0) throw new Error('Email is already used');
      return false;
    }),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('confirmPassword').notEmpty().withMessage('Password confirmation is required')
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error('Password confirmation does not match password');
      return true;
    }).withMessage('Password confirmation does not match password'),
]

const loginValidation = [
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email is invalid'),
  body('password').notEmpty().withMessage('Password is required')
]

module.exports = {
  registerValidation,
  loginValidation
}
