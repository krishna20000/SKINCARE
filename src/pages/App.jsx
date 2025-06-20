import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroText from "../components/IntroText";
import Features from "../components/Features";
import ProductCarousel from "../components/ProductCarousel";
import BannerCTA from "../components/BannerCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { gsap } from "gsap";

const App = () => {
  useEffect(() => {
    gsap.from(".fade-in", {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="bg-[#F2F1EB] text-[#1E1E1E]">
      <Navbar />
      <Hero />
      <IntroText />
      <Features />
      <ProductCarousel />
      <BannerCTA />
      <ProductCarousel />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
