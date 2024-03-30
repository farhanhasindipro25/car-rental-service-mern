const { Schema, model } = require("mongoose");

const rentalSchema = new Schema(
  {
    reservation_id: {
      type: Number,
    },
    pickup_date: {
      type: String,
      required: true,
    },
    return_date: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
    },
    discount: {
      type: String,
    },
  },
  { timestamps: true }
);

const RentalModel = model("Rental", rentalSchema);

module.exports = { RentalModel };
