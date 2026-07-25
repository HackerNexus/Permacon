"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Save,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your company information and website settings.
        </p>

      </motion.div>

      {/* Form */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .2 }}
        className="rounded-2xl border border-white/10 bg-[#07111f] p-8"
      >

        <div className="grid gap-6 md:grid-cols-2">

          {/* Company Name */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">

              <Building2 className="h-4 w-4 text-blue-400" />

              Company Name

            </label>

            <input
              type="text"
              defaultValue="Permacon Enterprises"
              className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">

              <Mail className="h-4 w-4 text-red-400" />

              Company Email

            </label>

            <input
              type="email"
              defaultValue="permaconenterprises@gmail.com"
              className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

          </div>

          {/* Phone */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">

              <Phone className="h-4 w-4 text-green-400" />

              Phone Number

            </label>

            <input
              type="text"
              defaultValue="+254 728 590 996"
              className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

          </div>

          {/* Website */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">

              <Globe className="h-4 w-4 text-cyan-400" />

              Website

            </label>

            <input
              type="text"
              defaultValue="https://permacon.co.ke"
              className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

        {/* Address */}

        <div className="mt-6">

          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">

            <MapPin className="h-4 w-4 text-orange-400" />

            Office Address

          </label>

          <textarea
            rows={4}
            defaultValue="Nairobi, Kenya"
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Save Button */}

        <div className="mt-8">

          <button
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >

            <Save className="h-5 w-5" />

            Save Changes

          </button>

        </div>

      </motion.div>

      {/* System Info */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="rounded-2xl border border-white/10 bg-[#07111f] p-8"
      >

        <h2 className="mb-6 text-2xl font-bold">
          System Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <p className="text-gray-400">
              Website
            </p>

            <p className="mt-1 font-semibold">
              Permacon Enterprises
            </p>

          </div>

          <div>

            <p className="text-gray-400">
              Version
            </p>

            <p className="mt-1 font-semibold">
              v1.0.0
            </p>

          </div>

          <div>

            <p className="text-gray-400">
              Backend
            </p>

            <p className="mt-1 font-semibold text-green-400">
              Connected
            </p>

          </div>

          <div>

            <p className="text-gray-400">
              Database
            </p>

            <p className="mt-1 font-semibold text-green-400">
              MySQL Connected
            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
}