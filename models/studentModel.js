const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    name: String,
    age: Number,
    address: String,
    phone: String,
    grade: String,
    className: String,
    image: String,
  },
  { collection: "students" }
);

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
