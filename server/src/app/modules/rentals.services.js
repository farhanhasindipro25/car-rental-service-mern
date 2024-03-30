const { RentalModel } = require("./rentals.model");

const POST_RENTAL_TO_DB = async (payload) => {
  const result = await RentalModel.create(payload);
  return result;
};

module.exports = { POST_RENTAL_TO_DB };
