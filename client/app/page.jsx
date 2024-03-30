"use client";
import { useState } from "react";
import AdditionalChargesForm from "./_libs/components/forms/AdditionalChargesForm";
import ChargesSummary from "./_libs/components/forms/ChargesSummary";
import CustomerInformationForm from "./_libs/components/forms/CustomerInformationForm";
import ReservationDetailsForm from "./_libs/components/forms/ReservationDetailsForm";
import VehicleInformationForm from "./_libs/components/forms/VehicleInformationForm";
import Button from "./_libs/components/ui/Button";

export default function Home() {
  const [reservationDetails, setReservationDetails] = useState({});
  const [vehicleInformation, setVehicleInformation] = useState({});
  const [customerInformation, setCustomerInformation] = useState({});
  const [additionalCharges, setAdditionalCharges] = useState({});
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reservation</h2>
        <Button variant="primary">Print / Download</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <ReservationDetailsForm
            formData={reservationDetails}
            setFormData={setReservationDetails}
          />
          <VehicleInformationForm
            formData={vehicleInformation}
            setFormData={setVehicleInformation}
          />
        </div>
        <div className="space-y-4">
          <CustomerInformationForm
            formData={customerInformation}
            setFormData={setCustomerInformation}
          />
          <AdditionalChargesForm
            formData={additionalCharges}
            setFormData={setAdditionalCharges}
          />
        </div>
        <div className="space-y-4">
          <ChargesSummary
            reservationDetails={reservationDetails}
            vehicleInformation={vehicleInformation}
            customerInformation={customerInformation}
            additionalCharges={additionalCharges}
          />
        </div>
      </div>
    </div>
  );
}
