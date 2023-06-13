"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProductHome from "./ProductHome";
import axios from "axios";

export default function Trending() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/products`);
      setProductData(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="sm:px-16 px-6 w-full h-full py-[2em]">
      <div className="text-center">
        <h2 className="font-bold text-primary text-[1.5rem] tra-b-a flex justify-center items-center">
          TRENDING
        </h2>
        <p className="font-medium italic text-primary text-[1rem]">
          Top view in this week
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 py-[2em]">
        {productData?.map((prod) => (
          <ProductHome key={prod._id} prod={prod} />
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/shop"
          className="border border-secondary font-semibold text-[1rem] text-secondary px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition-all"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
