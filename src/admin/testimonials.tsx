"use client";

import { useEffect, useState } from "react";
import {
  Star,
  User,
  Mail,
  Phone,
  CheckCircle,
  EyeOff,
  Trash2,
  RefreshCw,
} from "lucide-react";

interface Feedback {
  id: number;
  name: string;
  email: string;
  phone: string;
  rating: number;
  message: string;
  published: number;
}

export default function Feedback() {

  const [feedbacks, setFeedbacks] =
    useState<Feedback[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [workingId, setWorkingId] =
    useState<number | null>(null);

  /* ===========================
     LOAD FEEDBACK
  =========================== */

  const loadFeedback = async () => {

    try {

      const res = await fetch(
        "https://permacon.onrender.com/feedback"
      );

      const data = await res.json();

      setFeedbacks(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadFeedback();

  }, []);

  /* ===========================
     PUBLISH
  =========================== */

  const publishFeedback = async (
    id: number
  ) => {

    try {

      setWorkingId(id);

      await fetch(
        `https://permacon.onrender.com/feedback/${id}/publish`,
        {
          method: "PATCH",
        }
      );

      loadFeedback();

    } catch (err) {

      console.error(err);

    } finally {

      setWorkingId(null);

    }

  };

  /* ===========================
     HIDE
  =========================== */

  const hideFeedback = async (
    id: number
  ) => {

    try {

      setWorkingId(id);

      await fetch(
        `https://permacon.onrender.com/feedback/${id}/hide`,
        {
          method: "PATCH",
        }
      );

      loadFeedback();

    } catch (err) {

      console.error(err);

    } finally {

      setWorkingId(null);

    }

  };

  /* ===========================
     DELETE
  =========================== */

  const deleteFeedback = async (
    id: number
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete this feedback permanently?"
      );

    if (!confirmDelete) return;

    try {

      setWorkingId(id);

      await fetch(
        `http://permacon.onrender.com/feedback/${id}`,
        {
          method: "DELETE",
        }
      );

      loadFeedback();

    } catch (err) {

      console.error(err);

    } finally {

      setWorkingId(null);

    }

  };
  return (
    <div className="space-y-8">

  {/* HEADER */}

  <div className="flex items-center justify-between">

    <div>

      <h1 className="text-4xl font-bold text-white">
        Customer Feedback
      </h1>

      <p className="mt-2 text-gray-400">
        Review customer feedback, publish testimonials to the
        website, hide them or delete them permanently.
      </p>

    </div>

    <button
      onClick={loadFeedback}
      className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700 transition"
    >
      <RefreshCw className="h-5 w-5" />
      Refresh
    </button>

  </div>

  {/* LOADING */}

  {loading ? (

    <div className="rounded-3xl border border-white/10 bg-white/5 py-24 text-center text-gray-400">

      Loading feedback...

    </div>

  ) : feedbacks.length === 0 ? (

    <div className="rounded-3xl border border-white/10 bg-white/5 py-24 text-center">

      <User className="mx-auto h-16 w-16 text-blue-400 mb-5" />

      <h2 className="text-2xl font-bold text-white">
        No Feedback Yet
      </h2>

      <p className="mt-3 text-gray-400">
        Customer feedback submitted from the website will appear here.
      </p>

    </div>

  ) : (

    <div className="grid gap-6 lg:grid-cols-2">

      {feedbacks.map((feedback) => (

        <div
          key={feedback.id}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-blue-500 transition"
        >

          {/* TOP */}

          <div className="flex items-start justify-between">

            <div className="flex gap-4">

              <div className="rounded-full bg-blue-500/20 p-4">

                <User className="h-7 w-7 text-blue-400" />

              </div>

              <div>

                <h2 className="text-xl font-bold text-white">

                  {feedback.name}

                </h2>

                <div className="mt-2 flex gap-1">

                  {[1,2,3,4,5].map((star)=>(

                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= feedback.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />

                  ))}

                </div>

              </div>

            </div>

            {feedback.published ? (

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">

                Published

              </span>

            ) : (

              <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-400">

                Hidden

              </span>

            )}

          </div>

          {/* CONTACT */}

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-gray-300">

              <Mail className="h-5 w-5 text-red-400" />

              {feedback.email || "No email provided"}

            </div>

            <div className="flex items-center gap-3 text-gray-300">

              <Phone className="h-5 w-5 text-green-400" />

              +254 {feedback.phone}

            </div>

          </div>

          {/* MESSAGE */}

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#081221] p-6">

            <p className="leading-8 text-gray-300">

              {feedback.message}

            </p>

          </div>

          {/* ACTIONS */}

          <div className="mt-8 flex flex-wrap gap-4">

            {feedback.published ? (

              <button
                disabled={workingId === feedback.id}
                onClick={() =>
                  hideFeedback(feedback.id)
                }
                className="flex items-center gap-2 rounded-xl bg-yellow-500/20 px-5 py-3 text-yellow-400 hover:bg-yellow-500/30 transition"
              >

                <EyeOff className="h-5 w-5" />

                Hide

              </button>

            ) : (

              <button
                disabled={workingId === feedback.id}
                onClick={() =>
                  publishFeedback(feedback.id)
                }
                className="flex items-center gap-2 rounded-xl bg-green-500/20 px-5 py-3 text-green-400 hover:bg-green-500/30 transition"
              >

                <CheckCircle className="h-5 w-5" />

                Publish

              </button>

            )}

            <button
              disabled={workingId === feedback.id}
              onClick={() =>
                deleteFeedback(feedback.id)
              }
              className="flex items-center gap-2 rounded-xl bg-red-500/20 px-5 py-3 text-red-400 hover:bg-red-500/30 transition"
            >

              <Trash2 className="h-5 w-5" />

              Delete

            </button>

          </div>

        </div>

      ))}
          </div>

  )}

</div>

  );
}
  
