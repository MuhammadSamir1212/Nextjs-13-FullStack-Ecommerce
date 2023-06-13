"use client";
//general
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const contactSubmit = (formValues) => {
    setLoading(true);
    setTimeout(() => {
      console.log(formValues);
      setLoading(false);
      toast.success("Form submitted successfully", {
        theme: "colored",
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(contactSubmit)}>
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        <div className="md:w-[39%] w-full">
          <input
            type="text"
            placeholder="Your name"
            {...register("name", {
              required: "Please enter name",
            })}
            className={`border py-1 px-2 text-primary focus:outline-none w-full ${
              errors?.name ? "border-red-500" : "border-primary"
            }`}
          />
          {errors?.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="md:w-[39%] w-full ">
          <input
            type="email"
            placeholder="Your email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            className={`border  py-1 px-2 text-primary focus:outline-none w-full ${
              errors?.email ? "border-red-500" : "border-primary"
            }`}
          />
          {errors?.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
      </div>
      <div className="md:w-[80%] w-full my-[1em]">
        <input
          type="text"
          placeholder="Phone number"
          {...register("phone", {
            required: "Please enter phone",
          })}
          className={`w-full border border-primary py-1 px-2 text-primary focus:outline-none ${
            errors?.phone ? "border-red-500" : "border-primary"
          }`}
        />
        {errors?.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}
      </div>
      <div className="md:w-[80%] w-full">
        <textarea
          rows="5"
          placeholder="What's on your mind?"
          {...register("description", {
            required: "Please enter description",
          })}
          className={`resize-none w-full border border-primary py-1 px-2 text-primary focus:outline-none ${
            errors?.description ? "border-red-500" : "border-primary"
          }`}
        ></textarea>
        {errors?.description && (
          <div className="text-red-500">{errors.description.message}</div>
        )}
      </div>
      <div className="mt-[1em] md:mb-0 mb-[1em]">
        <button
          type="submit"
          disabled={loading}
          className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
        >
          {loading ? "Loading..." : "Ask a question"}
        </button>
      </div>
    </form>
  );
}
