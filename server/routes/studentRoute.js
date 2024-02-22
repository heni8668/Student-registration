const express = require("express");

const app = express();

const students = require("../controllers/studentController");

// add student

app.post("/addStudent", students.addStudent);

// get all student

app.get("/getallstudent", students.getAllStudent);
app.get("/getstudent/:id", students.getSingleStudent);
app.put("/updatestudent/:id", students.updateStudent);
app.delete("/deletestudent/:id", students.deleteStudent);

module.exports = app;
