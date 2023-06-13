import { dileverData } from "@/utils/constans";

export default function Dilever() {
  return (
    <div className="sm:px-16 px-6 w-full h-full sm:py-[4.5em] py-[2em]">
      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-0">
        {dileverData.map((dItem) => (
          <div key={dItem.id} className="flex items-start ">
            <div>{dItem.icon}</div>
            <div className="ml-[1em]">
              <h2 className="font-semibold md:text-[0.9em] text-[0.8em] text-primary mb-[0.4em]">
                {dItem.title}
              </h2>
              <p className="font-semibold md:text-[0.8em] text-[0.7em] text-gray-400 sm:w-[80%] w-[100%]">
                {dItem.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
