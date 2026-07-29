"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Send,
  CheckCircle2,
  X,
  MapPin,
  ShieldCheck,
  BadgeCheck,
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

  const closeModal = () => setSuccess(false);

  const submitBooking = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://permacon.onrender.com/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) throw new Error();

      setBookingInfo({
        name: form.name,
        phone: form.phone,
        service: form.service,
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

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
      alert("Unable to submit your booking. Please try again.");
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
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center px-6"
          >

            <motion.div
              initial={{ scale: .8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: .8 }}
              transition={{ duration: .35 }}
              className="relative max-w-lg w-full rounded-3xl bg-gradient-to-br from-[#071B35] via-[#0A2348] to-[#081221] border border-cyan-500/30 shadow-[0_0_60px_rgba(59,130,246,.25)] p-10 text-center"
            >

              <button
                onClick={closeModal}
                className="absolute right-5 top-5 text-gray-400 hover:text-white"
              >
                <X size={22}/>
              </button>

              <div className="flex justify-center mb-6">

                <motion.div
                  animate={{
                    rotate:[0,8,-8,0],
                    scale:[1,1.08,1]
                  }}
                  transition={{
                    repeat:Infinity,
                    duration:3
                  }}
                  className="bg-green-500/15 p-5 rounded-full"
                >

                  <CheckCircle2
                    size={70}
                    className="text-green-400"
                  />

                </motion.div>

              </div>

              <h2 className="text-3xl font-bold mb-5">
                Booking Submitted Successfully
              </h2>

              <p className="text-gray-300 leading-8">

                Thank you

                <span className="text-cyan-400 font-bold">
                  {" "}{bookingInfo.name}
                </span>

                .

                <br /><br />

                We'll contact you on

                <span className="text-green-400 font-semibold">
                  {" "}{bookingInfo.phone}
                </span>

                {" "}to discuss your

                <span className="text-blue-400 font-semibold">
                  {" "}{bookingInfo.service}
                </span>

                {" "}project.

              </p>

              <button
                onClick={closeModal}
                className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-700 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <section
        id="booking"
        className="relative overflow-hidden py-24 bg-gradient-to-b from-[#071B35] via-[#0A2348] to-[#041020] text-white"
      >

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            className="text-center mb-20"
          >

            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-5">
              Book A Consultation
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
              Tell us about your project and our experts
              will prepare a free consultation,
              site visit and detailed quotation.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <motion.div
              initial={{ opacity:0,x:-40 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-xl"
            >

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center mb-8">

                <CalendarDays
                  className="w-10 h-10"
                />

              </div>

              <h3 className="text-3xl font-bold mb-5">
                Let's Build Together
              </h3>

              <p className="text-gray-300 leading-8 mb-10">
                Whether you're planning a residential,
                commercial, renovation or civil works
                project, our specialists are ready
                to help from concept to completion.
              </p>

              <div className="space-y-6">

                {[
                  {
                    icon: BadgeCheck,
                    text:"Free Consultation"
                  },
                  {
                    icon: MapPin,
                    text:"Free Site Visit"
                  },
                  {
                    icon: ShieldCheck,
                    text:"Professional Advice"
                  },
                  {
                    icon: CheckCircle2,
                    text:"Detailed Quotation"
                  },
                ].map((item,index)=>{

                  const Icon=item.icon;

                  return(

                    <motion.div
                      key={index}
                      whileHover={{x:8}}
                      className="flex items-center gap-4"
                    >

                      <div className="p-3 rounded-xl bg-cyan-500/15">

                        <Icon className="w-6 h-6 text-cyan-400"/>

                      </div>

                      <span className="text-gray-300">
                        {item.text}
                      </span>

                    </motion.div>

                  )

                })}

              </div>

            </motion.div>
                      {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#0A1830] via-[#102347] to-[#081221] p-8 shadow-[0_0_40px_rgba(0,140,255,0.08)]"
          >

            {/* Glow */}

            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl" />

            <form
              onSubmit={submitBooking}
              className="relative space-y-5"
            >

              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none"
              />

              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none"
              />

              <input
                required
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Project Location"
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none"
              />

              <select
                required
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none"
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
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none"
              />

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-[#0D1C35] p-4 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none resize-none"
              />
                            <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 35px rgba(0,170,255,.45)",
                }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 py-4 font-semibold text-white transition-all duration-300 disabled:opacity-60"
              >

                {/* Animated Shine */}

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

                <span className="relative flex items-center justify-center gap-3">

                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                      />

                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Book Consultation
                    </>
                  )}

                </span>

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>

  </>
);
}