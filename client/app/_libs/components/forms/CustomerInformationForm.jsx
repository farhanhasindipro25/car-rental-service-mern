import React from "react";
import TextInputField from "../ui/TextInputField";

export default function CustomerInformationForm() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Customer Information
      </h2>
      <form className="p-4 space-y-4 rounded-lg border border-gray-300">
        <TextInputField
          name="first_name"
          id="first_name"
          label="First Name"
          placeholder="e.g. Farhan"
        />
        <TextInputField
          name="last_name"
          id="last_name"
          label="Last Name"
          placeholder="e.g. Hasin"
        />
        <TextInputField
          name="email"
          id="email"
          label="Email"
          placeholder="e.g. name@example.com"
        />
        <TextInputField
          name="phone"
          id="phone"
          label="Phone"
          placeholder="e.g. +8801645364511"
        />
      </form>
    </div>
  );
}
