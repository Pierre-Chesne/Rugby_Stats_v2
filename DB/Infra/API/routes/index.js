const express = require("express");
const index = express.Router();
//const db = require("../config/db")

index.get("/", (req, res) => {
  res.send({ message: "API v.1.0.0" });
});

module.exports = index;







