import { useState, useEffect } from "react";
import Image from "next/image";

const ProductImageSlider = ({ images, autoSlideInterval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length, autoSlideInterval]);

  return (
    <div className="relative md:w-[400px]">
      {/* Product Image */}
      <div className="max-h-[500px] overflow-hidden rounded-lg">
        <Image
          src={images[currentImageIndex]}
          className="m-auto w-[300px] md:w-[400px] rounded-lg"
          width={400}
          height={400}
          alt="Product Image"
        />
      </div>

      {/* Image Indicator Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
