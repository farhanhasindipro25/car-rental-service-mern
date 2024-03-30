const mongoose = require("mongoose");

const { RentalModel } = require("./rentals.model");

const POST_RENTAL_TO_DB = async (payload) => {
  console.log("From payload", payload.vehicle_id);
  try {
    // const vehicleId = mongoose.Types.ObjectId(payload.vehicle_id);

    const rental = await RentalModel.create({
      ...payload,
    });
    console.log(rental);
    return rental;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create rental", error.message);
  }
};

const GET_RENTALS_FROM_DB = async () => {
  try {
    const rentals = await RentalModel.find().populate("Vehicle");
    return rentals;
  } catch (error) {
    throw new Error("Failed to fetch vehicle data");
  }
};

module.exports = { POST_RENTAL_TO_DB, GET_RENTALS_FROM_DB };
