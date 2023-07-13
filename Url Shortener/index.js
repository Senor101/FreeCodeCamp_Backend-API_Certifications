require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dns = require("dns");
const validUrl = require("valid-url");

const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.post("/api/shorturl", (req, res) => {
  const { url } = req.body;
  if (!validUrl.isWebUri(url)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  short_url = Math.floor(Math.random() * 100000);
  return res.status(200).json({
    original_url: url,
    short_url,
  });
});

app.get("/api/shorturl/:shorturl", (req, res) => {
  const shortUrlId = req.params.shorturl;
  const url = dns.lookup(shortUrlId, (err, address, family) => {
    if (err) {
      return res.status(400).json({ error: "Invalid short url" });
    }
    return res.redirect(address);
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
