import PaymentAdmin from "@/components/dashboard/adminSections/paymentAdmin/PaymentAdmin";

// Get Data
async function getOrderData() {
  const res = await fetch(`${process.env.API_URL}/api/orders`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PaymentData() {
  const orderData = await getOrderData();

  return (
    <div className="py-[2em]">
      <p className="mb-[2em] text-3xl font-bold text-gray-700">Orders Data</p>

      <PaymentAdmin orderData={orderData} />
    </div>
  );
}
