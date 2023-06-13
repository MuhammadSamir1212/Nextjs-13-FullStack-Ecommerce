"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/Slices/cartSlice";

export default function ProductPageCom({ productData }) {
  //redux
  const dispatch = useDispatch();

  // image perview
  const [selectedImg, setSelectedImg] = useState(0);

  const handelAddCart = () => {
    if (productData.instoke === 0) {
      toast.error("product out of stoke", {
        theme: "colored",
      });
    } else {
      dispatch(addCart(productData));
      toast.success("product added to cart", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="flex md:flex-row flex-col justify-between itemst-start gap-[2em]">
      {productData.image?.length > 0 && (
        <div className="flex-1 flex flex-col-reverse justify-between itemst-start gap-[0.7em]">
          <div className="flex justify-between itemst-start">
            <div className="flex justify-center itemst-center bg-mainGray p-2 shadow-md cursor-pointer sm:w-[200px] w-[150px] sm:h-[150px] h-[100px]">
              <Image
                src={productData.image[0].url}
                alt={productData.title}
                width={600}
                height={600}
                priority
                className="w-auto h-auto mx-auto"
                onClick={() => setSelectedImg(0)}
              />
            </div>
            <div className="flex justify-center itemst-center bg-mainGray p-2 shadow-md mx-[1em] cursor-pointer sm:w-[200px] w-[150px] sm:h-[150px] h-[100px]">
              <Image
                src={productData.image[1].url}
                alt={productData.title}
                width={600}
                height={600}
                priority
                className="w-auto h-auto mx-auto"
                onClick={() => setSelectedImg(1)}
              />
            </div>
            <div className="flex justify-center itemst-center bg-mainGray p-2 shadow-md cursor-pointer sm:w-[200px] w-[150px] sm:h-[150px] h-[100px]">
              <Image
                src={productData.image[2].url}
                alt={productData.title}
                width={600}
                height={600}
                priority
                className="w-auto h-auto mx-auto "
                onClick={() => setSelectedImg(2)}
              />
            </div>
          </div>
          <div className="flex justify-center p-2 shadow-md itemst-center bg-mainGray">
            <Image
              src={productData.image[selectedImg].url}
              alt={productData.title}
              width={600}
              height={600}
              priority
              className="w-auto h-auto mx-auto"
            />
          </div>
        </div>
      )}

      <div className="flex-1">
        <h2 className="font-semibold text-[1.5em] text-primary">
          {productData.title}
        </h2>
        <div className="flex justify-between itemst-center my-[1em]">
          <div className="font-semibold text-[1.2em] text-primary">
            $ {productData.price}
          </div>
          <div className="flex justify-between gap-4 itemst-center">
            <h2>{productData.rating}</h2>
            <h2 className="font-semibold text-[1em] text-primary">
              ( {productData.numReviews} Review )
            </h2>
          </div>
        </div>
        <p className="font-medium xs:text-[1em] text-[0.8em] text-primary md:w-[90%] w-full">
          {productData.desciption}
        </p>
        <h2 className="font-medium text-[1em] text-primary mt-[1em] mb-[0.5em]">
          Availability:
          {productData.instoke > 0 ? productData.instoke : "Unavailable"}
        </h2>
        <h2 className="font-medium text-[1em] text-primary">
          Categories: {productData.categori}
        </h2>
        <div className="w-[50%] bg-secondary py-2 rounded-md text-center mx-auto mt-[2em] shadow-md">
          <button
            onClick={handelAddCart}
            className="font-semibold text-[1em] text-primary "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
