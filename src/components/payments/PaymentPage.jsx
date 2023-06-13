"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PaymentCart from "./PaymentCart";
import PaymentShipping from "./PaymentShipping";

//redux
import { useSelector } from "react-redux";

//next auth
import { useSession } from "next-auth/react";

import axios from "axios";
import Cookies from "js-cookie";

export default function ShippingScreen() {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const cartData = useSelector((state) => state.cartStore.cart);
  const shippingData = useSelector((state) => state.shippingStore.shipping);

  const totalPrice = cartData.reduce((a, c) => a + c.quantity * c.price, 0);

  const createOrder = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${process.env.API_URL}/api/orders`, {
        userId: session?.user._id,
        orderItems: cartData,
        shippingAddress: shippingData,
        totalPrice,
      });
      setLoading(false);
      Cookies.remove("cart");
      Cookies.remove("shipping");
      router.push(`/payment/${data._id}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <PaymentCart cartData={cartData} />
      </div>
      <div>
        <PaymentShipping shippingData={shippingData} />
      </div>
      <div className="p-5 border shadow-md border-secondary my-[2.5em] md:w-[30%] w-[100%] flex flex-col md:ml-[70%] ml-0">
        <div className="flex justify-between items-center mb-[1em]">
          <h2 className="font-semibold text-[1rem] text-primary">
            ORDER TOTAL
          </h2>
          <h2 className="font-semibold text-[1rem] text-primary">
            {totalPrice} $
          </h2>
        </div>
        <button
          onClick={createOrder}
          disabled={loading}
          className="bg-secondary font-semibold text-center text-[1rem] text-primary px-4 py-2 rounded-md"
        >
          {loading ? "Loading..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}
