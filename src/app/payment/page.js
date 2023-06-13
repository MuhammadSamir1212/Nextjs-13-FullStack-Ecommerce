import Link from "next/link";
import CheckoutWiard from "@/components/checkoutWizard/CheckoutWiard";
import PaymentPage from "@/components/payments/PaymentPage";

//icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

//metaData
export const metadata = {
  title: "Payment",
  description: "The React Framework for the Web",
};

export default function PaymentScreen() {
  return (
    <div>
      <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[280px]">
        <div className="flex flex-col items-center justify-center text-center contact-overlay">
          <h2 className="font-semibold text-mainGray text-[1.3rem]">Payment</h2>
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
          href="/payment"
          className="font-semibold text-primary text-[1rem]"
        >
          Payment
        </Link>
      </div>
      <div className="sm:px-16 px-6 md:py-[4em] py-[2em] w-full h-full">
        <CheckoutWiard activeStep={2} />
        <div>
          <PaymentPage />
        </div>
      </div>
    </div>
  );
}
