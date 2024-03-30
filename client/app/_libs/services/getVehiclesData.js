"use server";
const getVehiclesData = async () => {
  const response = await fetch(`${process.env.BASE_URL}/vehicles`);

  if (!response.ok) {
    throw new Error("Failed to fetch vehicles data");
  }

  return response.json();
};

export default getVehiclesData;
