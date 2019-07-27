const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeListSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    title: { type: String, required: true, trim: true, minlength: 3 }
  },
  {
    timestamps: true
  }
);

const EmployeeList = mongoose.model("EmployeeList", employeeListSchema);

module.exports = EmployeeList;
