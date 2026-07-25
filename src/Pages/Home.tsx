"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import VisionMission from "../components/VisionMission";
import Values from "../components/Values";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProjects from "../components/FeaturedProjects";
import OurTeam from "../components/Team";
import Feedback from "../components/Feedback";
import Testimonials from "../components/Testimonials";
import WorkingProcess from "../components/WorkingProcess";
import FAQs from "../components/FAQs";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About Company */}
      <About />

       {/* Vision and Mission */}
      <VisionMission />

      {/* Values */}
      <Values /> 

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Our Team */}
      <OurTeam />

      {/* Customer Feedback Form */}
      <Feedback />

      {/* Testimonials */}
      <Testimonials />

      {/* Working Process */}
      <WorkingProcess />

      {/* Frequently Asked Questions */}
      <FAQs />

      {/* Booking / Request Quote */}
      <Booking />

      {/* Contact & Google Map */}
      <Contact />     
      
      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </main>
  );
}