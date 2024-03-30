const { calculateTotalCharges } = require("../../utils/calculateTotalCharges");
const { RentalModel } = require("./rentals.model");

const POST_RENTAL_TO_DB = async (payload) => {
  try {
    const rental = await RentalModel.create({
      ...payload,
    });
    return rental;
  } catch (error) {
    console.log(error);
  }
};

const GET_RENTALS_FROM_DB = async () => {
  try {
    const rentals = await RentalModel.find();
    const rentalsWithCharges = await Promise.all(
      rentals.map(async (rental) => {
        const populatedRental = await rental.populate("_id");
        const charges = calculateTotalCharges(populatedRental);
        const rentalObject = populatedRental.toObject();
        rentalObject.daily_charge = charges.dailyCharge;
        rentalObject.weekly_charge = charges.weeklyCharge;
        rentalObject.additional_charges_per_unit =
          charges.additionalChargesPerUnit;
        rentalObject.total_charge = charges.totalCharge;
        return rentalObject;
      })
    );
    return rentalsWithCharges;
  } catch (error) {
    // throw new Error("Failed to fetch rental data", error.message);
    console.log(error);
  }
};

module.exports = { POST_RENTAL_TO_DB, GET_RENTALS_FROM_DB };
