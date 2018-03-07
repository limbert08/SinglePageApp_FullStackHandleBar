var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// deafault : index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  
  burger.all(function(burgerData) {
    
    res.render("index", { burger_data: burgerData });
  });
});

// callback : index after POST RESPONSE
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  burger.create(req.body.burger_name, function(result) {
    
    console.log(result);
    res.redirect("/");
  });
});

// callback : INDEX after PUT RESPONSE
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    
    console.log(result);
    res.redirect("/");
  });
});

	
module.exports = router;