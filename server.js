// Name - Aditya Chintha
// Date - 18th October 2024
// File - server.js
// Student ID - 200595829

//Import
const express = require("express");
const mongoose = require("mongoose");

// Initialize the express app
const app = express();

// Testing the initial route /root route
app.get("/", (req, res) => {
  res.send("Welcome to the Midterm App");
});
