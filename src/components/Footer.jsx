import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1E2B26] text-white px-6 py-20 overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light leading-snug">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex gap-6 text-sm text-white/80">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6 text-right">
          <div>
            <p className="text-sm text-white/70">Get in Touch</p>
            <p className="text-lg font-medium">contact.skincare.com</p>
          </div>
          <div className="flex justify-end gap-6 text-sm text-white/80">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>

      {/* SKINCARE background at bottom behind */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center z-0 pointer-events-none select-none">
        <h1 className="text-[18vw] font-extrabold text-white/5 leading-none">
          SKINCARE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
