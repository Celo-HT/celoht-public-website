"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Week 1", wallets: 12 },
  { name: "Week 2", wallets: 24 },
  { name: "Week 3", wallets: 31 },
  { name: "Week 4", wallets: 45 }
];

export default function WalletsChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">Active Wallets</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="wallets" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}