export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-green-700">{value}</p>
    </div>
  );
}