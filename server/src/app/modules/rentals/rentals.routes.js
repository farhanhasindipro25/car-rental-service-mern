const express = require("express");
const { createRental } = require("./rentals.controller");
const rentalRouter = express.Router();

rentalRouter.post("/create-rental", createRental);

module.exports = { rentalRouter };
