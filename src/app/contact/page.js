import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

//icons
import {
  ChevronRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

//metaData
export const metadata = {
  title: "Contact",
  description: "The React Framework for the Web",
};

export default function Contact() {
  return (
    <>
      <div className="bg-[url(/contact-home.jpg)] bg-center bg-cover bg-no-repeat h-[280px]">
        <div className="flex flex-col items-center justify-center text-center contact-overlay">
          <h2 className="font-semibold text-mainGray text-[1.3rem]">
            Contact Us
          </h2>
          <p className="font-medium text-mainGray md:text-[1.2rem] text-[1rem] mt-2">
            Contact us for a better experience
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
        <Link
          href="/contact"
          className="font-semibold text-primary text-[1rem]"
        >
          Contact
        </Link>
      </div>
      <div className="sm:px-16 px-6 pt-[2em] w-full h-full">
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.893724401628!2d144.8137714!3d-37.74563740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65fa6debeb781%3A0xe1d23f5d1759961e!2s184%20Main%20Rd%20E%2C%20St%20Albans%20VIC%203021%2C%20Australia!5e0!3m2!1sen!2seg!4v1681387134215!5m2!1sen!2seg"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        <div className="flex md:flex-row flex-col justify-between mt-[2em] mb-[3em]">
          <div className="flex-1">
            <h2 className="font-bold xs:text-[1.5rem] sm:text-[1.7rem] text-[1.3rem] text-primary mb-[0.5em]">
              Drop a question
            </h2>
            <ContactForm />
          </div>
          <div className="flex-1">
            <h2 className="font-bold xs:text-[1.5rem] sm:text-[1.7rem] text-[1.3rem] text-primary mb-[0.5em]">
              Contact information
            </h2>
            <p className="font-medium text-primary xs:text-[1rem] text-[0.8rem] sm:w-[80%] w-full">
              We love to hear from you on our customer service, merchandise,
              website or any topics you want to share with us. Your comments and
              suggestions will be appreciated. Please complete the form below.
            </p>
            <div className="flex gap-3">
              <div>
                <MapPinIcon className="w-6 h-6 mt-3 text-primary" />
                <EnvelopeIcon className="w-6 h-6 my-3 text-primary" />
                <PhoneIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-medium text-primary xs:text-[1rem] text-[0.8rem] mt-3 sm:w-[80%] md:w-full w-full">
                  184 Main Rd E, St Albans VIC 3021, Australia
                </h2>
                <h2 className="font-medium text-primary text-[1rem] my-3">
                  contact@company.com
                </h2>
                <h2 className="font-medium text-primary text-[1rem]">
                  +001 2233 445
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
