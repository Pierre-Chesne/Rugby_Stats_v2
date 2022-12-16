const express = require("express");
const index = express.Router();

index.get("/api", (req, res) => {
  res.send({ message: "API v.1.0.0" });
});

module.exports = index;