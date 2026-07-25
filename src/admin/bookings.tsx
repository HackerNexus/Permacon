"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Phone, Mail, Trash2 } from "lucide-react";

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export default function bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Booking Requests
        </h1>

        <p className="text-gray-400 mt-2">
          View all construction consultation requests submitted from the website.
        </p>

      </div>

      {/* Table */}

      <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">

        {loading ? (

          <div className="py-24 text-center text-gray-400">
            Loading bookings...
          </div>

        ) : bookings.length === 0 ? (

          <div className="py-24 flex flex-col items-center">

            <CalendarCheck className="w-16 h-16 text-blue-400 mb-5" />

            <h2 className="text-2xl font-semibold text-white">
              No Bookings Yet
            </h2>

            <p className="text-gray-400 mt-2">
              Booking requests submitted through the website will appear here.
            </p>

          </div>

        ) : (

          <table className="w-full">

            <thead className="bg-[#081221]">

              <tr className="text-left">

                <th className="px-6 py-5">
                  Client
                </th>

                <th className="px-6 py-5">
                  Service
                </th>

                <th className="px-6 py-5">
                  Preferred Date
                </th>

                <th className="px-6 py-5">
                  Message
                </th>

                <th className="px-6 py-5 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking.id}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  <td className="px-6 py-5">

                    <div className="font-semibold text-white">
                      {booking.name}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">

                      <Mail className="w-4 h-4 text-red-400" />

                      {booking.email}

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">

                      <Phone className="w-4 h-4 text-green-400" />

                      {booking.phone}

                    </div>

                  </td>

                  <td className="px-6 py-5 text-blue-400">
                    {booking.service}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {booking.date}
                  </td>

                  <td className="px-6 py-5 max-w-sm text-gray-400">
                    {booking.message}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <button
                      className="inline-flex items-center gap-2 rounded-xl bg-red-500/20 px-4 py-2 text-red-400 hover:bg-red-500/30 transition"
                    >

                      <Trash2 className="w-4 h-4" />

                      Delete

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}