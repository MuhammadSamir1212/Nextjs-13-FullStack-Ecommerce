import UserAdmin from "@/components/dashboard/adminSections/userAdmin/UserAdmin";

export default function UsersPage() {
  return (
    <div className="py-[2em]">
      <p className="mb-[2em] text-3xl font-bold text-gray-700">Users Data</p>

      <UserAdmin />
    </div>
  );
}
