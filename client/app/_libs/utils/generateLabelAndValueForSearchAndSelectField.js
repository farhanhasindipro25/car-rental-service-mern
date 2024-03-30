export function generateLabelAndValueForSearchAndSelectField(data) {
  const options = data?.map((item) => {
    const label = item.make + " " + item.model + " " + item.year;
    const value = item.id;

    return {
      id: item.id,
      features: item.features,
      bags: item.bags,
      imageURL: item.imageURL,
      make: item.make,
      model: item.model,
      rates: item.rates,
      seats: item.seats,
      types: item.types,
      year: item.year,
      label: label,
      value: value,
    };
  });

  return options || [];
}
