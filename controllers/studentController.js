const Student = require("../models/studentModel");

const get = (req, res) => {
  Student.find()
    .then((data) => {
      res.render("./students/index", { data: data });
    })
    .catch(() => {
      res.send("Error");
    });
};

const post = (req, res) => {
  const { name, age, address, phone, grade, className } = req.body;
  console.log(req.body);
  const image = req.file.originalname;
  const student = new Student({
    name: name,
    age: age,
    address: address,
    phone: phone,
    grade: grade,
    className: className,
    image: image,
  });

  student
    ? student
        .save()
        .then(() => {
          res.send("saved");
        })
        .catch(() => {
          res.send("failed to save student");
        })
    : res.send("failed to save student");
};

const deleteDB = (req, res) => {
  const { id } = req.params;
  Student.findByIdAndDelete(id)
    .then(() => {
      res.send("deleted");
    })
    .catch(() => {
      res.send("delete failed");
    });
};

const update = (req, res) => {
  const { id } = req.params;

  const promise1 = Student.findById(id).then((data) => {
    return data;
  });

  Promise.all([promise1])
    .then((result) => {
      if (req.file) {
        Student.findByIdAndUpdate(id, {
          image: req.file.originalname,
        });
      }
      Student.findByIdAndUpdate(id, {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        phone: req.body.phone,
        grade: req.body.grade,
        className: req.body.className,
      });
    })
    .then(() => {
      res.send("updated");
    });
};

const getCreate = (req, res) => {
  res.render("./students/create");
};

module.exports = { get, post, deleteDB, update, getCreate };
