const router = require("express").Router();
let Employee = require("../models/employeeList.model");

router.route("/").get((req, res) => {
  Employee.find()
    .then(employeeLists => res.json(employeeLists))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;

  const newEmployee = new Employee({
    username,
    title
  });

  newEmployee
    .save()
    .then(() => res.json("Employee added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Employee.findById(req.params.id)
    .then(employeeLists => res.json(employeeLists))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Employee.findByIdAndDelete(req.prams.id)
    .then(() => res.json("Employee deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Employee.findById(req.params.id)
    .then(employeeLists => {
      employeeLists.username = req.body.username;
      employeeLists.title = req.body.title;

      employeeLists
        .save()
        .then(() => res.json("Employees updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
