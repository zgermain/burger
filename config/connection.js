//Dependencies
const mysql = require("mysql");
const connection;
//Database Connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "W84dinner!",
    database: "burgers_db"
  })
}
;

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
