const express = require("express");
const route = express.Router();

const upload = require("../../middleware/upload");

const studentController = require("../../controllers/studentController");

route.get("/", studentController.get);
route.get("/create", studentController.getCreate);
route.post("/create", upload.single("image"), studentController.post);
route.delete("/delete/:id", studentController.deleteDB);
route.put("/update/:id", upload.single("image"), studentController.update);

module.exports = route;
