import Link from "next/link";

export default function ContactHome() {
  return (
    <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[350px] rounded-md">
      <div className="relative rounded-md contact-overlay">
        <div className="absolute right-[25%] top-[45%]">
          <Link
            href="/contact"
            className=" text-center font-semibold md:text-[1.8rem] text-[1.2rem] text-mainGray 
            bg-primary border border-secondary rounded-md py-8 px-4
            hover:bg-secondary hover:border-primary hover:text-primary 
            transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
