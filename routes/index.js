const express = require("express");
const route = express.Router();

route.use("/student", require("../routes/student/index"));
route.get("/", (req, res) => {
  res.redirect("/student");
});

module.exports = route;
