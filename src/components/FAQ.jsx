import React, { useState } from "react";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Absolutely! Our products are formulated with gentle, natural ingredients to nourish sensitive skin types.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "100% cruelty-free. We never test on animals. All our skincare is ethically developed.",
  },
  {
    question: "What’s your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not happy, returns are easy and free.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship globally with trusted delivery partners.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "Use our skin quiz or talk to our support team for a personalized recommendation.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#F2F1EB] px-6 py-20 text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-1 relative">
          <img
            src="/assets/faq.jpg"
            alt="Skincare Product"
            className="rounded-2xl w-full max-w-[400px] mx-auto"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-md">
            <span className="text-xl">🎧</span>
            <span>24/7 We’re Here to Help You</span>
          </div>
        </div>

        {/* Right: FAQ List */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 border border-[#1E1E1E] px-4 py-1 rounded-full text-sm w-max">
            <div className="w-2 h-2 bg-[#1E1E1E] rounded-full"></div>
            <span>Frequently Asked Question</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            Answers to Your <br />
            Skincare Questions, All <br />
            in One Place.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#ccc] rounded-md px-4 py-3 bg-white cursor-pointer transition"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-sm text-[#555] mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
