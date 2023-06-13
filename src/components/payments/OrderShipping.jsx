"use client";

export default function OrderShipping({ shippingAddress }) {
  return (
    <div className="my-[1.5em] p-5 border shadow-md border-secondary">
      <h2 className="mb-2 text-lg">Shipping</h2>
      {shippingAddress && (
        <div>
          {shippingAddress.fullName}, {shippingAddress.address},{" "}
          {shippingAddress.country}
        </div>
      )}
    </div>
  );
}
