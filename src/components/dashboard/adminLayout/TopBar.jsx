"use client";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import UserLogin from "@/components/mainLayout/navbar/navHelper/UserLogin";
//next auth
import { useSession } from "next-auth/react";

export default function TopBar({ showNav, setShowNav }) {
  //next auth
  const { data: session } = useSession();
  return (
    <div
      className={`fixed w-full h-16 bg-primary shadow-md flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="w-8 h-8 cursor-pointer text-mainGray"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <UserLogin
          name={session?.user?.name}
          avatar={session?.user?.avatar}
          isAdmin={session?.user?.isAdmin}
        />
      </div>
    </div>
  );
}
