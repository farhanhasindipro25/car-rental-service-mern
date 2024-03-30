import React from "react";
import SelectField from "../ui/SelectField";

export default function VehicleFormError() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Vehicle Information
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-indigo-200">
        <h2 className="text-xs text-red-500 font-medium">
          The server ran into an issue. Please try again later
        </h2>
        <SelectField
          name="vehicle_type"
          id="vehicle_type"
          label="Vehicle Type*"
        />
        <SelectField name="vehicle" id="vehicle" label="Vehicle*" />
      </form>
    </div>
  );
}
