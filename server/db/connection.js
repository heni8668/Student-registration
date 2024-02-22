const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => console.log("error" + error.message));
