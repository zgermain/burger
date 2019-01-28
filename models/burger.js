//Dependencies
const orm = require("../config/orm.js");

//Burger Model
const burger = {

  all: (callback) => {
    orm.selectAll("burgers", function(result){
      callback(result)
    })
  },
  
  create: (column, value, callback)=>{
    orm.insertOne("burgers", column, value, function(result) {
      callback(result);
    })
  },

  update: (column, value, condition, callback) =>{
    orm.updateOne("burgers", column, value, condition, function(result){
      callback(result);
    });
  }

};

//Export Burger
module.exports = burger;