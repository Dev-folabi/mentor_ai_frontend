import Sidebar from "@/components/dashboard/sideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 bg-indigo-50 h-screen">{children}</main>
    </div>
  );
}
