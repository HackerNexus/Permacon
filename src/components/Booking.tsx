"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  date: string;
  message: string;
}

export default function Booking() {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setSuccess(false);
  };

  const submitBooking = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) throw new Error();

      // Save details for success popup
      setBookingInfo({
        name: form.name,
        phone: form.phone,
        service: form.service,
      });

      // Show success modal
      setSuccess(true);

      // Auto close after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // Clear form
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        service: "",
        date: "",
        message: "",
      });

    } catch {
      alert(
        "Unable to submit your booking. Please try again."
      );
    }

    setLoading(false);
  };
  return (
  <>
    <AnimatePresence>

      {success && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
        >

          <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#081221] border border-green-500/30 shadow-2xl p-10 text-center"
          >

            <button
              onClick={closeModal}
              className="absolute right-5 top-5 text-gray-400 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <div className="flex justify-center mb-6">

              <div className="bg-green-500/15 p-5 rounded-full">

                <CheckCircle2
                  size={70}
                  className="text-green-500"
                />

              </div>

            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Booking Request Sent!
            </h2>

            <p className="text-lg text-gray-300 leading-8">

              Thank you,
              <span className="font-bold text-blue-400">
                {" "}
                {bookingInfo.name}
              </span>
              !

              <br /><br />

              Our team will call you at

              <span className="font-semibold text-green-400">
                {" "}
                {bookingInfo.phone}
              </span>

              {" "}to confirm your

              <span className="font-semibold text-blue-400">
                {" "}
                {bookingInfo.service}
              </span>

              {" "}booking.

              <br /><br />

              We appreciate your trust in
              <span className="font-bold text-white">
                {" "}
                Permacon Enterprises
              </span>
              .

            </p>

            <button
              onClick={closeModal}
              className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold"
            >
              Close
            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

    <section
      id="booking"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-400 mb-5">
            Book A Consultation
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Tell us about your construction
            project and our experts will
            contact you with a free
            consultation and quotation.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div>

            <div className="bg-white/5 rounded-3xl border border-white/10 p-10">

              <CalendarDays className="w-14 h-14 text-blue-500 mb-6" />

              <h3 className="text-3xl font-bold mb-5">
                Let's Build Together
              </h3>

              <p className="text-gray-400 leading-8">
                Whether you're planning a
                residential home,
                commercial building,
                renovation or civil works,
                our experienced team is
                ready to assist from
                planning to completion.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  Free Site Visit
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  Free Consultation
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  Professional Advice
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  Detailed Quotation
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

            <form
              onSubmit={submitBooking}
              className="space-y-5"
            >

              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              />

              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              />

              <input
                required
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Project Location"
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              />

              <select
                required
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              >
                <option value="">Select Service</option>
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Renovation</option>
                <option>Civil Works</option>
                <option>General Contracting</option>
              </select>

              <input
                required
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              />

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-xl bg-[#101c31] border border-white/10 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-4 flex justify-center items-center gap-3 font-semibold transition"
              >

                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send size={18} />
                    Book Consultation
                  </>
                )}

              </motion.button>

            </form>

          </div>

        </div>

      </div>

    </section>

  </>
);
}