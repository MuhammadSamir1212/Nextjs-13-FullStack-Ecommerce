"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function UpdateUserProfile({ handelClose, userData, setPopup }) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);

  //next auth
  const { data: session } = useSession();
  const findUser = userData?.find((item) => item._id === session?.user?._id);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (findUser) {
      setImage(findUser.avatar);
      setValue("name", findUser?.name);
      setValue("email", findUser?.email);
    }
  }, [
    setValue,
    setImage,
    findUser,
    findUser?.name,
    findUser?.email,
    findUser?.avatar,
  ]);

  // image upload to cloudinary
  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.CLOUDINARY_PRESET);
      formData.append("cloud_name", process.env.CLOUDINARY_NAME);

      const { data } = await axios.post(process.env.CLOUDINARY_URL, formData);
      setImage(data?.secure_url);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (formValue) => {
    try {
      setLoading(true);
      await axios.patch(
        `${process.env.API_URL}/api/profile/${session?.user?._id}`,
        {
          name: formValue.name,
          email: formValue.email,
          password: formValue.password,
          avatar: image,
        }
      );
      setLoading(false);
      setPopup(false);
      toast.success("User Updated", {
        theme: "colored",
      });
    } catch (error) {
      setLoading(false);
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
            <div className="mb-[1em] flex flex-col items-start mx-auto">
              <Image
                src={image}
                alt="images"
                width={70}
                height={70}
                priority
                className="w-auto h-auto mx-auto border rounded-full shadow-sm border-secondary"
              />
              <input
                type="file"
                onChange={handleImageUpload}
                autoFocus
                accept=".jpg,.png,.jpeg"
                className="mt-[0.5em]"
              />
            </div>
            <div className="mb-[0.5em] flex flex-col items-start">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name")}
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
            <div className="mb-[0.5em] flex flex-col items-start">
              <label htmlFor="email">New Password</label>
              <input
                id="password"
                type="password"
                {...register("password")}
                className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                  errors?.password ? "border-red-500" : "border-primary"
                }`}
                autoFocus
              />
              {errors?.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
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
