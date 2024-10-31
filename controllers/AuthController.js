require('dotenv').config();
const usersModel = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateRequest = require('../utils/validator');

const register = async (req, res, next) => {
  if (!validateRequest(req, res)) return;

  try {
    hashedPassword = await bcrypt.hash(req.body.password, 10);
    const [result] = await usersModel.createUser({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        id: result.insertId,
        email: req.body.email
      }
    });
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  if (!validateRequest(req, res)) return;
  try {
    const [user] = await usersModel.getUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Login failed'
      });
    }
    const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Login failed, email or password is wrong'
      });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '30m' });
    res.status(200).json({
      success: true,
      message: 'Login success',
      data: {
        token
      }
    });
  } catch (err) {
    next(err)
  }
}

module.exports = {
  register,
  login
}
