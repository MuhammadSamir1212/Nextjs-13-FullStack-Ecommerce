import Link from "next/link";
import ShopProducts from "@/components/shopPage/ShopProducts";

//icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

//metaData
export const metadata = {
  title: "Shop",
  description: "The React Framework for the Web",
};

// Get Data
async function getProductsData() {
  const res = await fetch(`${process.env.API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Shop() {
  const productsData = await getProductsData();

  return (
    <>
      <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[280px]">
        <div className="flex flex-col items-center justify-center text-center contact-overlay">
          <h2 className="font-semibold text-mainGray text-[1.3rem]">Shop</h2>
          <p className="font-medium text-mainGray md:text-[1.2rem] text-[1rem] mt-2">
            Shop through our latest selection of laptops.
          </p>
        </div>
      </div>
      <div className="sm:px-16 px-6 py-[0.7em] w-full h-full bg-mainGray flex items-center gap-3">
        <Link href="/" className="font-semibold text-primary text-[1rem]">
          Home
        </Link>
        <span>
          <ChevronRightIcon className="w-5 h-5 text-primary" />
        </span>
        <Link href="/shop" className="font-semibold text-primary text-[1rem]">
          Shop
        </Link>
      </div>
      <div className="sm:px-16 px-6 pt-[2em] w-full h-full">
        <ShopProducts productsData={productsData} />
      </div>
    </>
  );
}
