const express = require("express");
const router = express.Router();

//CRUD route

// @router  GET api/content
// @desc    Get all episodes
// @access  Public

router.get("/", (req, res) => {
  res.send("Get episodes");
});

// @router  POST api/content
// @desc    Add new episode
// @access  Private

router.post("/", (req, res) => {
  res.send("Add episode");
});

// @router  PUT api/content/:id
// @desc    Get all episodes
// @access  Private

router.put("/:id", (req, res) => {
  res.send("update episode");
});

// @router  PUT api/content/:id
// @desc    Get all episodes
// @access  Private

router.delete("/:id", (req, res) => {
  res.send("Delete episode");
});

module.exports = router;
