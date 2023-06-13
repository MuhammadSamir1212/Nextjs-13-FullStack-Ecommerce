"use client";
import AdminUserCount from "./AdminUserCount";
import AdminProductCount from "./AdminProductCount";
import AdminTotalCount from "./AdminTotalCount";
import AdminChart from "./AdminChart";

export default function AdminHome() {
  return (
    <div className="py-[2em]">
      <p className="text-gray-700 text-3xl mb-[2em] font-bold">Dashboard</p>

      <div className="grid gap-5 mb-16 lg:grid-cols-3">
        <div className="h-40 bg-white rounded shadow-sm">
          <AdminUserCount />
        </div>
        <div className="h-40 bg-white rounded shadow-sm">
          <AdminProductCount />
        </div>
        <div className="h-40 bg-white rounded shadow-sm">
          <AdminTotalCount />
        </div>
      </div>
      <div className="grid bg-white shadow-sm col-1 h-96">
        <AdminChart />
      </div>
    </div>
  );
}
