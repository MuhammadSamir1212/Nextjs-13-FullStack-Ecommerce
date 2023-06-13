"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function AdminProductForm({ productsData, currentId }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState([]);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const findProduct = productsData?.find((item) => item._id === currentId);

  useEffect(() => {
    if (findProduct) {
      setImage(findProduct?.image);
      setValue("title", findProduct?.title);
      setValue("price", findProduct?.price);
      setValue("instoke", findProduct?.instoke);
      setValue("categori", findProduct?.categori);
      setValue("desciption", findProduct?.desciption);
    }
  }, [setValue, findProduct, setImage, currentId, productsData]);

  // image upload to cloudinary
  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files;

      // progress bar upload
      const uploadOptions = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setProgress(Math.round(100 * loaded) / total);
        },
      };

      let imageArr = [];

      for (let i = 0; i < file.length; i++) {
        const formData = new FormData();
        formData.append("file", file[i]);
        formData.append("upload_preset", process.env.CLOUDINARY_PRESET);
        formData.append("cloud_name", process.env.CLOUDINARY_NAME);

        const { data } = await axios.post(
          process.env.CLOUDINARY_URL,
          formData,
          uploadOptions
        );
        imageArr.push({ url: data?.secure_url });
      }

      setImage(imageArr);
    } catch (err) {
      console.log(err);
    }
  };

  const productSubmit = async (formValue) => {
    let allFormData = { ...formValue, image: image };
    if (findProduct) {
      // update user
      try {
        setLoading(true);
        await axios.patch(`${process.env.API_URL}/api/products/${currentId}`, {
          image: image,
          title: formValue.title,
          price: formValue.price,
          instoke: formValue.instoke,
          categori: formValue.categori,
          desciption: formValue.desciption,
        });
        setLoading(false);
        toast.success("User Updated", {
          theme: "colored",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      // add user
      try {
        setLoading(true);
        await axios.post(`${process.env.API_URL}/api/products`, allFormData);
        toast.success("Product added", {
          theme: "colored",
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="mb-[2em]">
      <form onSubmit={handleSubmit(productSubmit)}>
        <div className="md:w-[80%] w-full mx-auto">
          <div className="mb-[1em] flex flex-col items-start">
            <label htmlFor="image" className="mb-[0.5em]">
              Upload Images
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              autoFocus
              accept=".jpg,.png,.jpeg"
              multiple
            />
            {/* progressbar */}
            <div className="w-full bg-primary rounded-full h-2.5 mt-2">
              <div
                className="bg-secondary h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* image perview */}
            <div className="flex items-center w-full p-2 mt-2 border border-secondary">
              {image &&
                image.length > 0 &&
                image.map((images, index) => (
                  <div className="mx-2" key={index}>
                    <Image
                      src={images?.url}
                      alt="images"
                      width={70}
                      height={70}
                      priority
                      className="w-auto h-auto"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="mb-[0.5em] flex flex-col items-start">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              {...register("title", {
                required: "Please enter title",
              })}
              className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                errors?.title ? "border-red-500" : "border-primary"
              }`}
              autoFocus
            />
            {errors?.title && (
              <div className="text-red-500">{errors.title.message}</div>
            )}
          </div>
          <div className="mb-[0.5em] flex flex-col items-start">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              {...register("price", {
                required: "Please enter price",
              })}
              className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                errors?.price ? "border-red-500" : "border-primary"
              }`}
              autoFocus
            />
            {errors?.price && (
              <div className="text-red-500">{errors.price.message}</div>
            )}
          </div>
          <div className="mb-[0.5em] flex flex-col items-start">
            <label htmlFor="instoke">In stoke</label>
            <input
              id="instoke"
              type="number"
              {...register("instoke", {
                required: "Please enter instoke",
              })}
              className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                errors?.instoke ? "border-red-500" : "border-primary"
              }`}
              autoFocus
            />
            {errors?.instoke && (
              <div className="text-red-500">{errors.instoke.message}</div>
            )}
          </div>
          <div className="mb-[0.5em] flex flex-col items-start">
            <label htmlFor="categori">Categori</label>
            <input
              id="categori"
              type="text"
              {...register("categori", {
                required: "Please enter instoke",
              })}
              className={`border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full ${
                errors?.categori ? "border-red-500" : "border-primary"
              }`}
              autoFocus
            />
            <p className="font-normal mb-[0.5em] text-[0.8rem] text-primary">
              plese choose between this : cheep, mid, high
            </p>
            {errors?.categori && (
              <div className="text-red-500">{errors.categori.message}</div>
            )}
          </div>
          <div className="mb-[0.5em] flex flex-col items-start">
            <label htmlFor="desciption">Desciption</label>
            <textarea
              id="desciption"
              type="text"
              rows={3}
              {...register("desciption", {
                required: "Please enter desciption",
              })}
              className={`resize-none border py-1 px-2 my-[0.5em] text-primary focus:outline-none w-full  ${
                errors?.desciption ? "border-red-500" : "border-primary"
              }`}
              autoFocus
            />
            {errors?.desciption && (
              <div className="text-red-500">{errors.desciption.message}</div>
            )}
          </div>
          <div className="my-[1em]">
            <button
              disabled={loading}
              className="bg-secondary font-semibold text-[1rem] text-primary px-4 py-2 rounded-md "
            >
              {loading
                ? "Loading..."
                : findProduct
                ? "Update Product"
                : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
