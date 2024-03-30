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
    vehicle_type: {
      type: String,
      required: true,
    },
    vehicle: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    collision_damage_waiver: {
      type: String,
    },
    liability_insurance: {
      type: String,
    },
    rental_tax: {
      type: String,
    },
  },
  { timestamps: true }
);

const RentalModel = model("Rental", rentalSchema);

module.exports = { RentalModel };
