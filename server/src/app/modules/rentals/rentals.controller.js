const {
  POST_RENTAL_TO_DB,
  GET_RENTALS_FROM_DB,
} = require("./rentals.services");

const createRental = async (req, res) => {
  try {
    const rental = await POST_RENTAL_TO_DB(req.body);
    res.status(201).json(rental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRentals = async (req, res) => {
  try {
    const rentals = await GET_RENTALS_FROM_DB();
    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRental, getRentals };
