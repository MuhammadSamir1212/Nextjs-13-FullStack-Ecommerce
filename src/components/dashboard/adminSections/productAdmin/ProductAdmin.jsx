"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";
import AdminProductForm from "../../adminHelpers/AdminProductForm";
import axios from "axios";

export default function ProductAdmin() {
  const [productsData, setProductsData] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/products`);
      setProductsData(data);
    };
    fetchOrders();
  }, []);

  const handleOpenForm = (_id) => {
    setOpenForm(!openForm);
    setCurrentId(_id);
  };

  const handleDelete = async (_id) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await axios.delete(`${process.env.API_URL}/api/products/${_id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex items-start justify-between">
        <p className="mb-[2em] text-3xl font-bold text-gray-700">
          Products Data
        </p>
        <button
          onClick={handleOpenForm}
          className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
        >
          Add Product
        </button>
      </div>

      {openForm && (
        <div>
          <AdminProductForm productsData={productsData} currentId={currentId} />
        </div>
      )}

      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full">
          <thead className="border-b-2 border-secondary bg-primary">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wider text-left w-[100px] text-mainGray">
                No.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
                Image
              </th>
              <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
                Title
              </th>
              <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
                Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wider text-left text-mainGray">
                In stoke
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
            {productsData?.map((data, i) => (
              <tr
                key={data._id}
                className="bg-white border-b-2 border-secondary"
              >
                <td className="p-3 text-sm font-semibold text-secondary whitespace-nowrap">
                  <span> {i + 1} </span>
                </td>
                <td className=" w-[100px] p-3 whitespace-nowrap">
                  <Image
                    src={data.image[0].url}
                    alt="avatar"
                    width={35}
                    height={35}
                    priority
                    className="border-2 rounded-full shadow-sm md:mr-3 border-secondary"
                  />
                </td>
                <td className="p-3 text-sm text-primary whitespace-nowrap">
                  <span className="">{data.title}</span>
                </td>
                <td className="p-3 text-sm text-primary whitespace-nowrap">
                  <span>{data.price} $</span>
                </td>
                <td className="w-[100px] p-3 whitespace-nowrap">
                  <span>{data.instoke}</span>
                </td>
                <td className="w-[100px] p-3 whitespace-nowrap">
                  <PencilIcon
                    onClick={() => handleOpenForm(data._id)}
                    className="w-5 h-5 cursor-pointer text-sky-500"
                  />
                </td>
                <td className="w-[100px] p-3  whitespace-nowrap">
                  <XMarkIcon
                    className="w-5 h-5 text-red-700 cursor-pointer"
                    onClick={() => handleDelete(data?._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
