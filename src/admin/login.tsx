"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary client-side login for testing
    // Replace with backend auth later

    if (
      username === "Permacon Enterprises" &&
      password === "@Permaconadmin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("adminUser", username);
      navigate("/admin/dashboard", { replace: true });
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
      >
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
            <Building2 className="h-12 w-12 text-blue-400" />
          </div>
        </div>

        <h1 className="mt-6 text-center text-4xl font-bold text-white">
          Admin Login
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Permacon Enterprises Dashboard
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Username
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                type="text"
                required
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder="admin"
                className="w-full rounded-xl border border-white/10 bg-[#081221] py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-400" />

              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                className="w-full rounded-xl border border-white/10 bg-[#081221] py-3 pl-12 pr-12 text-white outline-none transition focus:border-blue-500"
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-8 rounded-xl border border-white/10 bg-[#081221] p-5">
          <h3 className="mb-3 text-lg font-semibold text-blue-400">
            Demo Login
          </h3>

          <p className="text-sm text-gray-400">
            <strong>Username:</strong>
            <br />
            admin
          </p>

          <p className="mt-3 text-sm text-gray-400">
            <strong>Password:</strong>
            <br />
            admin123
          </p>
        </div>
      </motion.div>
    </div>
  );
}