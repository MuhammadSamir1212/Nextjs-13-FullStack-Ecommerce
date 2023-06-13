import Link from 'next/link';

//icons
import { XMarkIcon } from '@heroicons/react/24/outline';

//helper
import NavBarCartItem from './NavBarCartItem';

//redux
import { useSelector } from 'react-redux';

export default function NavBarCart({ openCartHandler }) {
  const cart = useSelector((state) => state.cartStore.cart);
  return (
    <div>
      <div className="flex justify-between p-3">
        <h1 className="font-semibold text-[1rem]">MY CART</h1>
        <XMarkIcon
          className="w-6 h-6 cursor-pointer text-primary"
          onClick={openCartHandler}
        />
      </div>
      <div className="w-[90%] h-[0.1em] m-auto bg-primary" />

      {cart.length === 0 ? (
        <h2 className="font-semibold text-primary text-center text-[1.2rem] mt-[2em]">
          Cart Is Empty
        </h2>
      ) : (
        <div>
          <div className="overflow-auto sm:h-[70vh] md:h-[77vh] h-[65vh]">
            {cart.map((cartData) => (
              <NavBarCartItem key={cartData._id} cartData={cartData} />
            ))}
          </div>

          {/* btns */}
          <div className="absolute w-full bottom-3">
            <div className=" w-[90%] h-[0.1em] m-auto bg-primary" />
            <div className="flex justify-between p-3">
              <h2 className="font-semibold text-[1rem] text-primary">
                Cart Subtotal :
              </h2>
              <span className="font-normal text-[1rem] text-primary">
                {cart.reduce((a, c) => a + c.quantity * c.price, 0)} $
              </span>
            </div>
            <div className="w-[90%] bg-mainGray m-auto rounded-2xl text-center py-[0.45em] mb-2">
              <Link
                href="/cart"
                className="font-semibold text-[0.8rem] text-primary"
              >
                VIEW CART
              </Link>
            </div>
            <div className="w-[90%] bg-primary m-auto rounded-2xl text-center py-[0.45em]">
              <Link
                href='/shipping'
                className="font-semibold text-[0.8rem] text-mainGray"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
