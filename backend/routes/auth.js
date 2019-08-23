const express = require("express");
const router = express.Router();

// @router  GET api/auth
// @desc    Get logged in user
// @access  Private

// ('/') is a ref to api/auth
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @router  POST api/auth
// @desc    Authenticate user and get token
// @access  Public

// ('/') is a ref to api/auth
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
