import React from "react";

const features = [
  {
    number: "01",
    title: "Bio Ingredients",
    description:
      "Get naturally powerful actives blended with our lab ingredients customized for radiance, stability and feel.",
  },
  {
    number: "02",
    title: "Everything Natural",
    description:
      "Pure ingredients for pure results. The perfect solution for your skin type & lifestyle.",
  },
  {
    number: "03",
    title: "All Handmade",
    description:
      "Made with love and care. All from our lab. Give your skin the holistic luxury blend it deserves.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#F2F1EB] px-6 py-20 text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left Text Block */}
        <div className="flex-1 space-y-6">
          <button className="border border-[#1E1E1E] text-sm px-4 py-1 rounded-full font-medium hover:bg-[#1E1E1E] hover:text-white transition">
            Why Our Products
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold">
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h2>

          <p className="text-sm text-[#333] leading-relaxed max-w-md">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Backed by natural care
            and lab science.
          </p>

          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-lg font-semibold text-[#2D3B36]">
                  {item.number}
                </span>
                <div>
                  <h4 className="font-semibold text-base">{item.title}</h4>
                  <p className="text-sm text-[#333]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Block */}
        <div className="flex-1 max-w-[420px] mx-auto">
          <div className="relative">
            <img
              src="/assets/why-choose.jpg"
              alt="Award-Winning Skincare"
              className="rounded-2xl w-full object-cover"
            />

            {/* Award Badge on Image */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-md">
              <span className="text-xl">🏆</span>
              <span>
                Best Skin Care Product <br />
                Award Winning
              </span>
            </div>
          </div>

          {/* Bottom Row Below Image */}
          <div className="mt-4 flex justify-between text-xs text-[#444]">
            <span>SINCE 2001</span>
            <span className="underline cursor-pointer">LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
