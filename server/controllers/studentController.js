const Student = require("../models/student");

//add student
const addStudent = async (req, res) => {
  const { firstname, lastname, email, age, phone, department } = req.body;

  try {
    const student = await Student.create({
      firstname,
      lastname,
      email,
      age,
      phone,
      department,
    });

    return res.status(201).json({ student });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

//get all student
const getAllStudent = async (req, res) => {
  try {
    const student = await Student.find()
      .populate("department", ["department"])
      .sort({ createdAt: -1 });
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

//get single student
const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate(
      "department",
      ["department"]
    );
    if (!student) {
      return res.status(404).json({ error: "student not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

//update student
const updateStudent = async (req, res) => {
  const { firstname, lastname, email, age, phone, department } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { firstname, lastname, email, age, phone, department },
      { new: true }
    );
    return res.status(201).json(student);
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

//delete student

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "student not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  addStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
