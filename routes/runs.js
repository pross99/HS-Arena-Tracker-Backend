// routes/Runss.js
const express = require("express");
const Runs = require("../models/Run");
const router = express.Router();

// GET all Runss
router.get("/", async (request, response) => {
  const runs = await Runs.find();
  response.json(runs);
});

// POST new Runs
router.post("/", async (request, response) => {
  const newRuns = new Runs(request.body);
  const saved = await newRuns.save();
  response.json(saved);
});

// PUT update Runs
router.put("/:id", async (request, response) => {
  const updated = await Runs.findByIdAndUpdate(request.params.id, request.body, { new: true });
  response.json(updated);
});

// DELETE Runs
router.delete("/:id", async (request, response) => {
  await Runs.findByIdAndDelete(request.params.id);
  response.json({ message: "Runs deleted" });
});

module.exports = router;
