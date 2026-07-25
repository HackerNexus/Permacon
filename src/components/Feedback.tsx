"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Star,
  CheckCircle2,
  X,
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
        "http://permacon.onrender.com/feedback",
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

      // Save submitted data for popup
      setFeedbackInfo({
        name: form.name,
        rating: form.rating,
      });

      // Show popup
      setSuccess(true);

      // Auto-close after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // Reset form
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
              scale: 0.8,
              opacity: 0,
              y: 30,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: .35,
            }}
            className="relative w-full max-w-lg rounded-3xl bg-[#081221] border border-green-500/30 shadow-2xl p-10 text-center"
          >

            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
            >
              <X size={22}/>
            </button>

            <div className="flex justify-center mb-6">

              <div className="bg-green-500/15 p-5 rounded-full">

                <CheckCircle2
                  size={72}
                  className="text-green-500"
                />

              </div>

            </div>

            <h2 className="text-3xl font-bold mb-4">
              🎉 Feedback Submitted!
            </h2>

            <p className="text-lg text-gray-300 leading-8">

              Thank you,

              <span className="text-blue-400 font-bold">
                {" "}
                {feedbackInfo.name}
              </span>

              !

              <br /><br />

              We truly appreciate you taking the
              time to share your experience with
              <span className="font-semibold text-white">
                {" "}
                Permacon Enterprises
              </span>.

              <br /><br />

              You rated our service

              <span className="font-semibold text-yellow-400">
                {" "}
                {ratingLabels[
                  Number(feedbackInfo.rating) - 1
                ]}
              </span>.

              <div className="flex justify-center gap-1 mt-5">

                {[1,2,3,4,5].map((star)=>(

                  <Star
                    key={star}
                    className={`w-8 h-8 ${
                      star <= Number(feedbackInfo.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-600"
                    }`}
                  />

                ))}

              </div>

              <br />

              Your feedback helps us improve
              our services and continue
              delivering quality construction
              solutions.

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
      id="feedback"
      className="py-24 bg-[#081221]"
    >

      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Send Us Your Feedback
          </h2>

          <p className="text-gray-400 text-lg">
            We'd love to hear about your
            experience working with
            Permacon Enterprises.
          </p>

        </motion.div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Keep every form field exactly as you already have it */}

            {/* Name */}
            {/* Email */}
            {/* Phone */}
            {/* Rating */}
            {/* Message */}

            {/* Do not change any of your existing inputs */}
            {/* Name */}

<div>

  <label className="text-white font-medium mb-2 block">
    Full Name *
  </label>

  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleInput}
    className="w-full bg-[#101c31] border border-white/10 rounded-xl px-5 py-3 text-white outline-none focus:border-blue-500"
  />

  {errors.name && (
    <p className="text-red-400 text-sm mt-2">
      {errors.name}
    </p>
  )}

</div>

{/* Email */}

<div>

  <label className="text-white font-medium mb-2 block">
    Email (Optional)
  </label>

  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleInput}
    className="w-full bg-[#101c31] border border-white/10 rounded-xl px-5 py-3 text-white outline-none focus:border-blue-500"
  />

  {errors.email && (
    <p className="text-red-400 text-sm mt-2">
      {errors.email}
    </p>
  )}

</div>

{/* Phone */}

<div>

  <label className="text-white font-medium mb-2 block">
    Phone *
  </label>

  <div className="flex items-center rounded-xl overflow-hidden border border-white/10 bg-[#101c31]">

    <span className="px-5 text-gray-400">
      +254
    </span>

    <input
      type="tel"
      name="phone"
      value={form.phone}
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
      placeholder="7XXXXXXXX or 1XXXXXXXX"
      className="w-full bg-transparent py-3 px-4 text-white outline-none"
    />

  </div>

  {errors.phone && (
    <p className="text-red-400 text-sm mt-2">
      {errors.phone}
    </p>
  )}

</div>

{/* Rating */}

<div>

  <label className="text-white font-medium block mb-3">
    Overall Rating *
  </label>

  <div className="flex gap-2">

    {[1, 2, 3, 4, 5].map((i) => {

      const selected =
        (hoverRating || Number(form.rating)) >= i;

      return (

        <button
          key={i}
          type="button"
          onClick={() => {
            setForm({
              ...form,
              rating: String(i),
            });

            setErrors({
              ...errors,
              rating: "",
            });
          }}
          onMouseEnter={() =>
            setHoverRating(i)
          }
          onMouseLeave={() =>
            setHoverRating(0)
          }
        >

          <Star
            className={`w-10 h-10 ${
              selected
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-600"
            }`}
          />

        </button>

      );

    })}

  </div>

  <p className="text-gray-400 mt-2">

    {form.rating
      ? ratingLabels[Number(form.rating) - 1]
      : "Select Rating"}

  </p>

  {errors.rating && (
    <p className="text-red-400 text-sm mt-2">
      {errors.rating}
    </p>
  )}

</div>

{/* Message */}

<div>

  <label className="text-white font-medium mb-2 block">
    Feedback *
  </label>

  <textarea
    rows={6}
    name="message"
    value={form.message}
    onChange={handleInput}
    className="w-full bg-[#101c31] border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
  />

  {errors.message && (
    <p className="text-red-400 text-sm mt-2">
      {errors.message}
    </p>
  )}

</div>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: .98,
              }}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-4 flex justify-center items-center gap-3 font-semibold text-white transition"
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

    </section>

  </>
);
}