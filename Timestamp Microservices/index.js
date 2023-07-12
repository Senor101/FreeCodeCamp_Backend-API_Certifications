var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date", (req, res) => {
  let rawDate = new Date(req.params.date);

  if (rawDate.toString() === "Invalid Date") {
    rawDate = new Date(parseInt(req.params.date));
  }

  if (isNaN(rawDate)) {
    return res.status(400).json({ error: "Invalid Date" });
  }
  return res.status(200).json({
    unix: rawDate.getTime(),
    utc: rawDate.toUTCString(),
  });
});

// listen for requests :)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
