"use client";
//general
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

//redux
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "@/redux/Slices/shippingSlice";

export default function ShippingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const shippingData = useSelector((state) => state.shippingStore.shipping);

  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValue("fullName", shippingData.fullName);
    setValue("address", shippingData.address);
    setValue("country", shippingData.country);
  }, [setValue, shippingData]);

  const shippingSubmit = ({ fullName, address, country }) => {
    setLoading(true);
    dispatch(saveShipping({ fullName, address, country }));
    Cookies.set(
      "shipping",
      JSON.stringify({ ...shippingData, fullName, address, country })
    );
    setLoading(false);
    setTimeout(() => {
      router.push("/payment");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(shippingSubmit)}>
      <div className="md:w-[50%] w-full mx-auto">
        <div className="mb-[0.5em]">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", {
              required: "Please enter full name",
            })}
            className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
              errors?.fullName ? "border-red-500" : "border-primary"
            }`}
            autoFocus
          />
          {errors?.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-[0.5em]">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            {...register("address", {
              required: "Please enter address",
            })}
            className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
              errors?.address ? "border-red-500" : "border-primary"
            }`}
            autoFocus
          />
          {errors?.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-[0.5em]">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            type="text"
            {...register("country", {
              required: "Please enter country",
            })}
            className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
              errors?.country ? "border-red-500" : "border-primary"
            }`}
            autoFocus
          />
          {errors?.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>
        <div className="my-[1em]">
          <button
            disabled={loading}
            className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
          >
            {loading ? "Loading..." : "Next"}
          </button>
        </div>
      </div>
    </form>
  );
}
