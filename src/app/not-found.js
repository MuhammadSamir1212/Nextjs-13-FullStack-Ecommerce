import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[80vh] mx-auto mt-[8em]">
      <h2 className="p-5 mx-auto text-xl font-bold text-center text-primary">
        404
      </h2>
      <h2 className="mx-auto text-xl text-center text-primary">
        Back to{" "}
        <Link href="/" className="text-secondary">
          Home
        </Link>
      </h2>
    </div>
  );
}
