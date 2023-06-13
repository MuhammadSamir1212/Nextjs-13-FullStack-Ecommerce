"use client";
//general
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserLogin from "./navHelper/UserLogin";

//styles
import { Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

//data
import { navLinks } from "@/utils/constans";

//icons
import {
  XMarkIcon,
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";

//helper
import NavBarSearch from "./navHelper/NavBarSearch";
import NavBarLoginAndSign from "./navHelper/NavBarLoginAndSign";
import NavBarCart from "./navHelper/NavBarCart";
import BackDrop from "../../helpers/BackDrop";

//redux
import { useSelector } from "react-redux";

//next auth
import { useSession } from "next-auth/react";

export default function NavBar() {
  //toggle login , signin , search , cart, hamburger menu
  const [openLogin, setOpenLogin] = useState(false);
  const [openSearch, setOpenShearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //toggle login , signin
  const openLoginHandler = () => {
    setOpenLogin(!openLogin);

    setOpenShearch(false);
    setOpenMenu(false);
  };

  //toggle search
  const openSearchHandler = () => {
    setOpenShearch(!openSearch);

    setOpenLogin(false);
  };

  //toggle cart
  const openCartHandler = () => {
    setOpenCart(!openCart);

    setOpenLogin(false);
    setOpenShearch(false);
    setOpenMenu(false);
  };

  //toggle hamburger menu
  const openMenuHandler = () => {
    setOpenMenu(!openMenu);

    setOpenLogin(false);
    setOpenShearch(false);
    setOpenCart(false);
  };

  //cart items
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const cart = useSelector((state) => state.cartStore.cart);

  useEffect(() => {
    setCartItemsCount(cart.reduce((a, c) => a + c.quantity, 0));
  }, [cart]);

  //nav link active
  const pathname = usePathname();

  //next auth
  const { data: session } = useSession();

  return pathname === "/dashboard" ? (
    ""
  ) : pathname === "/dashboard/users" ? (
    ""
  ) : pathname === "/dashboard/products" ? (
    ""
  ) : pathname === "/dashboard/payment" ? (
    ""
  ) : (
    <div className="px-6 py-3 sm:px-16">
      <div className="flex items-center justify-between">
        {/* responsive */}
        <div className="flex items-center sm:hidden">
          <Bars3BottomLeftIcon
            className="w-6 h-6 cursor-pointer text-mainGray"
            onClick={openMenuHandler}
          />
          <AnimatePresence>
            {openMenu && (
              <motion.div
                key="menu"
                initial={{ x: "-20em", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-20em", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0
              w-[200px] h-[100vh] bg-secondary z-20 shadow-md"
              >
                <XMarkIcon
                  className="h-5 w-5 text-primary cursor-pointer ml-[10em] my-[0.5em] "
                  onClick={() => setOpenMenu(false)}
                />
                <ul className="flex flex-col ">
                  {navLinks.map((links, index) => (
                    <Link
                      key={links.id}
                      href={links.link}
                      onClick={() => setOpenMenu(false)}
                    >
                      <li
                        className={`font-semibold text-[1rem] w-full border-b border-b-primary py-[1em] pl-[1em] ${
                          pathname === links.link
                            ? "bg-primary text-mainGray"
                            : ""
                        } `}
                      >
                        {links.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            )}
            {openMenu && (
              <BackDrop openCartHandler={() => setOpenMenu(false)} />
            )}
          </AnimatePresence>

          {/* nav search */}
          <div className="block sm:hidden">
            <MagnifyingGlassIcon
              className="h-6 w-6 text-mainGray ml-[1.5em] cursor-pointer relative"
              onClick={openSearchHandler}
            />
            <Transition
              show={openSearch}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <NavBarSearch />
            </Transition>
          </div>
        </div>
        <Link
          href="/"
          className="font-bold xs:text-[1.3rem] sm:text-[1.5rem] text-[1.1rem] text-mainGray"
        >
          Mo <span className="text-secondary">Commerce</span>
        </Link>
        <ul className="flex-row hidden sm:flex">
          {navLinks.map((links, index) => (
            <li
              key={links.id}
              className={` ${
                index === navLinks.length - 1 ? "mr-0" : "mr-[2em]"
              }`}
            >
              <Link
                href={links.link}
                className={`font-semibold md:text-[1rem] text-[0.8rem] px-3 py-2 rounded-md
                  text-mainGray ${
                    pathname === links.link ? "bg-secondary text-primary" : ""
                  } `}
              >
                {links.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center">
          {/* nav search */}
          <div className="hidden sm:block">
            <MagnifyingGlassIcon
              className="h-6 w-6 text-mainGray mr-[1.5em] cursor-pointer relative"
              onClick={openSearchHandler}
            />
            <Transition
              show={openSearch}
              enter="transform transition duration-[400ms]"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <NavBarSearch />
            </Transition>
          </div>
          {/* nav login and sign up */}
          <div>
            {session?.user ? (
              <UserLogin
                name={session?.user?.name}
                avatar={session?.user?.avatar}
                isAdmin={session?.user?.isAdmin}
              />
            ) : (
              <div>
                <UserIcon
                  className="h-6 w-6 text-mainGray mr-[1.5em] cursor-pointer relative"
                  onClick={openLoginHandler}
                />
                <Transition
                  show={openLogin}
                  enter="transform transition duration-[400ms]"
                  enterFrom="opacity-0 scale-50"
                  enterTo="opacity-100 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                >
                  <NavBarLoginAndSign />
                </Transition>
              </div>
            )}
          </div>

          {/* nav cart */}
          <div>
            <div>
              <ShoppingCartIcon
                className="relative w-6 h-6 cursor-pointer text-mainGray"
                onClick={openCartHandler}
              />
              {cartItemsCount > 0 && (
                <span className="rounded-full bg-red-600 sm:px-[0.45em] px-[0.35em] sm:py-[0.15em] py-[0.1em] text-xs font-bold text-white absolute top-2 ml-4">
                  {cartItemsCount}
                </span>
              )}
            </div>

            <AnimatePresence>
              {openCart && (
                <motion.div
                  key="cart"
                  initial={{ x: "20em", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "20em", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute top-0 right-0
                    w-[320px] h-[100vh] bg-secondary z-20 shadow-md `}
                >
                  <NavBarCart
                    openCartHandler={openCartHandler}
                    openCart={openCart}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {openCart && (
              <BackDrop openCartHandler={() => setOpenCart(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
