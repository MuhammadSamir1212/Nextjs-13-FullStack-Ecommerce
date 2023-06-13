import Image from "next/image";
import { toast } from "react-toastify";

//icon
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

//redux
import { useDispatch } from "react-redux";
import {
  deleteCart,
  IncreaseItemQuantity,
  decreaseItemQuantity,
} from "@/redux/Slices/cartSlice";

export default function NavBarCartItem({ cartData }) {
  const dispatch = useDispatch();

  const handelDeleteCart = () => {
    dispatch(deleteCart(cartData._id));
    toast.error("product deleted from cart", {
      theme: "colored",
    });
  };

  const handelIncreaseItem = () => {
    if (cartData.instoke < cartData.quantity) {
      toast.error(`product in stoke ${cartData.instoke}`, {
        theme: "colored",
      });
    } else {
      dispatch(IncreaseItemQuantity(cartData._id));
    }
  };

  const handeldecreaseItem = () => {
    if (cartData.quantity === 0) {
      dispatch(deleteCart(cartData._id));
    } else {
      dispatch(decreaseItemQuantity(cartData._id));
    }
  };

  return (
    <div
      key={cartData.id}
      className="w-[95%] gap-5 flex m-auto items-start p-3 bg-primary my-4 rounded-md shadow-md border border-mainGray"
    >
      <div className="flex items-center bg-mainGray h-[85px]">
        <Image
          src={cartData.image[0].url}
          alt="laptop-1"
          width={80}
          height={90}
          priority
          className="w-auto h-auto"
        />
      </div>

      <div className="w-[70%]">
        <h2 className="font-normal text-[1rem] mb-[0.3em] text-mainGray">
          {cartData.title}
        </h2>
        <span className="font-normal text-[1rem] text-mainGray">
          {cartData.price} $
        </span>
        <div className="w-[65%] flex gap-3 justify-between items-center border border-mainGray rounded-3xl mt-[0.4em] py-1 px-3">
          <MinusIcon
            onClick={handeldecreaseItem}
            className="w-4 h-4 cursor-pointer text-mainGray"
          />
          <span className="font-normal text-[1rem] text-mainGray">
            {cartData.quantity}
          </span>
          <PlusIcon
            onClick={handelIncreaseItem}
            className="w-4 h-4 cursor-pointer text-mainGray"
          />
        </div>
      </div>
      <XMarkIcon
        onClick={handelDeleteCart}
        className="w-5 h-5 cursor-pointer text-mainGray"
      />
    </div>
  );
}
