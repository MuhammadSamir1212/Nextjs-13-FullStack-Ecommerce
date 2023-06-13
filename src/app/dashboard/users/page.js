import UserAdmin from "@/components/dashboard/adminSections/userAdmin/UserAdmin";

// Get Data
async function getUserData() {
  const res = await fetch(`${process.env.API_URL}/api/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const userData = await getUserData();

  return (
    <div className="py-[2em]">
      <p className="mb-[2em] text-3xl font-bold text-gray-700">Users Data</p>

      <UserAdmin userData={userData} />
    </div>
  );
}
