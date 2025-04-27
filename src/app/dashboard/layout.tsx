import Sidebar from "@/components/dashboard/sideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 bg-indigo-50 overflow-y-auto  transition-all">
        {children}
      </main>
    </div>
  );
};

export default Layout;
