// import mysql from "mysql2"
const mysql = require('mysql2')
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
connection.on('error', (err) => {
  console.error('MySQL error:', err);
});
module.exports = db.promise()