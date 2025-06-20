import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#F2F1EB] text-[#1E1E1E] font-medium">
      <div className="text-xl font-bold tracking-wider">SKINCARE</div>
      <ul className="hidden md:flex space-x-8 text-sm">
        <li>All Products</li>
        <li>Serum</li>
        <li>Sunscreen</li>
        <li>Bundle</li>
      </ul>
      <div className="flex items-center space-x-4 text-sm">
        <span>Cart (1)</span>
        <button className="w-6 h-6 bg-[#1E1E1E] rounded-full"></button>
      </div>
    </nav>
  );
};

export default Navbar;
