const axios = require("axios");

const GET_VEHICLES = async () => {
  try {
    const response = await axios.get(
      "https://exam-server-7c41747804bf.herokuapp.com/carsList"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vehicle data from external endpoint");
  }
};

module.exports = { GET_VEHICLES };
