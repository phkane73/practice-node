const User = require("../models/user.model");
exports.insert = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).send({ message: "Insert user success!", user });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ message: error.message });
    }
    if (error.code === 11000) {
      return res
        .status(400)
        .send({ message: `Name is ${req.body.username} exist` });
    }
  }
};

exports.delete = async (req, res) => {
  const { username } = req.params;
  const result = await User.findOneAndDelete({ username });
  if (result) {
    return res
      .status(200)
      .send({ message: `Deleted user have username :${username}` });
  }
  return res.status(400).send({ message: `No user name is :${username}` });
};

exports.update = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await User.findOneAndUpdate(
      { username },
      { $set: req.body }
    );
    if (result) {
      return res.send({
        message: "Updated user!",
        contentUpdate: req.body,
        result,
      });
    }
    return res.send({ message: `No user name is :${username}` });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .send({ message: `Name is ${req.body.username} exist` });
    }
  }
};

exports.search = async (req, res) => {
  const searchParams = req.query;
  const user = await User.find(searchParams);
  return res.status(200).send(user);
};
