"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function PaymentCart({cartData}) {
  return (
    <div className="p-5 overflow-x-auto border shadow-md border-secondary">
      <h2 className="mb-2 text-lg">Order Items</h2>
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th className="px-5 text-left">Item</th>
            <th className="p-5 text-right ">Quantity</th>
            <th className="p-5 text-right ">Price</th>
            <th className="p-5 text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item._id} className="border-b">
              <td>
                <Link
                  href={`/product/${item._id}`}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={item.image[0].url}
                    alt={item.title}
                    width={50}
                    height={50}
                    priority
                    className="w-auto h-auto"
                  />
                  &nbsp;
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
      {/* star */}
      <div className='pt-[1em]'>
        <Link href="/cart" className='text-[1.2em] text-secondary'>Edit</Link>
      </div>
    </div>
  );
}
