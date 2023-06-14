"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export function PayPalProvider({ children }) {
  const initialOptions = {
    "client-id": process.env.PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    //"data-client-token": "abc123xyz==",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
}
