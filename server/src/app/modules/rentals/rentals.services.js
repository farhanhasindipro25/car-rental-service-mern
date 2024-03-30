const mongoose = require("mongoose");

const { RentalModel } = require("./rentals.model");

const POST_RENTAL_TO_DB = async (payload) => {
  try {
    const rental = await RentalModel.create({
      ...payload,
    });
    return rental;
  } catch (error) {
    throw new Error("Failed to create rental", error.message);
  }
};

const GET_RENTALS_FROM_DB = async () => {
  try {
    const rentals = await RentalModel.find().populate("_id");
    console.log(rentals);
    return rentals;
  } catch (error) {
    throw new Error("Failed to fetch vehicle data");
  }
};

module.exports = { POST_RENTAL_TO_DB, GET_RENTALS_FROM_DB };
