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
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); //Finding the users.
    if (users) {
      res.status(200).send(users);
      console.log("users retrived successfully");
    } else {
      res.status(404).json({ error: "Error retriving users" });
    }
  } catch (error) {
    console.log("error:", error);
    res
      .status(500)
      .json({ message: "error orccured during users retriving", error });
  }
};

exports.getUserById = async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await User.findById(userID); // Finding the user by _id in the collections
    if (!user) {
      return res.status(404).send("User information is not available");
    } else {
      res.status(200).json(user);
      console.log("user information retrieved");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving the user information");
  }
};
