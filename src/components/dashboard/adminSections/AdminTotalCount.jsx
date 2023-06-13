"use client";
import { useState, useEffect } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function AdminTotalCount() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/orders`);
      setOrderData(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="py-[2em] flex flex-col justify-center items-center">
      <CurrencyDollarIcon className="w-10 h-10 text-primary" />
      <h2 className="text-primary text-[1.5rem] font-semibold">All Payments</h2>
      <h2 className="text-secondary text-[1.5rem] font-semibold">
        {orderData?.reduce((a, c) => a + c.totalPrice, 0)} $
      </h2>
    </div>
  );
}
