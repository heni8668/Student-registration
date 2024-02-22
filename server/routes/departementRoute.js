const express = require("express");

const app = express();

const department = require("../controllers/departementController");

// add department

app.post("/addDepartment", department.addDepartments);

// get all departments
app.get("/getalldepartments", department.getAllDepartments);

//get single department

app.get("/getsingledepartment/:id", department.getSingleDepartment);

//update department
app.put("/updatedepartment/:id", department.updateSelectedDepartment);

//delete department

app.delete("/deletedepartment/:id", department.deleteDepartment);

module.exports = app;
