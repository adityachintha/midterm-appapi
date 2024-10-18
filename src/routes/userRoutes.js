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
