const express = require("express");
const route = express.Router();

route.use("/student", require("../routes/student/index"));

module.exports = route;
