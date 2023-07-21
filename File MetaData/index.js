var express = require("express");
var cors = require("cors");
require("dotenv").config();

const multer = require("multer");

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
