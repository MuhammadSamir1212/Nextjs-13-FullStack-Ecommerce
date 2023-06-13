"use client";
//general
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/Slices/cartSlice";

//icons
import {
  AdjustmentsVerticalIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";

export default function ShopProducts({ productsData }) {
  //filter
  const [openFilter, setOpenFilter] = useState(false);
  const [filterItem, setFilterItem] = useState("all");

  const habdelOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const filteredProduct = productsData?.filter((proitem) =>
    filterItem === "all"
      ? proitem
      : filterItem === proitem.categori
      ? proitem
      : filterItem === "low-price"
      ? proitem.price <= 1400
      : filterItem === "mid-price"
      ? proitem.price > 1400 && proitem.price < 2600
      : filterItem === "high-price"
      ? proitem.price > 2600
      : filterItem === "low-rate"
      ? proitem.rating < 4
      : filterItem === "high-rate"
      ? proitem.rating > 4
      : filterItem === "inStoke"
      ? proitem.instoke > 0
      : filterItem === "outStoke"
      ? proitem.instoke === 0
      : ""
  );

  const handelOnCatigoriChange = (e) => {
    setFilterItem(e.target.id);
  };

  //sort
  const [sortItem, setSortItem] = useState(false);

  if (sortItem === false) {
    filteredProduct.sort((a, b) => a.price - b.price);
  }
  if (sortItem === true) {
    filteredProduct.sort((a, b) => b.price - a.price);
  }

  //redux
  const dispatch = useDispatch();

  const handelAddCart = (item, instoke) => {
    if (instoke === 0) {
      toast.error("product out of stoke", {
        theme: "colored",
      });
    } else {
      dispatch(addCart(item));
      toast.success("product added to cart", {
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AdjustmentsVerticalIcon
            className="w-5 h-5 cursor-pointer text-primary"
            onClick={habdelOpenFilter}
          />
          <h2 className="font-semibold text-primary text-[1rem]">Filter</h2>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-primary text-[1rem]">Sort</h2>
          <ArrowsUpDownIcon
            className="w-5 h-5 cursor-pointer text-primary"
            onClick={() => setSortItem(!sortItem)}
          />
        </div>
      </div>
      <div className="my-[1em]">
        {openFilter && (
          <div className="w-full h-full p-[1em] shadowFilter grid md:grid-cols-4 grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold text-primary text-[1rem]">
                Category
              </h2>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="all"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="all"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    All Categorys
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="cheep"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="cheep"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    Cheep Items
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="mid"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="mid"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    Mid Items
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="high"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="high"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    High Items
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-primary text-[1rem]">Price</h2>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="low-price"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="low-price"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    0 $ - 1400 $
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="mid-price"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="mid-price"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    1500 $ - 2900 $
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="high-price"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="high-price"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    3000 $ - 10000 $
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-primary text-[1rem]">Rating</h2>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="low-rate"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="low-rate"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    1 - 3
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="high-rate"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="high-rate"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    4 - 5
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-primary text-[1rem]">Stoke</h2>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="inStoke"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="inStoke"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    in stoke
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="outStoke"
                    onChange={handelOnCatigoriChange}
                  />
                  <label
                    htmlFor="outStoke"
                    className="font-medium text-primary sm:text-[1rem] text-[0.8rem] ml-2"
                  >
                    out of stoke
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 py-[2em]">
        {filteredProduct.map((prodata) => (
          <div
            key={prodata._id}
            className="flex flex-col items-center justify-center"
          >
            <Link
              href={`/product/${prodata._id}`}
              className="flex justify-center items-center bg-mainGray shadow-sm w-[350px] h-[350px] overflow-hidden"
            >
              <Image
                src={prodata.image[0].url}
                alt={prodata.title}
                width={300}
                height={300}
                priority
                className="w-auto h-auto hover:scale-125 ease-in-out duration-[0.8s]"
              />
            </Link>
            <div className="text-center my-[1em]">
              <h2 className="font-semibold text-[1rem] text-secondary">
                {prodata.title}
              </h2>
              <h2 className="font-semibold text-[0.9rem] text-primary my-2">
                {prodata.price} $
              </h2>
              <button
                onClick={() => handelAddCart(prodata, prodata.instoke)}
                className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
