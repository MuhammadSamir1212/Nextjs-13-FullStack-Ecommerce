"use client";
import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function AdminUserCount() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${process.env.API_URL}/api/users`);
      setUserData(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="py-[2em] flex flex-col justify-center items-center">
      <UserIcon className="w-10 h-10 text-primary" />
      <h2 className="text-primary text-[1.5rem] font-semibold">Users</h2>
      <h2 className="text-secondary text-[1.5rem] font-semibold">
        {userData.length}
      </h2>
    </div>
  );
}
