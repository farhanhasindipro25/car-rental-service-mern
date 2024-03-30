const calculateTotalCharges = (rental) => {
  const pickupDate = new Date(rental.pickup_date);
  const returnDate = new Date(rental.return_date);
  const durationHours = Math.abs(returnDate - pickupDate) / 36e5;

  const { rates } = rental._id;
  const { daily, weekly } = rates;

  let totalCharge;
  if (durationHours < 24) {
    totalCharge = daily * Math.ceil(durationHours / 24);
  } else {
    totalCharge = weekly * Math.ceil(durationHours / 168);
  }

  const additionalChargesPerUnit = {
    collision_damage_waiver: parseFloat(rental.collision_damage_waiver) || 0,
    liability_insurance: parseFloat(rental.liability_insurance) || 0,
    rental_tax: parseFloat(rental.rental_tax) || 0,
  };

  const totalAdditionalCharges =
    additionalChargesPerUnit.collision_damage_waiver +
    additionalChargesPerUnit.liability_insurance +
    additionalChargesPerUnit.rental_tax;

  const totalChargeWithAdditional = totalCharge + totalAdditionalCharges;

  return {
    dailyCharge: daily,
    weeklyCharge: weekly,
    additionalChargesPerUnit,
    totalCharge: totalChargeWithAdditional,
  };
};

module.exports = { calculateTotalCharges };
