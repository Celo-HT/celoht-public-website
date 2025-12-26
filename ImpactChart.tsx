"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Education", value: 40 },
  { name: "Financial Access", value: 35 },
  { name: "Community Support", value: 25 }
];

export default function ImpactChart() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">Impact Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}