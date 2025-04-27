import Sidebar from "@/components/dashboard/sideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 bg-indigo-50 h-screen">{children}</main>
    </div>
  );
}
