const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello node.js");
});

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("Node app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
