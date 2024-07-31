const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");

    const spotifyRoutes = require("./routes/spotifyRoutes");
    const chatRoutes = require("./routes/chatRoutes");

    app.use("/api", spotifyRoutes);
    app.use("/api", chatRoutes);

    app.listen(PORT, () => {
      console.log(`Node app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
