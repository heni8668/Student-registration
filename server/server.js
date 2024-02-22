const express = require("express");
require("dotenv").config();
require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");

// import routes
const department = require("./routes/departementRoute");
const student = require("./routes/studentRoute");

const app = express();

//port
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

//routes
app.use("/api/departments", department);
app.use("/api/students", student);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
