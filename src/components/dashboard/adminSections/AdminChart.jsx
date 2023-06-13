"use client";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function AdminChart() {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/orders`);
      setOrderData(data);
    };
    fetchOrders();
  }, []);

  const totalPrice = orderData?.reduce((a, c) => a + c.totalPrice, 0);

  const data = [
    {
      name: "2020",
      totalprice: totalPrice - 2000,
    },
    {
      name: "2021",
      totalprice: totalPrice - 200,
    },
    {
      name: "2022",
      totalprice: totalPrice - 1000,
    },
    {
      name: "2023",
      totalprice: totalPrice,
    },
  ];

  return (
    <div className="w-[95%] h-[95%] mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="totalprice"
            stroke="#2196F3"
            strokeWidth={3}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
