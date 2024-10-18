// Name - Aditya Chintha
// Date - 18th October 2024
// File - userController.js
// Student ID - 200595829

// Importing
const { error } = require("console");
const User = require("../models/userModel");
const fs = require("fs");

//Function to import the Users from the JSON
exports.importUsers = async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    const count = await User.countDocuments();
    if (count === 0) {
      await User.create(data);
      console.log("Data imported to MongoDB successfully ");
      res.status(200).send("Data imported successfully ");
    } else {
      console.log("Data already exits");
      res.status(200).send("Data already exits");
    }
  } catch (error) {
    console.error("Error importing data", error);
    res.status(500).send("Error importing data");
  }
};

//Function to retreive all Users
exports.getAllUsers = async (req, res) => {};
