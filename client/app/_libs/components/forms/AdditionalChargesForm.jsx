import React from "react";
import CheckboxInputField from "../ui/CheckboxInputField";

export default function AdditionalChargesForm() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Additional Charges
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-indigo-200">
        <CheckboxInputField
          name="collision_damage_waiver"
          id="collision_damage_waiver"
          label="Collision Damage Waiver - $9.00"
        />
        <CheckboxInputField
          name="liability_insurance"
          id="liability_insurance"
          label="Liability Insurance - $15.00"
        />
        <CheckboxInputField
          name="rental_tax"
          id="rental_tax"
          label="Rental Tax - $11.50"
        />
      </form>
    </div>
  );
}
