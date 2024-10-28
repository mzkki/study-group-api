const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'dev',
  password: 'passwordmysql',
  database: 'notes'
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Connected to the database');
  }
})

module.exports = db;
