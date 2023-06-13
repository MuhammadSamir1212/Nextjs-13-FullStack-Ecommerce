"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CheckoutWiard from "@/components/checkoutWizard/CheckoutWiard";
import ShippingForm from "@/components/forms/ShippingForm";

//icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

//metaData
export const metadata = {
  title: "Shipping Info",
  description: "The React Framework for the Web",
};

export default function ShippingScreen() {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router?.push("/login");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[280px]">
        <div className="flex flex-col items-center justify-center text-center contact-overlay">
          <h2 className="font-semibold text-mainGray text-[1.3rem]">
            Shipping Info
          </h2>
        </div>
      </div>
      <div className="sm:px-16 px-6 py-[0.7em] w-full h-full bg-mainGray flex items-center gap-3">
        <Link href="/" className="font-semibold text-primary text-[1rem]">
          Home
        </Link>
        <span>
          <ChevronRightIcon className="w-5 h-5 text-primary" />
        </span>
        <Link
          href="/shipping"
          className="font-semibold text-primary text-[1rem]"
        >
          Shipping Info
        </Link>
      </div>
      <div className="sm:px-16 px-6 md:py-[4em] py-[2em] w-full h-full">
        <CheckoutWiard activeStep={1} />
        <ShippingForm />
      </div>
    </>
  );
}
