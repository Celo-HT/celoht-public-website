import { fetchDonations } from "@/lib/celoscan";

export const dynamic = "force-dynamic";

export default async function TransparencyPage() {
  const donations = await fetchDonations(
    process.env.NEXT_PUBLIC_DONATION_CONTRACT!
  );

  const total = donations.reduce(
    (sum, tx) => sum + Number(tx.value) / 1e18,
    0
  );

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">Transparency Dashboard</h1>

      <div className="bg-green-50 p-6 rounded-xl">
        <p className="text-lg">Total Donations</p>
        <p className="text-3xl font-bold text-green-700">
          {total.toFixed(2)} cUSD
        </p>
        <p className="text-sm text-gray-600">
          Data sourced live from Celo blockchain
        </p>
      </div>

      <table className="w-full text-sm bg-white shadow rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Tx</th>
            <th className="p-3">From</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.slice(0, 20).map(tx => (
            <tr key={tx.hash} className="border-t">
              <td className="p-3">
                <a
                  href={`https://celoscan.io/tx/${tx.hash}`}
                  target="_blank"
                  className="text-green-700 underline"
                >
                  View
                </a>
              </td>
              <td className="p-3">{tx.from.slice(0, 10)}…</td>
              <td className="p-3">
                {(Number(tx.value) / 1e18).toFixed(2)} cUSD
              </td>
              <td className="p-3">
                {new Date(tx.timeStamp * 1000).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}