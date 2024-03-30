const { GET_VEHICLES } = require("./vehicles.services");

const getVehicles = async (req, res) => {
  try {
    const vehicles = await GET_VEHICLES();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getVehicles };
