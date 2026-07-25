"use client";

import { Bell, CalendarDays, Search, UserCircle } from "lucide-react";

export default function navbar() {
  const currentDate = new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-white/10 bg-[#07111f]/95 backdrop-blur">

      <div className="flex h-full items-center justify-between px-6">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold text-white">
            Admin Dashboard
          </h1>

          <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">

            <CalendarDays className="h-4 w-4 text-blue-400" />

            {currentDate}

          </p>

        </div>

        {/* Center Search */}

        <div className="hidden lg:flex w-full max-w-md mx-10">

          <div className="relative w-full">

            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search bookings, feedback..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Notifications */}

          <button className="relative rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-blue-500 hover:bg-blue-600/20">

            <Bell className="h-5 w-5 text-gray-300" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          {/* Admin */}

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">

            <UserCircle className="h-10 w-10 text-blue-400" />

            <div className="hidden md:block">

              <p className="font-semibold text-white">
                Administrator
              </p>

              <p className="text-sm text-gray-400">
                Permacon Enterprises
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}