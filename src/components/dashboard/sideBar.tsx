"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Settings2, SidebarIcon, Telescope, Trophy } from "lucide-react";
import ROUTES from "@/constant/routes";
import { HiChat } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: "Dashboard", icon: <HiHome />, href: ROUTES.Dashboard },
    {
      label: "My Learning Path",
      icon: <Telescope />,
      href: ROUTES.LEARNINGPATH,
    },
    { label: "Challenges", icon: <Trophy />, href: ROUTES.CHALLENGE },
    { label: "Mentor Chat", icon: <HiChat />, href: ROUTES.CHAT },
    { label: "Settings", icon: <Settings2 />, href: ROUTES.SETTING },
  ];

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden  justify-between bg-white border-b shadow-sm">
        <button onClick={toggleMobile} className="text-2xl text-indigo-500 m-4">
          <SidebarIcon />
        </button>
      </div>

      {/* Backdrop for mobile */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMobile}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed z-50 h-full bg-white border-r border-gray-200 transition-all duration-300 md:static md:translate-x-0",
          collapsed ? "md:w-[60px]" : "md:w-[220px]",
          mobileOpen
            ? "translate-x-0 w-[220px]"
            : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && (
            <h2 className="font-bold text-lg text-indigo-600 md:block">
              Mentor AI
            </h2>
          )}
          <button
            onClick={mobileOpen ? toggleMobile : toggleSidebar}
            className="text-xl ml-auto text-indigo-500"
          >
            <SidebarIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-2 mt-10">
          {navItems.map(({ label, icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => mobileOpen && toggleMobile()}
                className={clsx(
                  "flex items-center gap-4 p-2 rounded-md transition-colors",
                  "hover:bg-gray-100",
                  isActive
                    ? "bg-indigo-100 text-indigo-600 font-medium"
                    : "text-gray-700",
                  collapsed && "justify-center"
                )}
              >
                <span className="text-xl">{icon}</span>
                {!collapsed && (
                  <span
                    className={clsx("text-sm", collapsed && "hidden md:inline")}
                  >
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
