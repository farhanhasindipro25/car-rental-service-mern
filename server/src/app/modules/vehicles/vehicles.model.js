const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  bags: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  rates: {
    hourly: {
      type: Number,
      required: true,
    },
    daily: {
      type: Number,
      required: true,
    },
    weekly: {
      type: Number,
      required: true,
    },
  },
  imageURL: {
    type: String,
    required: true,
  },
});

const VehicleModel = model("Vehicle", vehicleSchema);

module.exports = { VehicleModel };
