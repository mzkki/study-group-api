const db = require('../config/db');

const getUserByEmail = (email) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  return db.execute(query, [email]);
}

const createUser = (user) => {
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  return db.execute(query, [user.name, user.email, user.password]);
}

module.exports = {
  getUserByEmail,
  createUser
}