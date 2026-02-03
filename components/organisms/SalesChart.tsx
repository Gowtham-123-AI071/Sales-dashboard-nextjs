'use client';
import React, { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import ToggleGroup from '../atoms/ToggleGroup';
import Input from '../atoms/Input';
import ChartCard from '../molecules/ChartCard';
import { allSales, MonthSale } from '../../data/sales';

export default function SalesChart({ year }: { year: number }) {
  const [chartType, setChartType] = useState('Bar');
  const [threshold, setThreshold] = useState<number | ''>('' as any);

  // keep input text only
  const [inputValue, setInputValue] = useState('');

  const data = useMemo(() => {
    const filtered = allSales.filter(s => s.year === year);

    // ✅ FIXED: only threshold controls filter
    if (threshold !== '')
      return filtered.filter(f => f.sales >= Number(threshold));

    return filtered;
  }, [threshold, year]);

  const pieData = data.map(item => ({
    name: item.month,
    value: item.sales
  }));

  const COLORS = ['#6366f1', '#22c55e', '#f97316', '#e11d48', '#0ea5e9', '#a855f7'];

  return (
    <ChartCard title={`Sales - ${year}`}>

      {/* controls */}
      {/* ✅ ONLY UPDATED: flex-wrap added */}
      <div className="flex flex-wrap items-center gap-3 mb-4">

        <ToggleGroup value={chartType} onChange={setChartType} options={['Bar','Line','Pie']} />

        {/* ✅ ONLY ADDED: responsive width wrapper */}
        <div className="w-32 sm:w-40 md:w-48">
          <Input
            placeholder="Min sales"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-600 text-white px-3 py-2 rounded"
          onClick={()=>setThreshold(Number(inputValue))}
        >
          Filter
        </button>

        <button
          className="bg-gray-400 text-white px-3 py-2 rounded"
          onClick={()=>{setThreshold(''); setInputValue('');}}
        >
          Reset
        </button>
      </div>

      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          {chartType === 'Bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3b82f6" />
            </BarChart>
          ) : chartType === 'Line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          ) : (
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={110} dataKey="value" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
