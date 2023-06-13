"use client";
import { useState, useEffect } from "react";

//next auth
import { useSession } from "next-auth/react";

import axios from "axios";

export default function ProfileHistory() {
  const [productData, setProductrData] = useState([]);

  //next auth
  const { data: session } = useSession();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${process.env.API_URL}/api/profile/${session?.user?._id}`
      );
      setProductrData(data);
    };
    if (session?.user?._id) fetchProduct();
  }, [session?.user?._id]);

  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full">
        <thead className="border-b-2 border-secondary bg-primary">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wider text-left w-[100px] text-mainGray">
              No.
            </th>
            <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
              ID
            </th>
            <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
              TotalPrice
            </th>
            <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
              ShippingStuts
            </th>
          </tr>
        </thead>
        <tbody>
          {productData?.map((data, i) => (
            <tr key={data._id} className="bg-white border-b-2 border-secondary">
              <td className="p-3 text-sm font-semibold text-secondary whitespace-nowrap">
                <span> {i + 1} </span>
              </td>
              <td className="p-3 text-sm text-primary whitespace-nowrap">
                <span className="">{data._id}</span>
              </td>
              <td className="p-3 text-sm text-primary whitespace-nowrap">
                <span>{data.totalPrice}</span>
              </td>
              <td className="p-3 text-sm text-primary whitespace-nowrap">
                <span>{data.shippingStuts}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
