import {
  Header,
  GoShop,
  Trending,
  ContactHome,
  Dilever,
} from "@/components/mainSections";

export default function Home() {
  return (
    <>
      <Header />
      <GoShop />
      <Trending />
      <div className="sm:px-16 px-6 w-full h-full py-[2em]">
        <ContactHome />
      </div>
      <Dilever />
    </>
  );
}
