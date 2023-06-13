import Link from "next/link";
import { notFound } from "next/navigation";
import OrderCart from "@/components/payments/OrderCart";
import OrderShipping from "@/components/payments/OrderShipping";
import PaymentButtons from "@/components/payments/PaymentButtons";

//icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Get Data
async function getOrderData(id) {
  const res = await fetch(`${process.env.API_URL}/api/orders/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// meta data
export async function generateMetadata({ params }) {
  const order = await getOrderData(params?.id);
  return {
    title: order.userId,
    description: order.userId,
  };
}

export default async function CheckOutPage({ params }) {
  const orderData = await getOrderData(params?.id);

  const { orderItems, shippingAddress, totalPrice } = orderData;

  return (
    <>
      <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[280px]">
        <div className="flex flex-col items-center justify-center text-center contact-overlay">
          <h2 className="font-semibold text-mainGray text-[1.3rem]">
            Checkout
          </h2>
        </div>
      </div>
      <div className="sm:px-16 px-6 py-[0.7em] w-full h-full bg-mainGray flex items-center gap-3">
        <Link href="/" className="font-semibold text-primary text-[1rem]">
          Home
        </Link>
        <span>
          <ChevronRightIcon className="w-5 h-5 text-primary" />
        </span>
        <h2 className="font-semibold text-primary text-[1rem]">Contact</h2>
      </div>
      <div className="sm:px-16 px-6 pt-[4em] pb-[2em] w-full h-full">
        <OrderCart orderItems={orderItems} />
        <OrderShipping shippingAddress={shippingAddress} />
        <div className="p-5 border shadow-md border-secondary my-[2.5em] md:w-[30%] w-[100%] flex flex-col md:ml-[70%] ml-0">
          <div className="flex justify-between items-center mb-[1em]">
            <h2 className="font-semibold text-[1rem] text-primary">
              ORDER TOTAL
            </h2>
            <h2 className="font-semibold text-[1rem] text-primary">
              {totalPrice} $
            </h2>
          </div>
          <div className="my-[1em]">
            <PaymentButtons totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </>
  );
}
