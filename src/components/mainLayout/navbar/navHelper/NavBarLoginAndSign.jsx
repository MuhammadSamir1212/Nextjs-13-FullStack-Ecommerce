import Link from 'next/link';

export default function NavBarLoginAndSign() {
  return (
    <div className="absolute bg-secondary p-2 rounded-md top-[1.2em] sm:right-[0.5em] right-[0.2em] flex flex-col justify-around items-center">
      <Link
        href="/login"
        className="bg-primary font-semibold md:text-[1rem] text-[0.8rem] px-4 py-2 rounded-md text-mainGray"
      >
        Login
      </Link>
      <h2 className="font-semibold md:text-[1.1rem] text-[0.8rem] my-2">or</h2>
      <Link
        href="/signup"
        className="bg-primary font-semibold md:text-[0.8rem] text-[0.7rem] px-[0.67rem] py-2 rounded-md text-mainGray"
      >
        Sign up
      </Link>
    </div>
  );
}
