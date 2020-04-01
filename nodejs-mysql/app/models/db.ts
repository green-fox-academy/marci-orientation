const mysql = require("mariadb/callback");
// const dbConfig = require("./db.config");

const connection = mysql.createConnection({
  host: "localhost",
  user: "marci-greenfox",
  password: "password",
  database: "mydb",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
