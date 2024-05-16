const express = require("express");
const users = require("../controllers/user.controller");
const router = express.Router();

router.route("/insert").post(users.insert);
router.route("/delete/:username").delete(users.delete);
router.route("/update/:username").patch(users.update);
router.route("/search").get(users.search);

module.exports = router;
