const User = require("../models/user.model");
exports.insert = async (req, res) => {
  const userExist = await User.findOne({ username: req.body.username });
  if (userExist) {
    return res.status(200).send("User is exist!");
  }
  const user = new User(req.body);
  await user.save();
  return res.status(200).send(user);
};

exports.delete = (req, res) => {
  res.send("Is delete");
};

exports.update = (req, res) => {
  res.send("Is update");
};
