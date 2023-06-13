"use client";

import Link from "next/link";
import { navLinks } from "@/utils/constans";
import { usePathname } from "next/navigation";

//icons
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  //nav link active
  const pathname = usePathname();

  return pathname === "/dashboard" ? (
    ""
  ) : pathname === "/dashboard/users" ? (
    ""
  ) : pathname === "/dashboard/products" ? (
    ""
  ) : pathname === "/dashboard/payment" ? (
    ""
  ) : (
    <footer className="sm:px-16 px-6 w-full h-full py-[2em] mt-[2em]">
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="sm:mb-0 mb-[3em]">
          <Link
            href="/"
            className="font-bold xs:text-[1.3rem] sm:text-[1.5rem] text-[1.1rem] text-mainGray"
          >
            Mo <span className="text-secondary">Commerce</span>
          </Link>
          <div className="flex items-center justify-start gap-3 sm:justify-between">
            <div>
              <MapPinIcon className="w-6 h-6 mt-3 text-mainGray" />
              <EnvelopeIcon className="w-6 h-6 my-3 text-mainGray" />
              <PhoneIcon className="w-6 h-6 text-mainGray" />
            </div>
            <div>
              <h2 className="font-medium text-mainGray xs:text-[1rem] text-[0.8rem] mt-3 sm:w-[80%] md:w-full w-full">
                184 Main Rd E, St Albans VIC 3021, Australia
              </h2>
              <h2 className="font-medium text-mainGray text-[1rem] my-3">
                contact@company.com
              </h2>
              <h2 className="font-medium text-mainGray text-[1rem]">
                +001 2233 445
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:gap-[10em] gap-[5em]">
          <div>
            <h2 className="font-semibold text-mainGray text-[1.2rem]">Links</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} className="mt-3">
                  <Link
                    href={link.link}
                    className="font-medium text-mainGray text-[1rem]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-mainGray text-[1.2rem]">
              Newsletter
            </h2>
            <p className="font-medium text-mainGray xs:text-[1rem] text-[0.8rem] my-3">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className="relative flex items-center">
              <input
                id='searchfo'
                type="text"
                placeholder="Your email address"
                className="w-full px-3 py-3 bg-transparent border rounded-md text-mainGray border-secondary focus:outline-none"
              />
              <button className="absolute right-0 px-3 py-2 mr-2 rounded-md bg-secondary text-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
