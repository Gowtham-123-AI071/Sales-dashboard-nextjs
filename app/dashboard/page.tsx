'use client';

import React, { useState } from "react";
import DashboardPanel from "../../components/organisms/DashboardPanel";
import SalesChart from "../../components/organisms/SalesChart";


export default function DashboardPage() {
  const [year, setYear] = useState(2024);

  return (
    <DashboardPanel>
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>

      {/* Year Selector */}
      <div className="mb-6">
        <select
          className="border px-4 py-2 rounded-md"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
        </select>
      </div>

      {/* Single Chart */}
      <SalesChart year={year} />
    </DashboardPanel>
  );
}
