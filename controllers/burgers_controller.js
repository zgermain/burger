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

  const newBurger = req.body;
  console.log(newBurger);

  //calls the burger model create method in order to create a new burger object 
  burger.create("burger_name", newBurger.name, function(result) {

    // converts result into json
    res.json({ id: result.insertId})
  });

});

// //change burger?
router.put("/api/burgers/:id", function(req, res) {
  const burgerToUpdate = req.params;
  const newDevour = !req.body.devoured;

  const condition = `id = ${burgerToUpdate.id}`;
  console.log(`Condition: ${condition}`);

  burger.update("devoured", newDevour, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

});


//Export Router
module.exports = router;