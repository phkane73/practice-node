const bodyParser = require("body-parser");
const express = require("express");
const router = require("./app/routes");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

async function startServer() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to the database");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
