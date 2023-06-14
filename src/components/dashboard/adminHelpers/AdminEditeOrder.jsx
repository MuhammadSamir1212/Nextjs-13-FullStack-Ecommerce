"use client";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function AdminEditeOrder({
  handelClose,
  currentId,
  orderData,
  setPopup,
}) {
  const [loading, setLoading] = useState(false);
  const findOrder = orderData?.find((item) => item._id === currentId);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (findOrder) {
      setValue("shippingStuts", findOrder?.shippingStuts);
    }
  }, [setValue, findOrder, findOrder?.shippingStuts]);

  const updateOrder = async (formValue) => {
    try {
      setLoading(true);
      await axios.patch(`${process.env.API_URL}/api/orders/${currentId}`, {
        shippingStuts: formValue.shippingStuts,
      });
      setLoading(false);
      setPopup(false);
      toast.success("Order Updated", {
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-[20vh] left-0 right-0 mx-auto bg-white p-4 text-center md:w-[50%] w-[90%]  z-40 rounded-[15px]">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[1rem] text-primary">Edite Order</h2>
        <XMarkIcon
          className="w-5 h-5 cursor-pointer text-primary"
          onClick={handelClose}
        />
      </div>

      <div className="my-[2em]">
        <form onSubmit={handleSubmit(updateOrder)}>
          <div className="md:w-[80%] w-full mx-auto">
            <div className="mb-[0.5em] flex flex-col items-start">
              <label htmlFor="name">ShippingStuts</label>
              <input
                id="shippingStuts"
                type="text"
                {...register("shippingStuts", {
                  required: "Please enter shippingStuts",
                })}
                className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                  errors?.shippingStuts ? "border-red-500" : "border-primary"
                }`}
                autoFocus
              />
              {errors?.shippingStuts && (
                <div className="text-red-500">
                  {errors.shippingStuts.message}
                </div>
              )}
            </div>
            <div className="my-[1em]">
              <button
                disabled={loading}
                className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
              >
                {loading ? "Loading..." : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
