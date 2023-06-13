import Link from "next/link";
import Image from "next/image";

export default function GoShop() {
  return (
    <div className="sm:px-16 px-6 w-full h-full py-[2em]">
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <div className="relative overflow-hidden shadow-md bg-secondary">
          <Link href="/shop">
            <Image
              src="/slideLaptop1.png"
              alt="Summer 2023"
              width={650}
              height={650}
              priority
              className="w-auto h-auto hover:scale-125 ease-in-out duration-[1s]"
            />
          </Link>
          <div className="absolute md:bottom-[2em] bottom-[1em] left-0 right-0 mx-auto w-[100px]">
            <Link
              href="/shop"
              className="px-8 py-3 font-semibold bg-white shadow-md text-primary"
            >
              Laptops
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 sm:flex-col">
          <div className="relative overflow-hidden shadow-md bg-mainGray">
            <Link href="/shop">
              <Image
                src="/slideLaptop2.png"
                alt="Summer 2023"
                width={350}
                height={350}
                priority
                className="w-auto h-auto hover:scale-125 ease-in-out duration-[1s]"
              />
            </Link>
            <div className="absolute md:bottom-[2em] bottom-[1em] left-0 right-0 mx-auto md:w-[140px] w-[80px]">
              <Link
                href="/shop"
                className="bg-white text-primary font-semibold md:text-[0.9rem] text-[0.7rem] md:px-8 px-2 md:py-3 py-2 shadow-md"
              >
                Accessories
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden shadow-md bg-mainGray">
            <Link href="/shop">
              <Image
                src="/slideLaptop3.png"
                alt="Summer 2023"
                width={350}
                height={350}
                priority
                className="w-auto h-auto hover:scale-125 ease-in-out duration-[1s]"
              />
            </Link>
            <div className="absolute md:bottom-[2em] bottom-[1em] left-0 right-0 mx-auto w-[90px]">
              <Link
                href="/shop"
                className="bg-white text-primary font-semibold md:text-[1rem] text-[0.8rem] md:px-8 px-6 md:py-3 py-2"
              >
                Mouse
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden shadow-md bg-mainGray">
          <Link href="/shop">
            <Image
              src="/slideLaptop1.png"
              alt="Summer 2023"
              width={650}
              height={650}
              priority
              className="w-auto h-auto hover:scale-125 ease-in-out duration-[1s]"
            />
          </Link>
          <div className="absolute md:bottom-[2em] bottom-[1em] left-0 right-0 mx-auto w-[100px]">
            <Link
              href="/shop"
              className="px-8 py-3 font-semibold bg-white shadow-md text-primary"
            >
              Keyboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
