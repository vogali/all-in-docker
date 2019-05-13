const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let databaseConnection = "Waiting for Database response...";

router.get("/", (req, res) => {
    res.send(databaseConnection);
});

mongoose.connect("mongodb://mongodb:27017/test");

mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
    databaseConnection = "Error connecting to Database";
});

mongoose.connection.on("open", _ => {
    console.log("Connected to Database!");
    databaseConnection = "Connected to Database";
});

module.exports = router;