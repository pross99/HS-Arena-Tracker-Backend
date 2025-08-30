// routes/Runss.js
const express = require("express");
const Classes = require("../models/Classes");
const router = express.Router();

// GET all classes
router.get("/", async (request, response) => {
  const classes = await Classes.find();
  response.json(classes);
});

router.post("/", async (request, response) => {
  const newClasses = new Classes(request.body);
  const saved = await newClasses.save();
  response.json(saved);
});



module.exports = router;
