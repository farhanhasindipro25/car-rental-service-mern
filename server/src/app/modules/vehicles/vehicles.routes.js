const express = require("express");
const { getVehicles } = require("./vehicles.controller");
const vehiclesRouter = express.Router();

vehiclesRouter.get("/", getVehicles);

module.exports = { vehiclesRouter };
