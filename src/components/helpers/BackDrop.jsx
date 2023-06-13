export default function BackDrop({ openCartHandler }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[100vh] z-10 bg-[rgba(0,0,0,0.5)]"
      onClick={openCartHandler}
    />
  );
}
