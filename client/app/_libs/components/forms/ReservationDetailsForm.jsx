import React from "react";
import TextInputField from "../ui/TextInputField";
import DateSelectorInputField from "../ui/DateSelectorInputField";

export default function ReservationDetailsForm() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Reservation Details
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-gray-300">
        <TextInputField
          name="reservation_id"
          id="reservation_id"
          label="Reservation ID"
          placeholder="Enter reservation ID"
        />
        <DateSelectorInputField
          name="pickup_date"
          id="pickup_date"
          label="Pickup Date*"
        />
        <DateSelectorInputField
          name="return_date"
          id="return_date"
          label="Return Date*"
        />
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-neutral-700">Duration</h2>
          <div>
            <TextInputField
              name="duration"
              id="duration"
              placeholder="1 week 1 day"
            />
          </div>
        </div>
        <TextInputField
          name="discount"
          id="discount"
          label="Discount"
          placeholder="10%"
        />
      </form>
    </div>
  );
}
