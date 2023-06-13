export default function AdminBackDrop({ handelClose }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[100vh] z-30 bg-[rgba(0,0,0,0.5)]"
      onClick={handelClose}
    />
  );
}
