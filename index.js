const bodyParser = require("body-parser");
const express = require("express");
const router = require("./app/routes");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

async function startServer() {
  try {
    await mongoose.connect(
      "mongodb+srv://phkane732002:OOIXmNoLOjQ50Fkj@practice.f9ubcid.mongodb.net/?retryWrites=true&w=majority&appName=practice"
    );
    console.log("Connected to the database");
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
