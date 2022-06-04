const Student = require("../models/studentModel");

const get = (req, res) => {
  Student.find()
    .then((data) => {
      let time = data.map((item) => {
        var date = new Date(item.age);
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        return `${d}/${m}/${y}`;
      });
      res.render("./students/index", { data: data, time: time });
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

  const promise1 =
    req.file && Student.findByIdAndUpdate(id, { image: req.file.originalname });

  const promise2 = Student.findByIdAndUpdate(id, {
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    phone: req.body.phone,
    grade: req.body.grade,
    className: req.body.className,
  });

  Promise.all([promise1, promise2]).finally(() => {
    res.redirect("/student");
  });
};

const getCreate = (req, res) => {
  res.render("./students/create");
};

const getUpdate = (req, res) => {
  Student.findById(req.params.id).then((data) => {
    var date = new Date(data.age);
    let time = date.toISOString().slice(0, 10);
    res.render("./students/update", { data: data, time: time });
  });
};

module.exports = { get, post, deleteDB, update, getCreate, getUpdate };
