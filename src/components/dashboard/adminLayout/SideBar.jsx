import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminLinks } from "@/utils/constans";
import Image from "next/image";

export default function SideBar() {
  //nav link active
  const pathname = usePathname();

  return (
    <div className="w-56 h-[100vh] bg-primary ">
      <div className="flex justify-center py-6 mb-4 border-b-2 border-secondary">
        <Link href="/">
          <Image
            src="/msa-logo-circle-no-back-ground.png"
            alt="logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>
      <div className="flex flex-col">
        {adminLinks.map((sideLink) => (
          <Link href={sideLink.link} key={sideLink.id}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                pathname === sideLink.link
                  ? "bg-secondary text-primary"
                  : "text-mainGray hover:bg-secondary hover:text-primary"
              }`}
            >
              <div className="mr-2">{sideLink.icon}</div>
              <div>
                <p>{sideLink.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
