import StatsCard from "./components/StatsCard";
import DonationsTable from "./components/DonationsTable";
import WalletActivity from "./components/WalletActivity";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">CeloHT Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Donations" value="1,200+ cUSD" />
        <StatsCard title="People Reached" value="200+" />
        <StatsCard title="Active Wallets" value="50+" />
      </div>

      <DonationsTable />
      <WalletActivity />
    </div>
  );
}