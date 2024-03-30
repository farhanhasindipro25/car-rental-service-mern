"use server";
export const createRental = async (rentalData) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/rentals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rentalData),
    });

    if (!response.ok) {
      throw new Error("Failed to create rental");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to create rental: ${error.message}`);
  }
};
