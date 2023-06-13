import Link from "next/link";
import LoginForm from "@/components/forms/LoginForm";

//icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

//metaData
export const metadata = {
  title: "Login",
  description: "The React Framework for the Web",
};

export default function Login() {
  return (
    <>
      <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[280px]">
        <div className="flex flex-col items-center justify-center text-center contact-overlay">
          <h2 className="font-semibold text-mainGray text-[1.3rem]">
            Customer Login
          </h2>
          <p className="font-medium text-mainGray md:text-[1.2rem] text-[1rem] mt-2">
            Login for a better experience
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
        <Link href="/login" className="font-semibold text-primary text-[1rem]">
          Login
        </Link>
      </div>
      <div className="sm:px-16 px-6 md:py-[4em] py-[2em] w-full h-full">
        <LoginForm />
      </div>
    </>
  );
}
