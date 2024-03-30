const express = require("express");
const { rentalRouter } = require("../modules/rentals.routes");
const appRouter = express.Router();

const moduleRoutes = [
  {
    path: "/rentals",
    route: rentalRouter,
  },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));

module.exports = appRouter;
