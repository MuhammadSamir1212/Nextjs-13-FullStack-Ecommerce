"use client";

import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  IncreaseItemQuantity,
  decreaseItemQuantity,
  deleteCart,
} from "@/redux/Slices/cartSlice";

export default function CartPageItems() {
  const cartData = useSelector((state) => state.cartStore.cart);
  const dispatch = useDispatch();

  const handelDeleteCart = (id) => {
    dispatch(deleteCart(id));
    toast.error("product deleted from cart", {
      theme: "colored",
    });
  };

  const handelIncreaseItem = (quantity, id, instoke) => {
    if (instoke < quantity) {
      toast.error(`product in stoke ${instoke}`, {
        theme: "colored",
      });
    } else {
      dispatch(IncreaseItemQuantity(id));
    }
  };

  const handeldecreaseItem = (quantity, id) => {
    if (quantity === 0) {
      dispatch(deleteCart(id));
    } else {
      dispatch(decreaseItemQuantity(id));
    }
  };

  return cartData.length === 0 ? (
    <h2 className="font-semibold text-primary text-center text-[1.2rem] my-[4em]">
      Cart Is Empty{" "}
      <Link href="/shop" className="text-secondary">
        Go shopping
      </Link>
    </h2>
  ) : (
    <div>
      <table className="w-full border-0">
        <thead className="text-left border-b border-mainGray">
          <tr className="md:text-[1rem] text-[0.8rem]">
            <th className="py-[1em]">ITEM</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        {cartData.map((cartItems) => (
          <tbody
            key={cartItems._id}
            className="relative border-b border-mainGray"
          >
            <tr>
              <td>
                <Link
                  href={`/product/${cartItems._id}`}
                  className="flex md:flex-row flex-col gap-3 md:items-center items-start my-[1em]"
                >
                  <div className="flex items-center bg-mainGray h-[85px]">
                    <Image
                      src={cartItems.image[0].url}
                      alt="laptop-1"
                      width={80}
                      height={90}
                      priority
                      className="w-auto h-auto"
                    />
                  </div>
                  <h2 className="font-bold md:text-[1rem] text-[0.8rem] text-primary">
                    {cartItems.title}
                  </h2>
                </Link>
              </td>
              <td>
                <span className="font-bold md:text-[1rem] text-[0.8rem] text-primary">
                  {cartItems.price} $
                </span>
              </td>
              <td>
                <div className="w-[40%] flex md:flex-row flex-col gap-3 justify-between items-center border border-primary rounded-3xl py-1 px-3">
                  <MinusIcon
                    onClick={() =>
                      handeldecreaseItem(cartItems.quantity, cartItems._id)
                    }
                    className="w-4 h-4 cursor-pointer text-primary"
                  />
                  <span className="font-normal md:text-[1rem] text-[0.8rem] text-primary">
                    {cartItems.quantity}
                  </span>
                  <PlusIcon
                    onClick={() =>
                      handelIncreaseItem(
                        cartItems.quantity,
                        cartItems._id,
                        cartItems.instoke
                      )
                    }
                    className="w-4 h-4 cursor-pointer text-primary"
                  />
                </div>
              </td>
              <td>
                <span className="font-bold md:text-[1rem] text-[0.8rem] text-primary">
                  {cartItems.quantity * cartItems.price} $
                </span>
              </td>
            </tr>
            <tr className="absolute top-0 bottom-0 right-0 flex items-center">
              <td>
                <XMarkIcon
                  onClick={() => handelDeleteCart(cartItems._id)}
                  className="w-5 h-5 cursor-pointer text-primary"
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="my-[3.5em] md:w-[25%] w-[100%] flex flex-col md:ml-[70%] ml-0">
        <div className="flex justify-between items-center mb-[1em]">
          <h2 className="font-semibold text-[1rem] text-primary">
            ORDER TOTAL
          </h2>
          <h2 className="font-semibold text-[1rem] text-primary">
            {cartData.reduce((a, c) => a + c.quantity * c.price, 0)} $
          </h2>
        </div>
        <Link
          href="/shipping"
          className="bg-secondary font-semibold text-center text-[1rem] text-primary px-4 py-2 rounded-md"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
