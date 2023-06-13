import PaymentAdmin from "@/components/dashboard/adminSections/paymentAdmin/PaymentAdmin";

export default function PaymentData() {
  return (
    <div className="py-[2em]">
      <p className="mb-[2em] text-3xl font-bold text-gray-700">Orders Data</p>
      <PaymentAdmin />
    </div>
  );
}
