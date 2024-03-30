const express = require("express");
const { getVehicleData } = require("./vehicles.controller");
const vehiclesRouter = express.Router();

vehiclesRouter.get("/", getVehicleData);

module.exports = { vehiclesRouter };
