"use client";

import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function layout() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 flex flex-col lg:ml-72">

        {/* Top Navigation */}

        <Navbar />

        {/* Page Content */}

        <main className="flex-1 p-6 md:p-8 bg-gradient-to-br from-[#050816] via-[#07111f] to-[#081221]">

          <div className="max-w-7xl mx-auto">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
}