// Name - Aditya Chintha
// Date - 18th October 2024
// File - userModel.js
// Student ID - 200595829

//Importing
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating the Schema
const UserSchema = new Schema({
  userId: { type: Number },
  userData: {
    name: { type: String },
    age: { type: Number },
    location: { type: String },
    email: { type: String },
  },
});

const User = mongoose.model("UserMidterm", UserSchema);
module.exports = User;
