import React from "react";

const BannerCTA = () => {
  return (
    <section className="bg-[#F2F1EB] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center text-center"
          style={{
            backgroundImage: "url('/assets/banner-cta.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Text & Button */}
          <div className="relative z-20 text-white px-4">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Feel Beautiful Inside and Out <br className="hidden md:block" />
              with Every Product.
            </h2>
            <button className="bg-white text-[#1E1E1E] px-6 py-2 rounded-full text-sm hover:opacity-80 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCTA;
