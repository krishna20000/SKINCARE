import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroText = () => {
  const paragraphRef = useRef();

  useEffect(() => {
    gsap.from(paragraphRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="px-6 py-16 text-center text-lg fade-in">
      <p ref={paragraphRef} className="inline-block max-w-2xl leading-8">
        {"Explore the ritual of skincare that rejuvenates your soul and nourishes your skin."
          .split(" ")
          .map((word, i) => (
            <span key={i} className="inline-block mr-1">{word}</span>
          ))}
      </p>
    </section>
  );
};

export default IntroText;
