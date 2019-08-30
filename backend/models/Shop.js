const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  colour: {
    type: String,
    require: true
  },
  size: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("content", ShopSchema);
