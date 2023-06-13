"use client";
import Link from "next/link";

export default function OrderCart({ orderItems }) {
  return (
    <div className="p-5 overflow-x-auto border shadow-md border-secondary">
      <h2 className="mb-2 text-lg">Order Items</h2>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th className="px-5 text-left">Title</th>
            <th className="p-5 text-right ">Quantity</th>
            <th className="p-5 text-right ">Price</th>
            <th className="p-5 text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orderItems?.length > 0 &&
            orderItems.map((item) => (
              <tr key={item._id} className="border-b">
                <td>
                  <Link
                    href={`/product/${item._id}`}
                    className="font-semibold text-[1em] text-secondary"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="p-5 text-right ">{item.quantity}</td>
                <td className="p-5 text-right">${item.price}</td>
                <td className="p-5 text-right">
                  ${item.quantity * item.price}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
