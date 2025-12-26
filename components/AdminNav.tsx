export default function AdminNav() {
  return (
    <aside className="w-64 bg-green-800 text-white p-6 space-y-4">
      <h2 className="text-xl font-bold">CeloHT Admin</h2>
      <nav className="space-y-2">
        <a href="/admin" className="block">Dashboard</a>
        <a href="/admin/donations" className="block">Donations</a>
        <a href="/admin/blog" className="block">Blog CMS</a>
        <a href="/admin/settings" className="block">Settings</a>
      </nav>
    </aside>
  );
}