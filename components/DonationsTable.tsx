export default function DonationsTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">Recent Donations</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th>Wallet</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0xA3...9F</td>
            <td>50 cUSD</td>
            <td>2025-01-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}