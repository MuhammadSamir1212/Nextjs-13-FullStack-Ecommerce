"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SideBar from "@/components/dashboard/adminLayout/SideBar";
import TopBar from "@/components/dashboard/adminLayout/TopBar";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashBoardLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const router = useRouter();

  //next auth
  const { status,data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router?.push("/login");
    },
  });

  return session?.user?.isAdmin ? (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <AnimatePresence>
        {showNav && (
          <motion.div
            key="menu"
            initial={{ x: "-20em", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-20em", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed z-20 shadow-md"
          >
            <SideBar />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        className={`pt-16 bg-mainGray transition-all duration-[400ms] ${
          showNav ? "md:pl-56 pl-0" : ""
        }`}
      >
        <div className="px-6 sm:px-16">{children}</div>
      </main>
    </>
  ) : (
    <h2 className="font-semibold text-primary text-center text-[1.2rem] my-[10em]">
      Sorry you not allow{" "}
      <Link href="/" className="text-secondary">
        Home
      </Link>
    </h2>
  );
}
