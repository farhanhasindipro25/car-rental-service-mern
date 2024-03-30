import React from "react";
import TextInputField from "../ui/TextInputField";

export default function CustomerInformationForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("Customer Info", formData);
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Customer Information
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-indigo-200">
        <TextInputField
          name="first_name"
          id="first_name"
          label="First Name*"
          placeholder="e.g. Farhan"
          value={formData.first_name || ""}
          onChange={handleChange}
        />
        <TextInputField
          name="last_name"
          id="last_name"
          label="Last Name*"
          placeholder="e.g. Hasin"
          value={formData.last_name || ""}
          onChange={handleChange}
        />
        <TextInputField
          name="email"
          id="email"
          label="Email*"
          placeholder="e.g. name@example.com"
          value={formData.email || ""}
          onChange={handleChange}
        />
        <TextInputField
          name="phone"
          id="phone"
          label="Phone*"
          placeholder="e.g. +8801645364511"
          value={formData.phone || ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
