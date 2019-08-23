const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/Users");

// @router  POST api/users
// @desc    register a user
// @access  Public

// ('/') is a ref to api/users
router.post(
  "/",
  // Validating the info given
  [
    check("name", "Please add a name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    // requesting the data that is sent to the route
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("passed");
  }
);

module.exports = router;
