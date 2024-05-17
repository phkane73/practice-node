const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ValidationError } = mongoose.Error;
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username is unique"],
  },
  fullname: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  project: {
    type: [String],
    default: [],
  },
  activeYn: {
    type: String,
    enum: {
      values: ["Y", "N"],
      message: "Value must is Y or N",
    },
    default: "Y",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
