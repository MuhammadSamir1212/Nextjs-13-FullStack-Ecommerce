import { Cog8ToothIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <div className="w-full h-[80vh] mx-auto mt-[8em]">
      <Cog8ToothIcon className="w-8 h-8 mx-auto text-primary animate-spin" />
      <h2 className="p-5 mx-auto text-xl text-center text-primary">
        Loading...
      </h2>
    </div>
  );
}
