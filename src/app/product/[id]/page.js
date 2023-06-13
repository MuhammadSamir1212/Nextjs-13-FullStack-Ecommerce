import Link from "next/link";
import { notFound } from "next/navigation";

import ProductPageCom from "@/components/productPage/ProductPageCom";

//icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Get Data
async function getProductsData(id) {
  const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

// meta data
export async function generateMetadata({ params }) {
  const product = await getProductsData(params?.id);
  return {
    title: product.title,
    description: product.desc,
  };
}

export default async function ProductPage({ params }) {
  const productData = await getProductsData(params?.id);

  return (
    <>
      <div className="sm:px-16 px-6 py-[0.7em] mt-[3.5em] w-full h-full bg-mainGray flex items-center gap-3">
        <Link href="/" className="font-semibold text-primary text-[1rem]">
          Home
        </Link>
        <span>
          <ChevronRightIcon className="w-5 h-5 text-primary" />
        </span>
        <h2 className="font-semibold text-primary text-[1rem]">
          {productData.title}
        </h2>
      </div>
      <div className="sm:px-16 px-6 pt-[4em] pb-[2em] w-full h-full">
        <ProductPageCom productData={productData} />
      </div>
    </>
  );
}
