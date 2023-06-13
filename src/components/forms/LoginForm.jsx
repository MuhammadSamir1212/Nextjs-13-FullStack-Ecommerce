"use client";
//general
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

//auth
import { signIn } from "next-auth/react";
import { getError } from "@/utils/error";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [togleEye, setTogleEye] = useState(false);

  const handelEye = () => {
    setTogleEye(!togleEye);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      setLoading(false);
      if (result.ok) {
        router.push("/");
      }
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <div className="md:w-[50%] w-full mx-auto">
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
          <div className="relative flex items-center">
            <input
              id="password"
              type={togleEye ? "text" : "password"}
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "password is more than 5 chars",
                },
              })}
              className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                errors?.password ? "border-red-500" : "border-primary"
              }`}
              autoFocus
            />
            {togleEye ? (
              <EyeIcon
                className="absolute right-0 w-5 h-5 mr-3 cursor-pointer text-primary"
                onClick={handelEye}
              />
            ) : (
              <EyeSlashIcon
                className="absolute right-0 w-5 h-5 mr-3 cursor-pointer text-primary"
                onClick={handelEye}
              />
            )}
          </div>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="my-[1em]">
          <button
            disabled={loading}
            className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-start items-start font-medium text-primary md:text-[1.2rem] text-[1rem]">
          <div>
            Don&apos;t have an account? &nbsp;
            <Link href="/signup" className="text-secondary">
              Sign Up
            </Link>
          </div>
          <div>
            <h2>Forgot Your Password?</h2>
          </div>
        </div>
      </div>
    </form>
  );
}
