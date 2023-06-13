"use client";

import { useState, useEffect } from "react";
import { XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";
import AdminEditeOrder from "../../adminHelpers/AdminEditeOrder";
import AdminBackDrop from "@/components/helpers/AdminBackDrop";
import axios from "axios";

export default function PaymentAdmin() {
  const [orderData, setOrderData] = useState([]);
  const [popUp, setPopup] = useState(false);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/orders`);
      setOrderData(data);
    };
    fetchOrders();
  }, []);

  const handelOpen = (_id) => {
    setPopup(true);
    setCurrentId(_id);
  };
  const handelClose = () => {
    setPopup(false);
  };

  const handleDelete = async (_id) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await axios.delete(`${process.env.API_URL}/api/orders/${_id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
            <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
              Edite
            </th>
            <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData?.map((data, i) => (
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
              <td className="w-[100px] p-3 whitespace-nowrap">
                <PencilIcon
                  className="w-5 h-5 cursor-pointer text-sky-500"
                  onClick={() => handelOpen(data?._id)}
                />
                {popUp && (
                  <AdminEditeOrder
                    handelClose={handelClose}
                    currentId={currentId}
                    orderData={orderData}
                    setPopup={setPopup}
                  />
                )}
                {popUp && <AdminBackDrop handelClose={handelClose} />}
              </td>
              <td className="w-[100px] p-3  whitespace-nowrap">
                <XMarkIcon
                  className="w-5 h-5 text-red-700 cursor-pointer"
                  onClick={() => handleDelete(data._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
