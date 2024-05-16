const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.route("/insert").get(users.insert);
router.route("/delete").get(users.delete);
router.route("/add").get(users.add);

module.exports = router;
