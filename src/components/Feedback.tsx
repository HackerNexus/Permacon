"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Star,
  CheckCircle2,
  X,
  MessageSquareQuote,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";

interface FeedbackData {
  name: string;
  email: string;
  phone: string;
  rating: string;
  message: string;
}

export default function Feedback() {
  const [form, setForm] = useState<FeedbackData>({
    name: "",
    email: "",
    phone: "",
    rating: "",
    message: "",
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] =
    useState<Partial<FeedbackData>>({});
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [feedbackInfo, setFeedbackInfo] =
    useState({
      name: "",
      rating: "",
    });

  const ratingLabels = [
    "Very Poor",
    "Poor",
    "Good",
    "Very Good",
    "Excellent",
  ];

  const validate = () => {
    const newErrors: Partial<FeedbackData> = {};

    if (form.name.trim().length < 2)
      newErrors.name = "Please enter your full name.";

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      newErrors.email = "Invalid email address.";

    if (!/^(7|1)\d{8}$/.test(form.phone))
      newErrors.phone =
        "Enter a valid Kenyan mobile number.";

    if (!form.rating)
      newErrors.rating = "Please select a rating.";

    if (form.message.trim().length < 15)
      newErrors.message =
        "Feedback should contain at least 15 characters.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const closeModal = () => {
    setSuccess(false);
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://permacon.onrender.com/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok)
        throw new Error();

      setFeedbackInfo({
        name: form.name,
        rating: form.rating,
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      setForm({
        name: "",
        email: "",
        phone: "",
        rating: "",
        message: "",
      });

    } catch {
      alert(
        "Unable to submit feedback. Please try again."
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
              initial={{
                scale: .85,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: .85,
                opacity: 0,
              }}
              transition={{ duration: .35 }}
              className="relative w-full max-w-lg rounded-3xl border border-green-500/30 bg-[#081221] p-10 text-center shadow-[0_0_45px_rgba(0,180,255,.18)]"
            >

              <button
                onClick={closeModal}
                className="absolute right-5 top-5 text-gray-400 transition hover:text-white hover:rotate-90"
              >
                <X size={22} />
              </button>

              <div className="flex justify-center mb-6">

                <motion.div
                  initial={{ scale: .7 }}
                  animate={{ scale: 1 }}
                  className="rounded-full bg-green-500/15 p-5"
                >

                  <CheckCircle2
                    size={72}
                    className="text-green-500"
                  />

                </motion.div>

              </div>

              <h2 className="mb-4 text-3xl font-bold">
                🎉 Feedback Submitted!
              </h2>

              <p className="text-lg leading-8 text-gray-300">

                Thank you
                <span className="font-bold text-cyan-300">
                  {" "}{feedbackInfo.name}
                </span>
                .

                <br /><br />

                Your
                <span className="font-semibold text-yellow-400">
                  {" "}
                  {ratingLabels[
                    Number(feedbackInfo.rating) - 1
                  ]}
                </span>
                {" "}rating has been received.

              </p>

              <div className="mt-6 flex justify-center gap-2">

                {[1,2,3,4,5].map((star)=>(
                  <motion.div
                    key={star}
                    whileHover={{ scale: 1.25 }}
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= Number(feedbackInfo.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  </motion.div>
                ))}

              </div>

              <button
                onClick={closeModal}
                className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <section
        id="feedback"
        className="relative overflow-hidden py-24 bg-gradient-to-b from-[#06172E] via-[#0A2348] to-[#081221]"
      >

        {/* Background Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center mb-16"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">

              <MessageSquareQuote className="h-4 w-4" />

              Client Feedback

            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white">

              We'd Love To Hear
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Your Experience
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

              Your feedback helps us improve our services and continue delivering outstanding construction solutions across Kenya.

            </p>

          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT PANEL */}

            <div className="space-y-6">

              {[
                {
                  icon: ShieldCheck,
                  title: "Trusted Service",
                  text: "Every opinion helps us maintain our quality standards."
                },
                {
                  icon: ThumbsUp,
                  title: "Client Satisfaction",
                  text: "We value every review and continuously improve."
                }
              ].map((item,index)=>{

                const Icon=item.icon;

                return(

                  <motion.div
                    key={index}
                    whileHover={{x:10,scale:1.02}}
                    className="flex items-start gap-5 rounded-3xl border border-cyan-500/20 bg-white/5 p-7 backdrop-blur-xl"
                  >

                    <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 p-4">

                      <Icon className="h-8 w-8 text-white transition duration-300 group-hover:scale-110"/>

                    </div>

                    <div>

                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="leading-8 text-gray-300">
                        {item.text}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>
                        {/* RIGHT PANEL */}

            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(0,170,255,.12)]">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}

                <div>

                  <label className="mb-2 block font-medium text-white">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                    className="w-full rounded-xl border border-white/10 bg-[#101c31] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}

                </div>

                {/* Email */}

                <div>

                  <label className="mb-2 block font-medium text-white">
                    Email (Optional)
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                    className="w-full rounded-xl border border-white/10 bg-[#101c31] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Phone */}

                <div>

                  <label className="mb-2 block font-medium text-white">
                    Phone *
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-white/10 bg-[#101c31]">

                    <span className="flex items-center px-5 text-gray-400">
                      +254
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      placeholder="7XXXXXXXX"
                      onChange={(e) => {

                        const value = e.target.value.replace(/\D/g, "");

                        if (value.length <= 9) {

                          setForm({
                            ...form,
                            phone: value,
                          });

                        }

                        setErrors({
                          ...errors,
                          phone: "",
                        });

                      }}
                      className="w-full bg-transparent px-4 py-4 text-white outline-none"
                    />

                  </div>

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phone}
                    </p>
                  )}

                </div>

                {/* Rating */}

                <div>

                  <label className="mb-3 block font-medium text-white">
                    Overall Rating *
                  </label>

                  <div className="flex gap-2">

                    {[1,2,3,4,5].map((i)=>{

                      const selected =
                        (hoverRating || Number(form.rating)) >= i;

                      return(

                        <motion.button
                          key={i}
                          type="button"
                          whileHover={{
                            scale:1.25,
                            rotate:-8,
                          }}
                          whileTap={{
                            scale:.9,
                          }}
                          onClick={()=>{
                            setForm({
                              ...form,
                              rating:String(i),
                            });

                            setErrors({
                              ...errors,
                              rating:"",
                            });

                          }}
                          onMouseEnter={()=>
                            setHoverRating(i)
                          }
                          onMouseLeave={()=>
                            setHoverRating(0)
                          }
                        >

                          <Star
                            className={`h-10 w-10 transition ${
                              selected
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />

                        </motion.button>

                      );

                    })}

                  </div>

                  <p className="mt-3 text-gray-400">

                    {form.rating
                      ? ratingLabels[Number(form.rating)-1]
                      : "Select Rating"}

                  </p>

                  {errors.rating && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.rating}
                    </p>
                  )}

                </div>

                {/* Message */}

                <div>

                  <label className="mb-2 block font-medium text-white">
                    Feedback *
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleInput}
                    className="w-full rounded-xl border border-white/10 bg-[#101c31] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                  />

                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}

                </div>

                <motion.button
                  whileHover={{
                    scale:1.02,
                    boxShadow:"0 0 30px rgba(0,180,255,.35)",
                  }}
                  whileTap={{
                    scale:.98,
                  }}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 py-4 font-semibold text-white transition"
                >

                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send size={18}/>
                      Submit Feedback
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