// Name - Aditya Chintha
// Date - 18th October 2024
// File - userRoutes.js
// Student ID - 200595829

// Importing
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// Post Route to Import Users
router.post("/import", controller.importUsers);

// Get Route to retrive users
router.get("/", controller.getAllUsers);

// Get route to find user by ID
router.get("/:id", controller.getUserById);

//Get route to find the user by Location
router.get("/location", controller.getUserByLocation);

module.exports = router; //exporting router
