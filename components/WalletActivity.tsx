export default function WalletActivity() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">On-chain Activity</h3>
      <ul className="space-y-2 text-sm">
        <li>Donation received – 20 cUSD</li>
        <li>Withdrawal executed</li>
        <li>New wallet connected</li>
      </ul>
    </div>
  );
}