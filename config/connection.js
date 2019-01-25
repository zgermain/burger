//Dependencies
const mysql = require("mysql");

//Database Connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "W84dinner!",
  database: "burgers_db"
});

//from bootcamp cats_db example
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export for ORM
module.exports =connection;
