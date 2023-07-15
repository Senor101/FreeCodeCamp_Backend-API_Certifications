const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.post("/:_id/exercises", (req, res) => {});

router.get("/:_id/logs", (req, res) => {});

module.exports = router;
