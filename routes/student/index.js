const express = require("express");
const route = express.Router();

const upload = require("../../middleware/upload");

const studentController = require("../../controllers/studentController");

route.get("/", studentController.get);
route.get("/create", studentController.getCreate);
route.get("/update/:id", studentController.getUpdate);
route.post("/update/:id", upload.single("image"), studentController.update);
route.post("/create", upload.single("image"), studentController.post);
route.get("/delete/:id", studentController.deleteDB);

module.exports = route;
