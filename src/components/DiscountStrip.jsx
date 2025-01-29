import React from "react";

export default function DiscountStrip() {
  return (
    <div className="w-full sm:pr-2 py-1 pr-0 flex items-center overflow-hidden bg-[#ffffff39] backdrop-blur-[10px]">
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between whitespace-nowrap animate-scroll">
          <span className="text-white px-4">
            $500 off on orders above $5,000
          </span>
          <span className="text-white px-4">
            A random free t-shirt on orders above $6,500
          </span>
        </div>
      </div>
    </div>
  );
}
