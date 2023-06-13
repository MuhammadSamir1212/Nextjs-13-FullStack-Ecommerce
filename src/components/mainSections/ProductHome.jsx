"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/Slices/cartSlice";

import { toast } from "react-toastify";

export default function ProductHome({ prod }) {
  const dispatch = useDispatch();

  const handelAddCart = () => {
    if (prod.instoke === 0) {
      toast.error("product out of stoke", {
        theme: "colored",
      });
    } else {
      dispatch(addCart(prod));
      toast.success("product added to cart", {
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link
        href={`/product/${prod._id}`}
        className="flex justify-center items-center bg-mainGray shadow-sm w-[350px] h-[350px] overflow-hidden"
      >
        <Image
          src={prod.image[0].url}
          alt={prod.title}
          width={300}
          height={300}
          priority
          className="w-auto h-auto hover:scale-125 ease-in-out duration-[0.8s]"
        />
      </Link>
      <div className="text-center my-[1em]">
        <h2 className="font-semibold text-[1rem] text-secondary">
          {prod.title}
        </h2>
        <h2 className="font-semibold text-[0.9rem] text-primary my-2">
          {prod.price} $
        </h2>
        <button
          onClick={handelAddCart}
          className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
