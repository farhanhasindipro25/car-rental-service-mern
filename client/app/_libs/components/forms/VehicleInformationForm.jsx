"use client";
import React from "react";
import SelectField from "../ui/SelectField";
import { useQuery } from "@tanstack/react-query";
import getvehiclesData from "../../services/getVehiclesData";
import { generateLabelAndValueForSearchAndSelectField } from "../../utils/generateLabelAndValueForSearchAndSelectField";
import { generateLabelAndValueForVehicleType } from "../../utils/generateLabelandValueForVehicleType";

export default function VehicleInformationForm() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/vehicles"],
    queryFn: () => getvehiclesData(),
  });
  if (isLoading) return "Loading...";
  if (isError) return "Something went wrong!";
  console.log(data?.data);
  const vehicleOptions = generateLabelAndValueForSearchAndSelectField(
    data?.data
  );
  const typeOptions = generateLabelAndValueForVehicleType(data?.data);
  console.log(typeOptions);
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
        />
        <SelectField
          name="vehicle"
          id="vehicle"
          label="Vehicle*"
          options={vehicleOptions}
        />
      </form>
    </div>
  );
}
