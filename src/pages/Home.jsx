// src/pages/Home.jsx
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
import WhyChooseUs from "../components/WhyChooseUs";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      <section
        id="hero"
        className="relative pt-32 bg-gradient-to-br from-[#0A2540] via-[#1C3D5A] to-[#004E64] py-20 text-center text-white"
      >
        {/* Logo trong hero */}
        <img
          src="/logo-procad.png"
          alt="Procad Drafter"
          className="absolute left-8 top-12 w-40 md:w-48 drop-shadow-xl"
        />

        <h1 className="text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          CAD Drafting Services for Your Needs
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          High-quality, on-time CAD drawings for Civil 3D, Residential Design,
          Permit Plans, and more.
        </p>
        <Button className="text-lg px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-500 transition-all duration-300">
          Get a Quote
        </Button>
      </section>

      <Services />
      <WhyChooseUs />
      <TrustedBy />
      <Portfolio />
      <Testimonials />
      <CadServices />
      <GetStarted />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
