export function generateLabelAndValueForVehicleType(data) {
  const options = data?.map((item) => {
    const label = item.type;
    const value = item.type.toUpperCase();

    return {
      label: label,
      value: value,
    };
  });

  return options || [];
}
