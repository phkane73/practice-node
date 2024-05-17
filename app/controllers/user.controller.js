const User = require("../models/user.model");
exports.insert = async (req, res) => {
  try {
    const { username } = req.body;
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.send({ message: "User is exist!" });
    }
    const user = new User(req.body);
    await user.save();
    return res.send({ message: "Insert user success!", user });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.send({ message: error.message });
    }
  }
};

exports.delete = async (req, res) => {
  const { username } = req.params;
  const result = await User.findOneAndDelete({ username });
  if (result) {
    return res.send({ message: `Deleted user have username :${username}` });
  }
  return res.send({ message: `No user name is :${username}` });
};

exports.update = async (req, res) => {
  const { username } = req.params;
  const result = await User.findOneAndUpdate({ username }, { $set: req.body });
  console.log(result);
  if (result) {
    return res.send({
      message: "Updated user!",
      contentUpdate: req.body,
      result,
    });
  }
  return res.send({ message: `No user name is :${username}` });
};

exports.search = async (req, res) => {
  const searchParams = req.query;
  const user = await User.find(searchParams);
  return res.send(user);
};
