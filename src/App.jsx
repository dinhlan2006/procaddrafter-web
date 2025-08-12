import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import các component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // thời gian animation
      offset: 100, // khoảng cách scroll để kích hoạt
      once: true, // chỉ chạy 1 lần
    });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Các Section */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="getstarted">
        <GetStarted />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
