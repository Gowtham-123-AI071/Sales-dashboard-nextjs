import React from "react";
import DashboardPanel from "../../components/organisms/DashboardPanel";
import SalesChart from "../../components/organisms/SalesChart";


export default function DashboardPage() {
  return (
    <DashboardPanel>
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SalesChart year={2024} />
        <SalesChart year={2023} />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <SalesChart year={2022} />

        {/* Future KPI / Pie Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
          <p className="text-gray-500">KPI / Pie Chart Coming Soon</p>
        </div>
      </div>
    </DashboardPanel>
  );
}
