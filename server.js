// Name - Aditya Chintha
// Date - 18th October 2024
// File - server.js
// Student ID - 200595829

//Import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const userRoutes = require("./src/routes/userRoutes");
const fs = require("fs");

// Initialize the express app
const app = express();

// Setting the Port and Mongo DB Connection
const PORT = process.env.PORT || 3000;
const mongodbURI = process.env.MONGO_URI;

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection has been establish, Cheers!");
  })
  .catch((err) => {
    console.error(err);
  });

//JSON Parsing
app.use(express.json());

// Testing the initial route /root route
app.get("/", (req, res) => {
  res.send("Welcome to the Midterm App");
});

//Route for Users
app.use("/users", userRoutes);

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
