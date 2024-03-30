"use server";
const getvehiclesData = async () => {
  const response = await fetch(
    "https://exam-server-7c41747804bf.herokuapp.com/carsList"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch vehicles data");
  }

  return response.json();
};

export default getvehiclesData;
