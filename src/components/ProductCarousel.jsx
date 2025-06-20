import React, { useRef } from "react";

const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: "/assets/product-1.jpg",
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "/assets/product-2.jpg",
  },
  {
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: "/assets/product-3.jpg",
  },
];

const ProductCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F2F1EB] px-6 py-20 text-[#1E1E1E]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 border border-[#1E1E1E] px-4 py-1 rounded-full text-sm">
            <div className="w-2 h-2 bg-[#1E1E1E] rounded-full"></div>
            <span>Best Selling Products</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-center">
            Skincare That Brings Out <br /> Your Natural Radiance
          </h2>
        </div>

        {/* Product List with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#1E1E1E] text-white rounded-full flex items-center justify-center hover:bg-[#333] transition z-10"
          >
            ←
          </button>

          {/* Product Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 scroll-smooth overflow-x-hidden"
          >
            {products.map((item, index) => (
              <div
                key={index}
                className={`min-w-[280px] max-w-[280px] h-[400px] rounded-2xl overflow-hidden relative flex flex-col justify-end border ${
                  index === 1
                    ? "border-[#0E6FFF] shadow-lg"
                    : "border-transparent"
                }`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-white rounded-b-2xl flex items-center justify-between px-4 py-3 text-sm">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                  <button className="w-8 h-8 bg-[#F2F1EB] border rounded-md grid place-items-center hover:scale-105 transition">
                    🛒
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#1E1E1E] text-white rounded-full flex items-center justify-center hover:bg-[#333] transition z-10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
