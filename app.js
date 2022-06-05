const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const PORT = process.env.PORT || 8000;

const url =
  "mongodb+srv://khanh2142:khanh2142@clusterbaitap.wdwzkbw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });

dotenv.config();

app.use(require("./routes"));

app.set("view engine", "pug");

app.set("views", "./views");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log(`app running at port ${PORT}`);
});
