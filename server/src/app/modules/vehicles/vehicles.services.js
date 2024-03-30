const axios = require("axios");
const { VehicleModel } = require("./vehicles.model");

const GET_VEHICLES = async () => {
  try {
    const response = await axios.get(
      "https://exam-server-7c41747804bf.herokuapp.com/carsList"
    );
    const vehiclesData = response?.data?.data;

    const existingVehicles = await VehicleModel.find({}, "id");
    const existingIds = existingVehicles.map((vehicle) => vehicle.id);

    const newVehiclesData = vehiclesData.filter(
      (vehicle) => !existingIds.includes(vehicle.id)
    );

    const sanitizedData = newVehiclesData.map((vehicle) => ({
      ...vehicle,
      imageURL: vehicle.imageURL || "default_image_url.jpg",
      rates: {
        hourly: vehicle.rates?.hourly || 0,
        daily: vehicle.rates?.daily || 0,
        weekly: vehicle.rates?.weekly || 0,
      },
      bags: vehicle.bags || 0,
      seats: vehicle.seats || 0,
      type: vehicle.type || "Unknown",
      year: vehicle.year || 0,
      model: vehicle.model || "Unknown",
      make: vehicle.make || "Unknown",
      id: vehicle.id || "unknown_id",
    }));

    if (newVehiclesData.length > 0) {
      await VehicleModel.insertMany(sanitizedData);
    }

    return vehiclesData;
  } catch (error) {
    console.error("Error fetching or saving vehicles:", error);
    throw new Error(
      "Failed to fetch vehicle data from external endpoint and save to database"
    );
  }
};

module.exports = { GET_VEHICLES };
