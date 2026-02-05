const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root", // change to your MySQL user
  password: "password", // change to your MySQL password
  database: "youtube_clone",
});

module.exports = pool.promise();
