const Department = require("../models/department");

//add departement
const addDepartments = async (req, res) => {
  try {
    const department = await new Department({
      name: req.body.name,
    });
    department
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: "something went wrong" });
      });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

//get all departments
const getAllDepartments = async (req, res) => {
  try {
    const findAllDepartment = await Department.find().sort({
      createdAt: -1,
    });
    res.status(200).json(findAllDepartment);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

//get single department

const getSingleDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({ error: "department not found" });
    }
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
};

//update selected department
const updateSelectedDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const updateResult = await Department.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.status(200).json(updateResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong" });
  }
};

//delete selected department
const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "department deleted" });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  addDepartments,
  getAllDepartments,
  getSingleDepartment,
  updateSelectedDepartment,
  deleteDepartment,
};
