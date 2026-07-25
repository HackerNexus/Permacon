"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

    </div>
  );
}