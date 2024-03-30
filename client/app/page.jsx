import ReservationDetailsForm from "./_libs/components/forms/ReservationDetailsForm";
import Button from "./_libs/components/ui/Button";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reservation</h2>
        <Button variant="primary">Print / Download</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ReservationDetailsForm />
      </div>
    </div>
  );
}
