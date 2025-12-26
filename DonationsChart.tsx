"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", amount: 120 },
  { month: "Feb", amount: 260 },
  { month: "Mar", amount: 480 },
  { month: "Apr", amount: 340 }
];

export default function DonationsChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">Donations (cUSD)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}