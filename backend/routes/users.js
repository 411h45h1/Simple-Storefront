const express = require("express");
const router = express.Router();

// @router  POST api/users
// @desc    register a user
// @access  Public

// ('/') is a ref to api/users
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
