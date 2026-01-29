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

  const data = useMemo(() => {
    const filtered = allSales.filter(s => s.year === year);
    if (threshold !== '') return filtered.filter(f => f.sales >= Number(threshold));
    return filtered;
  }, [threshold, year]);

  const pieData = data.map(item => ({
    name: item.month,
    value: item.sales
  }));

  const COLORS = ['#6366f1', '#22c55e', '#f97316', '#e11d48', '#0ea5e9', '#a855f7'];

  return (
    <ChartCard title={`Sales - ${year}`}>
      <div className="flex items-center gap-3 mb-4">
        <ToggleGroup value={chartType} onChange={setChartType} options={['Bar', 'Line', 'Pie']} />
        <div className="w-48">
          <Input placeholder="Min sales (threshold)" value={threshold as any} onChange={(e)=>setThreshold(e.target.value ? Number(e.target.value) : '')} />
        </div>
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
