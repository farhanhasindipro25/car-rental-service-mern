const express = require("express");
const { createRental, getRentals } = require("./rentals.controller");
const rentalRouter = express.Router();

rentalRouter.get("/", getRentals);
rentalRouter.post("/create-rental", createRental);

module.exports = { rentalRouter };
