const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.route("/insert").post(users.insert);
router.route("/delete").delete(users.delete);
router.route("/update").get(users.update);

module.exports = router;
