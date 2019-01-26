//Dependencies
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
    //Ask Jon - what is router for?

//Router

// //Gets data stored in "burger" model, stores burger data in object for handlebars. Then renders this data for the "index"
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//  //Create a new "burger"
    //router takes request from api/burgers
router.post("/api/burgers", function(req, res) {

  //burger model creates a new burger object (for SQL?)
  burger.create([
    "burger_name", "devoured"
  ]), [

    //request from the body of the html form
    req.body.burgerName, req.body.devoured
  ], function(result) {

    //? 
    res.json({ id: result.insertId})
  }
});

// //change burger?
router.put();


//Export Router
module.exports = router;