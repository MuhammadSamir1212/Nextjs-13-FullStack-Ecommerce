"use client";
import Link from 'next/link';

export default function ShippingScreen({shippingData}) {
  return (
    <div className="my-[1.5em] p-5 border shadow-md border-secondary">
      <h2 className="mb-2 text-lg">Shipping</h2>
        <div>
          {shippingData.fullName}, {shippingData.address},{' '}
          {shippingData.country}
        </div>
      {/* star */}
      <div className='pt-[1em]'>
        <Link href="/shipping" className='text-[1.2em] text-secondary'>Edit</Link>
      </div>
    </div>
  );
}
