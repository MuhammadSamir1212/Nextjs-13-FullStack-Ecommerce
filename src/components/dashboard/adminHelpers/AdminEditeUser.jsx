"use client";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function AdminEditeUser({
  handelClose,
  currentId,
  userData,
  setPopup,
}) {
  const [loading, setLoading] = useState(false);
  const findUser = userData?.find((item) => item._id === currentId);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (findUser) {
      setValue("name", findUser?.name);
      setValue("email", findUser?.email);
      setValue("isAdmin", findUser?.isAdmin);
    }
  }, [setValue, findUser, findUser?.name, findUser?.email, findUser?.isAdmin]);

  const updateUser = async (formValue) => {
    try {
      setLoading(true);
      await axios.patch(`${process.env.API_URL}/api/users/${currentId}`, {
        name: formValue.name,
        email: formValue.email,
        isAdmin: formValue.isAdmin,
      });

      setLoading(false);
      setPopup(false);
      toast.success("User Updated", {
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-[4vh] left-0 right-0 mx-auto bg-white p-4 text-center md:w-[50%] w-[90%]  z-40 rounded-[15px]">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[1rem] text-primary">Edite User</h2>
        <XMarkIcon
          className="w-5 h-5 cursor-pointer text-primary"
          onClick={handelClose}
        />
      </div>

      <div className="my-[2em]">
        <form onSubmit={handleSubmit(updateUser)}>
          <div className="md:w-[80%] w-full mx-auto">
            <div className="mb-[0.5em] flex flex-col items-start">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Please enter name",
                })}
                className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                  errors?.name ? "border-red-500" : "border-primary"
                }`}
                autoFocus
              />
              {errors?.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>
            <div className="mb-[0.5em] flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter valid email",
                  },
                })}
                className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                  errors?.email ? "border-red-500" : "border-primary"
                }`}
                autoFocus
              />
              {errors?.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className="my-[0.5em] flex justify-start items-center gap-4">
              <input id="isAdmin" type="checkbox" {...register("isAdmin")} />
              <label htmlFor="isAdmin">Admin</label>
            </div>
            <div className="my-[1em]">
              <button
                disabled={loading}
                className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
              >
                {loading ? "Loading..." : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
