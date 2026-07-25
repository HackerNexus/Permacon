"use client";

import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050816] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
            <ShieldCheck className="w-10 h-10 text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-lg">
            Effective Date: {new Date().getFullYear()}
          </p>

        </div>

        {/* CONTENT */}

        <div className="space-y-12 text-gray-300 leading-8">

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>

            <p>
              Permacon Enterprises respects your privacy and is committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use and safeguard any information
              you provide while using our website or contacting us for
              construction and engineering services.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Project Details</li>
              <li>Booking Information</li>
              <li>Feedback and Reviews</li>
              <li>Location information voluntarily provided</li>
            </ul>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>Respond to inquiries.</li>
              <li>Prepare quotations.</li>
              <li>Schedule site visits.</li>
              <li>Deliver construction services.</li>
              <li>Improve customer experience.</li>
              <li>Respond to support requests.</li>
              <li>Maintain project records.</li>
            </ul>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              4. Information Security
            </h2>

            <p>
              We implement reasonable administrative and technical
              measures to protect your personal information from
              unauthorized access, disclosure, alteration or loss.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              5. Cookies
            </h2>

            <p>
              Our website may use cookies and similar technologies to
              improve performance, remember preferences and analyze
              visitor traffic.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              6. Third-Party Services
            </h2>

            <p>
              We may use trusted third-party services such as Google Maps,
              Google Analytics, WhatsApp and email providers to improve
              communication and website functionality.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              7. Your Rights
            </h2>

            <p>
              You may request access to your information, correction of
              inaccurate data or deletion of your personal information
              where applicable under Kenyan law.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              8. Changes to this Policy
            </h2>

            <p>
              We reserve the right to update this Privacy Policy whenever
              necessary. Updates will be published on this page together
              with the revised effective date.
            </p>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-white mb-4">
              9. Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">

              <p>
                <strong>Permacon Enterprises</strong>
              </p>

              <p>Email: permaconenterprises@gmail.com</p>

              <p>Phone: +254 728 590 996</p>

              <p>Location: Nairobi, Kenya</p>

            </div>

          </section>

        </div>

        {/* BACK BUTTON */}

        <div className="mt-20 text-center">

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 font-semibold transition duration-300"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    </main>
  );
}