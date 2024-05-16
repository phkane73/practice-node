const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  fullname: {
    type: String,
  },
  role: {
    type: String,
  },
});
