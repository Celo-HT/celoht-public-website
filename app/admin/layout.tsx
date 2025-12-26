import AdminNav from "./components/AdminNav";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}