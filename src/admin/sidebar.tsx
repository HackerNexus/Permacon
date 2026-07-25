"use client";

import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  MessageSquare,
  Star,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Bookings",
    path: "/admin/dashboard/bookings",
    icon: CalendarCheck,
  },
  {
    name: "Testimonials",
    path: "/admin/dashboard/testimonials",
    icon: Star,
  },
  {
    name: "Settings",
    path: "/admin/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove login session
    localStorage.removeItem("adminLoggedIn");

    // Redirect to login page
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-72 bg-[#07111f] border-r border-white/10 flex flex-col">

      {/* Logo */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">

            <Building2 className="h-7 w-7 text-blue-400" />

          </div>

          <div>

            <h1 className="text-xl font-bold">
              Permacon
            </h1>

            <p className="text-sm text-gray-400">
              Admin Panel
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>

                <NavLink
                  to={item.path}
                  end={item.path === "/admin/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />

                  <span className="font-medium">
                    {item.name}
                  </span>

                </NavLink>

              </li>
            );
          })}

        </ul>

      </nav>

      {/* Footer */}

      <div className="border-t border-white/10 p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-gray-400 transition-all duration-300 hover:bg-red-600 hover:text-white"
        >
          <LogOut className="h-5 w-5" />

          <span className="font-medium">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}