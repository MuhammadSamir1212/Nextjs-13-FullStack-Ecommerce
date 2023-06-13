"use client";
//general
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getError } from "@/utils/error";
import axios from "axios";

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  const signUpSubmit = async ({ name, email, password }) => {
    try {
      setLoading(true);
      const respons = await axios.post(
        `${process.env.API_URL}/api/auth/signup`,
        {
          name,
          email,
          password,
        }
      );
      setLoading(false);
      if (respons.status === 201) {
        router.push("/login");
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(signUpSubmit)}>
      <div className="md:w-[50%] w-full mx-auto">
        <div className="mb-[0.5em]">
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
        <div className="mb-[0.5em]">
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
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
              errors?.password ? "border-red-500" : "border-primary"
            }`}
            autoFocus
          />

          {errors?.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            id="confirmpPassword"
            type="password"
            {...register("confirmpPassword", {
              required: "Please enter password",
              validate: (value) =>
                value === passwordValue || "The passwords do not match",
            })}
            className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
              errors?.confirmpPassword ? "border-red-500" : "border-primary"
            }`}
            autoFocus
          />

          {errors?.confirmpPassword && (
            <div className="text-red-500 ">
              {errors.confirmpPassword.message}
            </div>
          )}
        </div>
        <div className="my-[1em]">
          <button
            disabled={loading}
            className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
          >
            {loading ? "Loading..." : "Sign up"}
          </button>
        </div>
        <div className="font-medium text-primary md:text-[1.2rem] text-[1rem]">
          have an account? &nbsp;
          <Link href="/login" className="text-secondary">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
