"use client";
import { useState, useEffect } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function AdminProductCount() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/products`);
      setProductsData(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="py-[2em] flex flex-col justify-center items-center">
      <ShoppingCartIcon className="w-10 h-10 text-primary" />
      <h2 className="text-primary text-[1.5rem] font-semibold">Products</h2>
      <h2 className="text-secondary text-[1.5rem] font-semibold">
        {productsData?.length}
      </h2>
    </div>
  );
}
