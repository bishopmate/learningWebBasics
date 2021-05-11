const express = require('express');
const router = express.Router();

router.all('/', function allAnimals(req, res, next){
  console.log("All Animals are welcome here");
  next();
});

router.get('/', function animalHome(req, res){
  res.send("This is our animal Home"); 
})

module.exports = router;
