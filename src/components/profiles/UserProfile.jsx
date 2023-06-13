"use client";
import { useState, useEffect } from "react";
import UpdateUserProfile from "./UpdateUserProfile";
import ProfileHistory from "./ProfileHistory";
import AdminBackDrop from "../helpers/AdminBackDrop";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function UserProfile() {
  const [userData, setUserData] = useState([]);
  const [popUp, setPopup] = useState(false);

  //next auth
  const { data: session } = useSession();

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/users`);
      setUserData(data);
    };
    fetchOrders();
  }, []);

  const handelOpen = (_id) => {
    setPopup(true);
  };

  const handelClose = () => {
    setPopup(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <div className="px-4 py-8 border-2 rounded-md flex-2 bg-primary border-secondary">
          <Image
            src={session?.user?.avatar}
            alt={session?.user?.name}
            width={80}
            height={90}
            priority
            className="w-auto h-auto mx-auto border rounded-full shadow-sm border-secondary"
          />
          <h2 className="text-mainGray font-bold text-[1.2rem] mt-[1em]">
            Name:
          </h2>
          <h3 className="text-mainGray font-semibold text-[0.9rem] mb-[1em]">
            {session?.user?.name}
          </h3>
          <h2 className="text-mainGray font-bold text-[1.2rem]">Email:</h2>
          <h3 className="text-mainGray font-semibold text-[0.9rem]">
            {session?.user?.email}
          </h3>
          <button
            onClick={handelOpen}
            className="text-semibold text-[1em] px-3 py-2 rounded-md bg-secondary text-primary mt-[1rem]"
          >
            Update
          </button>
        </div>
        <div className="flex-1">
          <ProfileHistory />
        </div>
      </div>
      {popUp && (
        <UpdateUserProfile
          handelClose={handelClose}
          userData={userData}
          setPopup={setPopup}
        />
      )}
      {popUp && <AdminBackDrop handelClose={handelClose} />}
    </>
  );
}
