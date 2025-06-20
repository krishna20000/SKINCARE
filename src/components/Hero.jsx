import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="relative bg-[#F2F1EB] px-6 pt-16 pb-40 text-[#1E1E1E] overflow-hidden">
      {/* Floating Product - desktop only top right */}
      <img
        src="/assets/hero-sticker.png"
        alt="Product Tube"
        className="hidden lg:block absolute top-8 right-8 w-[150px] z-10 rounded-xl shadow-md"
      />

      {/* Desktop layout */}
      <div className="hidden lg:flex relative z-10 flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="max-w-sm space-y-4 text-left">
          <p className="text-sm font-light leading-6 text-[#333]">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
          <button className="bg-[#1E1E1E] text-white px-5 py-2 rounded-full text-sm hover:opacity-80 transition">
            Shop Now
          </button>
        </div>

        {/* Center Image */}
        <div className="relative">
          <img
            src="/assets/hero.jpg"
            alt="Glow Skincare"
            className="w-[400px] rounded-2xl object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 text-sm shadow-md">
            <span className="text-xl">🧼</span>
            <span>While giving you an invigorating cleansing experience.</span>
          </div>
        </div>

        {/* Right Heading */}
        <div className="relative z-20 flex flex-col items-start gap-4">
          <div
            ref={textRef}
            className="text-6xl font-extrabold leading-tight text-[#2D3B36] text-left"
          >
            GLOW<br />NATURALLY
          </div>
        </div>
      </div>

      {/* Mobile + Tablet layout */}
      <div className="flex flex-col lg:hidden">
        {/* Tagline */}
        <div className="mt-2 text-sm font-light leading-6 text-[#333] text-left max-w-xs md:pl-2">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </div>

        <div className="relative w-full min-h-[280px] mt-4">
          {/* Floating product image (hidden on desktop) */}
          <img
            src="/assets/hero-sticker.png"
            alt="Product Tube"
            className="absolute top-0 right-4 w-[220px] md:w-[200px] z-10"
          />

          {/* GLOW NATURALLY over image */}
          <h1
            ref={textRef}
            className="absolute top-[90px] left-4 z-30 text-[13vw] font-extrabold leading-none text-[#2D3B36]"
          >
            GLOW<br />NATURALLY
          </h1>
        </div>

        {/* Main Image */}
        <div className="relative w-full flex justify-center mt-24">
          <img
            src="/assets/hero.jpg"
            alt="Glow Skincare"
            className="w-[90%] rounded-2xl object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 text-sm shadow-md">
            <span className="text-xl">🧼</span>
            <span>While giving you an invigorating cleansing experience.</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full flex justify-end pr-4">
          <button className="mt-4 bg-[#1E1E1E] text-white px-6 py-2 rounded-full text-sm hover:opacity-80 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Bottom Paragraph */}
      <div className="relative z-10 mt-16 text-center md:max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-[#1E1E1E] px-4">
        <p>
          <strong>Experience the ultimate in skincare</strong> with our expertly
          formulated products, crafted to nourish, protect, and rejuvenate your
          skin. Combining the finest natural ingredients with{' '}
          <span className="text-[#2D3B36]">advanced science</span>, our
          collection ensures every skin type can achieve a radiant, healthy
          glow. Embrace your beauty with confidence every day.
        </p>
      </div>

      {/* SKINCARE Background Text */}
      <h1 className="absolute -bottom-2 w-full text-center text-[18vw] md:text-[12vw] font-extrabold text-[#2D3B36] z-0 leading-none pointer-events-none select-none">
        SKINCARE
      </h1>
    </section>
  );
};

export default Hero;
