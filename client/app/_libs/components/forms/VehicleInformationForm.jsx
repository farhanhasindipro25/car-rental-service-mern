"use client";
import React from "react";
import SelectField from "../ui/SelectField";
import { useQuery } from "@tanstack/react-query";
import { generateLabelAndValueForSearchAndSelectField } from "../../utils/generateLabelAndValueForSearchAndSelectField";
import { generateLabelAndValueForVehicleType } from "../../utils/generateLabelandValueForVehicleType";
import VehicleFormSkeleton from "../skeletons/VehicleFormSkeleton";
import VehicleFormError from "../errors/VehicleFormError";
import getVehiclesData from "../../services/getVehiclesData";

export default function VehicleInformationForm({ formData, setFormData }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/vehicles"],
    queryFn: () => getVehiclesData(),
  });
  if (isLoading) return <VehicleFormSkeleton />;
  if (isError) return <VehicleFormError />;
  const vehicleOptions = generateLabelAndValueForSearchAndSelectField(data);
  const typeOptions = generateLabelAndValueForVehicleType(data);

  console.log("Vehicle Data", formData);
  const handleVehicleTypeChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicle_type: selectedOption,
    }));
  };
  const handleVehicleChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicle: selectedOption,
    }));
  };
  console.log(formData);
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Vehicle Information
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-indigo-200">
        <SelectField
          name="vehicle_type"
          id="vehicle_type"
          label="Vehicle Type*"
          options={typeOptions}
          value={formData.vehicle_type || ""}
          onChange={handleVehicleTypeChange}
        />
        <SelectField
          name="vehicle"
          id="vehicle"
          label="Vehicle*"
          options={vehicleOptions}
          value={formData.vehicle || ""}
          onChange={handleVehicleChange}
        />
      </form>
    </div>
  );
}
