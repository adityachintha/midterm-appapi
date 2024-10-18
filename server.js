// Name - Aditya Chintha
// Date - 18th October 2024
// File - server.js
// Student ID - 200595829

//Import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Initialize the express app
const app = express();

// Setting the Port and Mongo DB Connection
const PORT = process.env.PORT || 3000;
const mongodbURI = process.env.MONGO_URI;

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Testing the initial route /root route
app.get("/", (req, res) => {
  res.send("Welcome to the Midterm App");
});

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
