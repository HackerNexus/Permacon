"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MessageSquare,
  Star,
  TrendingUp,
} from "lucide-react";

interface DashboardData {
  bookings: number;
  feedback: number;
  testimonials: number;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    bookings: 0,
    feedback: 0,
    testimonials: 0,
  });

  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    try {
      const response = await fetch("http://permacon.onrender.com/dashboard");
      const result = await response.json();

      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();

    // Refresh every 10 seconds
    const interval = setInterval(loadDashboard, 10000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Bookings",
      value: data.bookings,
      icon: CalendarCheck,
      color: "bg-blue-600",
    },
    {
      title: "Feedback",
      value: data.feedback,
      icon: MessageSquare,
      color: "bg-green-600",
    },
    {
      title: "Testimonials",
      value: data.testimonials,
      icon: Star,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Welcome to the Permacon Enterprises Admin Panel.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl border border-white/10 bg-[#07111f] p-6"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-5xl font-bold text-white">

                    {loading ? "..." : card.value}

                  </h2>

                </div>

                <div className={`${card.color} rounded-xl p-4`}>

                  <Icon className="h-8 w-8 text-white" />

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Analytics */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .4 }}
        className="rounded-2xl border border-white/10 bg-[#07111f] p-8"
      >

        <div className="flex items-center gap-4 mb-6">

          <TrendingUp className="h-8 w-8 text-blue-400" />

          <h2 className="text-2xl font-bold">
            Website Summary
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-[#050816] p-6 border border-white/10">

            <p className="text-gray-400">
              Total Bookings
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-400">

              {loading ? "..." : data.bookings}

            </p>

          </div>

          <div className="rounded-xl bg-[#050816] p-6 border border-white/10">

            <p className="text-gray-400">
              Customer Feedback
            </p>

            <p className="mt-2 text-3xl font-bold text-green-400">

              {loading ? "..." : data.feedback}

            </p>

          </div>

          <div className="rounded-xl bg-[#050816] p-6 border border-white/10">

            <p className="text-gray-400">
              Public Testimonials
            </p>

            <p className="mt-2 text-3xl font-bold text-yellow-400">

              {loading ? "..." : data.testimonials}

            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
}