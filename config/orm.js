//Dependencies
const connection = require("../config/connection.js");

//ORM - Creates an object based on SQL data
const orm = {

  selectAll: (tableInput, callback)=>{

    const queryString = `SELECT * FROM ${tableInput};`;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    })
  },

  insertOne: (table, column, value, callback)=>{

    const queryString = `INSERT INTO ${table} (${column}) 
    VALUES (?)`;

    console.log(queryString);

    connection.query(queryString, [value], function(err, result) {
      if (err) throw err;
    });

    callback(result);
  },

  updateOne: (table, column, value, condition, callback)=>{
    const queryString = `UPDATE ${table} SET ${column} = ${value} WHERE ${condition}`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
    })

    callback(result);
  }
};


//Export to model:
module.exports = orm;