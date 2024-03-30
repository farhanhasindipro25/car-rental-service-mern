import React from "react";
import TextInputField from "../ui/TextInputField";
import DateSelectorInputField from "../ui/DateSelectorInputField";

export default function ReservationDetailsForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Reservation Details
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-indigo-200">
        <TextInputField
          name="reservation_id"
          id="reservation_id"
          label="Reservation ID"
          placeholder="Enter reservation ID"
          value={formData.reservation_id || ""}
          onChange={handleChange}
        />
        <DateSelectorInputField
          name="pickup_date"
          id="pickup_date"
          label="Pickup Date*"
          value={formData.pickup_date || ""}
          onChange={handleChange}
        />
        <DateSelectorInputField
          name="return_date"
          id="return_date"
          label="Return Date*"
          value={formData.returnDate || ""}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-neutral-700">Duration</h2>
          <div>
            <TextInputField
              name="duration"
              id="duration"
              placeholder="1 week 1 day"
              value={formData.duration || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <TextInputField
          name="discount"
          id="discount"
          label="Discount"
          placeholder="10%"
          value={formData.discount || ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
