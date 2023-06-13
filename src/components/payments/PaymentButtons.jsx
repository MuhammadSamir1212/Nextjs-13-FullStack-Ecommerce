"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";
// import { toast } from "react-toastify";
// import { getError } from "@/utils/error";

export default function PaymentButtons({ totalPrice }) {
  // createOrder
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: { value: totalPrice },
        },
      ],
    });
  };

  // onApprove
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  // onError
  const onError = (err) => {
    //toast.error(getError(err));
    console.log(err);
  };

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
    />
  );
}
