import React from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CadServices from "../components/CadServices";
import GetStarted from "../components/GetStarted";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";

// Assets
import affordable from "../assets/affordable.png";
import fast from "../assets/fast.png";
import drafters from "../assets/drafters.png";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-32 bg-gradient-to-br from-yellow-200 to-yellow-400 py-20 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          CAD Drafting Services for Your Needs
        </h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          High-quality, on-time CAD drawings for Civil 3D, Residential Design,
          Permit Plans and more.
        </p>
        <Button className="text-lg px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800">
          Get a Quote
        </Button>
      </section>

      {/* Our Services */}
      <Services />

      {/* Why Choose Us Section */}
      <section id="why" className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Fast Turnaround", image: fast },
            { title: "Affordable Pricing", image: affordable },
            { title: "Skilled Drafters", image: drafters },
          ].map(({ title, image }) => (
            <div key={title} className="text-center">
              <img src={image} alt={title} className="h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CAD Services Section */}
      <CadServices />

      {/* Get Started Section */}
      <GetStarted />

      {/* FAQ Section */}
      <FAQ />

      {/* ContactForm */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
