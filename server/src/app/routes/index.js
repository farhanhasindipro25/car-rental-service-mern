const express = require("express");
const { rentalRouter } = require("../modules/rentals/rentals.routes");
const { vehiclesRouter } = require("../modules/vehicles/vehicles.routes");
const appRouter = express.Router();

const moduleRoutes = [
  {
    path: "/rentals",
    route: rentalRouter,
  },
  {
    path: "/vehicles",
    route: vehiclesRouter,
  },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));

module.exports = appRouter;
