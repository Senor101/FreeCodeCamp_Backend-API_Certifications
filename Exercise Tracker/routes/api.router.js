const express = require("express");

const router = express.Router();

const userRouter = require("./users/user.router");

router.use("/users", require("./users"));

module.exports = router;
